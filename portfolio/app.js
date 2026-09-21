const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('.menu-toggle');
const menuLabel = document.querySelector('.menu-label');
const navigation = document.querySelector('.primary-nav');
const navigationLinks = [...document.querySelectorAll('.primary-nav a[href^="#"]')];
const proofPanel = document.querySelector('.proof-panel');
const proofGraphic = document.querySelector('.range-graphic');
const aboutSection = document.querySelector('.about');
const aboutMark = document.querySelector('.about-mark');
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
let reducedMotion = motionPreference.matches;
let motionFrameQueued = false;

const clamp = (value, min = 0, max = 1) => Math.min(Math.max(value, min), max);

function setHeaderState() {
  header?.classList.toggle('is-scrolled', window.scrollY > 24);
}

function setDepth(element, property, section, distance) {
  if (!element || !section) return;
  const bounds = section.getBoundingClientRect();
  const offset = (window.innerHeight / 2 - (bounds.top + bounds.height / 2)) / window.innerHeight;
  element.style.setProperty(property, `${clamp(offset, -1, 1) * distance}px`);
}

function clearContinuousMotion() {
  proofGraphic?.style.removeProperty('--proof-depth-y');
  aboutMark?.style.removeProperty('--about-depth-y');
}

function updateMotionFrame() {
  motionFrameQueued = false;
  setHeaderState();

  const scrollRange = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
  header?.style.setProperty('--scroll-progress', String(clamp(window.scrollY / scrollRange)));

  if (reducedMotion || window.innerWidth < 900) {
    clearContinuousMotion();
    return;
  }

  setDepth(proofGraphic, '--proof-depth-y', proofPanel, 10);
  setDepth(aboutMark, '--about-depth-y', aboutSection, 18);
}

function scheduleMotionFrame() {
  if (motionFrameQueued) return;
  motionFrameQueued = true;
  window.requestAnimationFrame(updateMotionFrame);
}

function closeMenu({ restoreFocus = false } = {}) {
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Open navigation menu');
  if (menuLabel) menuLabel.textContent = 'Menu';
  navigation?.classList.remove('is-open');
  document.body.classList.remove('menu-open');
  if (restoreFocus) menuButton?.focus();
}

updateMotionFrame();
window.addEventListener('scroll', scheduleMotionFrame, { passive: true });

menuButton?.addEventListener('click', () => {
  const willOpen = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(willOpen));
  menuButton.setAttribute('aria-label', willOpen ? 'Close navigation menu' : 'Open navigation menu');
  if (menuLabel) menuLabel.textContent = willOpen ? 'Close' : 'Menu';
  navigation?.classList.toggle('is-open', willOpen);
  document.body.classList.toggle('menu-open', willOpen);
});

navigationLinks.forEach(link => link.addEventListener('click', () => closeMenu()));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') {
    closeMenu({ restoreFocus: true });
  }
});
window.addEventListener('resize', () => {
  if (window.innerWidth >= 900) closeMenu();
  scheduleMotionFrame();
});

const reveals = document.querySelectorAll('.reveal');

