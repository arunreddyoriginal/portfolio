"""Local static-link and HTTP smoke checks; run with the preview server active."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
from urllib.request import urlopen

ROOT = Path(__file__).resolve().parent

class Page(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.ids, self.refs, self.h1_count = set(), [], 0
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            assert attrs['id'] not in self.ids, f"Duplicate ID: {attrs['id']}"
            self.ids.add(attrs['id'])
        if tag == 'h1':
            self.h1_count += 1
        if tag in ('a', 'link') and attrs.get('href'):
            self.refs.append(attrs['href'])
        if tag in ('img', 'script') and attrs.get('src'):
            self.refs.append(attrs['src'])
        if tag == 'img':
            assert 'alt' in attrs, 'Missing image alternative text'

pages = {path: Page(path.read_text(encoding='utf-8')) for path in ROOT.rglob('*.html')}
checked = set()
for path, page in pages.items():
    assert page.h1_count == 1, f"Expected one h1 in {path.name}"
    for ref in page.refs:
        parts = urlsplit(ref)
        if parts.scheme or parts.netloc:
            continue
        target = (path.parent / unquote(parts.path)).resolve() if parts.path else path
        if target.is_dir():
            target /= 'index.html'
        assert target.is_file(), f"Missing local target: {path.name}: {ref}"
        if parts.fragment:
            assert target in pages and unquote(parts.fragment) in pages[target].ids, f"Missing anchor: {ref}"
        checked.add(target)
for path in sorted(checked | set(pages)):
    with urlopen('http://127.0.0.1:4173/' + path.relative_to(ROOT).as_posix(), timeout=5) as response:
        assert response.status == 200, path
print(f'PASS: {len(pages)} pages, one h1 per page, image alt attributes, all local links/anchors, {len(checked | set(pages))} HTTP resources.')
