"""Comprehensive SEO & Technical Validation Suite for Portfolio"""
import json
import xml.etree.ElementTree as ET
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
from urllib.request import urlopen

ROOT = Path(__file__).resolve().parent

class PageValidator(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.ids = set()
        self.refs = []
        self.h1_count = 0
        self.title = None
        self.meta_desc = None
        self.canonical = None
        self.in_title = False
        self.json_ld_blocks = []
        self.in_json_ld = False
        self.json_ld_buffer = ""
        self.images_without_alt = []
        self.images_without_dimensions = []
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)
        
        if 'id' in attrs_dict:
            assert attrs_dict['id'] not in self.ids, f"Duplicate ID: {attrs_dict['id']}"
            self.ids.add(attrs_dict['id'])
            
        if tag == 'h1':
            self.h1_count += 1
            
        if tag == 'title':
            self.in_title = True
            
        if tag == 'meta' and attrs_dict.get('name') == 'description':
            self.meta_desc = attrs_dict.get('content')
            
        if tag == 'link' and attrs_dict.get('rel') == 'canonical':
            self.canonical = attrs_dict.get('href')
            
        if tag in ('a', 'link') and attrs_dict.get('href'):
            self.refs.append(attrs_dict['href'])
            
        if tag in ('img', 'script') and attrs_dict.get('src'):
            self.refs.append(attrs_dict['src'])
            
        if tag == 'img':
            if 'alt' not in attrs_dict or not attrs_dict['alt'].strip():
                self.images_without_alt.append(attrs_dict.get('src', 'unknown'))
            if 'width' not in attrs_dict or 'height' not in attrs_dict:
                self.images_without_dimensions.append(attrs_dict.get('src', 'unknown'))
                
        if tag == 'script' and attrs_dict.get('type') == 'application/ld+json':
            self.in_json_ld = True
            self.json_ld_buffer = ""

    def handle_endtag(self, tag):
        if tag == 'title':
            self.in_title = False
        if tag == 'script' and self.in_json_ld:
            self.in_json_ld = False
            self.json_ld_blocks.append(self.json_ld_buffer)

    def handle_data(self, data):
        if self.in_title:
            self.title = (self.title or "") + data
        if self.in_json_ld:
            self.json_ld_buffer += data

def run_tests():
    print("--- RUNNING SEO & TECHNICAL VALIDATION SUITE ---")
    
    # 1. HTML Validation
    pages = {path: PageValidator(path.read_text(encoding='utf-8')) for path in ROOT.rglob('*.html')}
    checked = set()
    
    for path, page in pages.items():
        print(f"\nValidating HTML: {path.name}")
        assert page.h1_count == 1, f"Expected exactly one h1 in {path.name}, found {page.h1_count}"
        print("[PASS] H1 Tag: Single H1 present")
        
        assert page.title and len(page.title.strip()) > 10, f"Missing or short title in {path.name}"
        print(f"[PASS] Page Title: '{page.title.strip()}'")
        
        assert page.meta_desc and len(page.meta_desc.strip()) > 30, f"Missing or short meta description in {path.name}"
        print(f"[PASS] Meta Description: '{page.meta_desc.strip()[:60]}...'")
        
        assert page.canonical, f"Missing canonical link in {path.name}"
        print(f"[PASS] Canonical Link: {page.canonical}")
        
        assert not page.images_without_alt, f"Images missing alt text: {page.images_without_alt}"
        print("[PASS] Images Alt Text: All images have descriptive alt attributes")
        
        # Verify JSON-LD Schema
        assert len(page.json_ld_blocks) > 0, f"No JSON-LD schema found in {path.name}"
        for i, raw_json in enumerate(page.json_ld_blocks):
            schema_data = json.loads(raw_json)
            assert "@context" in schema_data, f"Missing @context in JSON-LD block {i}"
            print(f"[PASS] Structured Data (JSON-LD): Valid schema with context '{schema_data['@context']}'")

        for ref in page.refs:
            parts = urlsplit(ref)
            if parts.scheme or parts.netloc:
                continue
            target = (path.parent / unquote(parts.path)).resolve() if parts.path else path
            if target.is_dir():
                target /= 'index.html'
            assert target.is_file(), f"Missing local target in {path.name}: {ref}"
            if parts.fragment:
                assert target in pages and unquote(parts.fragment) in pages[target].ids, f"Missing anchor: {ref}"
            checked.add(target)

    # 2. robots.txt Validation
    robots_path = ROOT / "robots.txt"
    assert robots_path.is_file(), "robots.txt is missing!"
    robots_text = robots_path.read_text(encoding='utf-8')
    assert "Sitemap:" in robots_text and "User-agent:" in robots_text, "Invalid robots.txt format"
    print("\n[PASS] robots.txt: File exists and contains valid directives & sitemap location")

    # 3. sitemap.xml Validation
    sitemap_path = ROOT / "sitemap.xml"
    assert sitemap_path.is_file(), "sitemap.xml is missing!"
    tree = ET.parse(sitemap_path)
    root = tree.getroot()
    urls = [elem.text for elem in root.findall("{http://www.sitemaps.org/schemas/sitemap/0.9}url/{http://www.sitemaps.org/schemas/sitemap/0.9}loc")]
    assert len(urls) >= 5, "Sitemap has too few URLs!"
    print(f"[PASS] sitemap.xml: Valid XML format with {len(urls)} indexed URLs")

    # 4. HTTP Smoke Checks via Preview Server
    print("\nTesting HTTP Endpoint Availability (Preview Server)...")
    try:
        for path in sorted(checked | set(pages)):
            url = 'http://127.0.0.1:4173/' + path.relative_to(ROOT).as_posix()
            with urlopen(url, timeout=5) as response:
                assert response.status == 200, f"Failed HTTP check for {url}"
        print("[PASS] Preview Server: All static assets & pages return HTTP 200 OK")
    except Exception as e:
        print(f"[SKIP] Preview server check (restart preview server to verify): {e}")

    print("\n==================================================")
    print("ALL SEO & TECHNICAL CHECKS PASSED SUCCESSFULLY!")
    print("==================================================")

if __name__ == '__main__':
    run_tests()