if (reducedMotion || !('IntersectionObserver' in window)) {
  reveals.forEach(element => element.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  reveals.forEach(element => revealObserver.observe(element));
}

motionPreference.addEventListener?.('change', event => {
  reducedMotion = event.matches;
  if (reducedMotion) {
    reveals.forEach(element => element.classList.add('is-visible'));
    proofPanel?.classList.remove('is-pointer-active');
  }
  scheduleMotionFrame();
});

const featuredCards = document.querySelectorAll('.featured-project-card');

featuredCards.forEach(card => {
  let cardFrame = 0;
  let cardEvent;

  function updateCardPointer() {
    cardFrame = 0;
    if (!card || !cardEvent) return;
    const bounds = card.getBoundingClientRect();
    card.style.setProperty('--card-x', `${cardEvent.clientX - bounds.left}px`);
    card.style.setProperty('--card-y', `${cardEvent.clientY - bounds.top}px`);
  }

  card.addEventListener('pointerenter', () => {
    if (!reducedMotion && finePointer.matches) card.classList.add('is-pointer-active');
  });
  card.addEventListener('pointermove', event => {
    if (reducedMotion || !finePointer.matches) return;
    cardEvent = event;
    if (!cardFrame) cardFrame = window.requestAnimationFrame(updateCardPointer);
  });
  card.addEventListener('pointerleave', () => {
    card.classList.remove('is-pointer-active');
    card.style.removeProperty('--card-x');
    card.style.removeProperty('--card-y');
  });
});

if ('IntersectionObserver' in window) {
  const sections = navigationLinks
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);
  const navigationObserver = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navigationLinks.forEach(link => {
      const active = link.getAttribute('href') === `#${visible.target.id}`;
      if (active) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-28% 0px -56% 0px', threshold: [0, 0.25, 0.6] });
  sections.forEach(section => navigationObserver.observe(section));
}

const email = 'arunreddy.co@gmail.com';
const copyButton = document.querySelector('.copy-email');
const copyStatus = document.querySelector('.copy-status');

copyButton?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(email);
    copyStatus.textContent = 'Email address copied.';
    copyButton.textContent = 'Copied';
    copyButton.classList.add('is-copied');
    window.setTimeout(() => {
      copyButton.textContent = 'Copy email address';
      copyButton.classList.remove('is-copied');
      copyStatus.textContent = '';
    }, 2200);
  } catch {
    copyStatus.textContent = 'Select the address above or use the email link.';
  }
});

const form = document.querySelector('#project-form');
const formStatus = document.querySelector('#form-status');
const downloadButton = document.querySelector('#download-brief');
const formFields = [...document.querySelectorAll('[data-field]')];
const formProgress = document.querySelector('[data-form-progress]');
const detailsCount = document.querySelector('[data-details-count]');
const projectTypeInput = document.querySelector('#project-type');
const selectField = document.querySelector('.field--select');
const selectTrigger = document.querySelector('.select-trigger');
const selectMenu = document.querySelector('.select-menu');
const selectValue = document.querySelector('[data-select-value]');
const selectOptions = [...document.querySelectorAll('.select-option')];
let latestBrief = '';

function fieldControl(field) {
  return field.querySelector('input:not([type="hidden"]), textarea, select, input[type="hidden"]');
}

function fieldIsComplete(field) {
  const control = fieldControl(field);
  if (!control) return false;
  const value = control.value.trim();
  if (control.name === 'details') return value.length >= 10;
  if (control.type === 'email') return value !== '' && control.validity.valid;
  return value !== '';
}

function updateFieldState(field) {
  const state = field.querySelector('[data-field-state]');
  const active = field.contains(document.activeElement) || field.classList.contains('is-open');
  const complete = fieldIsComplete(field);
  field.classList.toggle('is-active', active);
  field.classList.toggle('is-complete', complete);
  if (!state) return;
  state.textContent = field.classList.contains('is-invalid') ? 'Check' : active ? 'Active' : complete ? 'Ready' : 'Required';
}

function updateFormProgress() {
  const completed = formFields.filter(fieldIsComplete).length;
  form?.style.setProperty('--form-progress', `${(completed / formFields.length) * 100}%`);
  if (formProgress) formProgress.textContent = `${completed} / ${formFields.length} complete`;
  formFields.forEach(updateFieldState);
}

function setSelectOpen(open, { focusOption = false } = {}) {
  if (!selectTrigger || !selectMenu || !selectField) return;
  selectTrigger.setAttribute('aria-expanded', String(open));
  selectMenu.hidden = !open;
  selectField.classList.toggle('is-open', open);
  updateFieldState(selectField);
  if (open && focusOption) {
    (selectOptions.find(option => option.getAttribute('aria-selected') === 'true') || selectOptions[0])?.focus();
  }
}

function selectProjectType(option) {
  const currentTypeInput = document.querySelector('#project-type');
  if (!currentTypeInput || !selectValue) return;
  const value = option.dataset.value || '';
  currentTypeInput.value = value;
  currentTypeInput.setAttribute('value', value);
  selectValue.textContent = value;
  selectOptions.forEach(item => item.setAttribute('aria-selected', String(item === option)));
  selectField?.classList.remove('is-invalid');
  setSelectOpen(false);
  updateFormProgress();
  selectTrigger?.focus();
}

selectTrigger?.addEventListener('click', () => {
  setSelectOpen(selectTrigger.getAttribute('aria-expanded') !== 'true');
});

selectTrigger?.addEventListener('keydown', event => {
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault();
    setSelectOpen(true, { focusOption: true });
  } else if (event.key === 'Escape') {
    setSelectOpen(false);
  }
});

selectOptions.forEach((option, index) => {
  option.addEventListener('click', () => selectProjectType(option));
  option.addEventListener('keydown', event => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      const direction = event.key === 'ArrowDown' ? 1 : -1;
      selectOptions[(index + direction + selectOptions.length) % selectOptions.length].focus();
    } else if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault();
      selectOptions[event.key === 'Home' ? 0 : selectOptions.length - 1].focus();
    } else if (event.key === 'Escape') {
      event.preventDefault();
      setSelectOpen(false);
      selectTrigger?.focus();
    }
  });
});

document.addEventListener('click', event => {
  if (selectField && !selectField.contains(event.target)) setSelectOpen(false);
});

form?.addEventListener('focusin', event => {
  const field = event.target.closest?.('[data-field]');
  if (field) updateFieldState(field);
});

form?.addEventListener('focusout', event => {
  const field = event.target.closest?.('[data-field]');
  if (!field) return;
  window.setTimeout(() => {
    const control = fieldControl(field);
    const hasValue = Boolean(control?.value.trim());
    field.classList.toggle('is-invalid', hasValue && !fieldIsComplete(field));
    updateFieldState(field);
  }, 0);
});

form?.addEventListener('submit', event => {
  event.preventDefault();
  const fields = new FormData(form);
  const clean = key => String(fields.get(key) || '').trim();
  const nameInput = form.elements.namedItem('name');
  const emailInput = form.elements.namedItem('email');
  const detailsInput = form.elements.namedItem('details');

  nameInput.setCustomValidity(clean('name') ? '' : 'Please enter your name.');
  detailsInput.setCustomValidity(clean('details').length >= 10 ? '' : 'Please add at least 10 characters about your project.');
  const invalidControls = [nameInput, emailInput, detailsInput].filter(control => !control.checkValidity());
  formFields.forEach(field => field.classList.toggle('is-invalid', !fieldIsComplete(field)));
  if (!clean('type') || invalidControls.length) {
    formStatus.textContent = 'Check the highlighted fields before preparing your enquiry.';
    if (!clean('type') && !invalidControls.length) selectTrigger?.focus();
    else invalidControls[0]?.focus();
    updateFormProgress();
    return;
  }

  latestBrief = `Hi Arun,\n\nI'd like to discuss a website project.\n\nName: ${clean('name')}\nEmail: ${clean('email')}\nProject: ${clean('type')}\n\nAbout the project:\n${clean('details')}\n\nThanks,\n${clean('name')}`;
  const subject = `Website enquiry — ${clean('type')}`;
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(latestBrief)}`;
  formStatus.textContent = 'Your draft is ready in your email app. If it did not open, download the enquiry below. Nothing has been sent by this website.';
  downloadButton.hidden = false;
});

form?.addEventListener('input', event => {
  if ('setCustomValidity' in event.target) event.target.setCustomValidity('');
  const field = event.target.closest?.('[data-field]');
  field?.classList.remove('is-invalid');
  if (event.target.name === 'details' && detailsCount) detailsCount.textContent = `${event.target.value.length} / 2500`;
  updateFormProgress();
});

updateFormProgress();

downloadButton?.addEventListener('click', () => {
  if (!latestBrief) return;
  const blob = new Blob([`To: ${email}\n\n${latestBrief}`], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'website-enquiry.txt';
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
});
