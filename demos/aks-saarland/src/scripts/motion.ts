/**
 * ─────────────────────────────────────────────────────────────
 *  MOUVEMENT — GSAP + ScrollTrigger + Lenis
 * ─────────────────────────────────────────────────────────────
 *  Les animations servent le propos (une machine qui démarre, une
 *  flèche qui se lève) et jamais l'inverse. Tout est coupé si
 *  l'utilisateur demande à réduire les animations ; le contenu
 *  reste lisible sans JavaScript.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

const root = document.documentElement;
root.classList.add('motion-ready');

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const $ = <T extends Element = HTMLElement>(sel: string, ctx: ParentNode = document) => ctx.querySelector(sel) as T | null;
const $$ = <T extends Element = HTMLElement>(sel: string, ctx: ParentNode = document) => Array.from(ctx.querySelectorAll(sel)) as T[];
const navH = () => parseFloat(getComputedStyle(root).getPropertyValue('--nav-h')) || 76;

/* ── Défilement fluide ─────────────────────────────────────── */
let lenis: Lenis | null = null;
if (!reduce) {
  lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis!.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

function scrollToTarget(hash: string) {
  const target = hash === '#top' || hash === '#main' ? 0 : $(hash);
  if (target === null) return;
  if (lenis) lenis.scrollTo(target as any, { duration: 1.4, offset: hash === '#anfrage' ? -navH() / 2 : 0, easing: (t) => 1 - Math.pow(1 - t, 4) });
  else if (target === 0) window.scrollTo({ top: 0 });
  else (target as HTMLElement).scrollIntoView();
}

/* ── Liens : ancres en douceur, autres pages avec rideau ──── */
const curtain = $('[data-curtain]');
function leaveTo(url: string) {
  if (reduce || !curtain) { location.href = url; return; }
  try { sessionStorage.setItem('aks-nav', '1'); sessionStorage.setItem('aks-intro', '1'); } catch {}
  lenis?.stop();
  gsap.fromTo(curtain, { y: 0, yPercent: 101, visibility: 'visible' }, { yPercent: 0, duration: 0.7, ease: 'expo.inOut', onComplete: () => { location.href = url; } });
}
document.addEventListener('click', (e) => {
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href]');
  if (!a || a.target === '_blank' || a.hasAttribute('download')) return;
  const url = new URL(a.href, location.href);
  if (url.origin !== location.origin || !/^https?:$/.test(url.protocol)) return;
  const samePage = url.pathname === location.pathname && url.search === location.search;
  if (samePage && url.hash.length > 1) {
    e.preventDefault();
    closeMenu();
    scrollToTarget(url.hash);
    history.replaceState(null, '', url.hash);
    return;
  }
  if (samePage) return;
  e.preventDefault();
  closeMenu();
  leaveTo(url.href);
});
window.addEventListener('pageshow', (e) => {
  if (e.persisted && curtain) { gsap.set(curtain, { y: 0, yPercent: 101, visibility: 'hidden' }); lenis?.start(); }
});

/* ── Navigation : thème, masquage, menu mobile ─────────────── */
const nav = $('[data-nav]');
const menu = $('[data-menu]');
const toggle = $<HTMLButtonElement>('[data-menu-toggle]');
let menuOpen = false;
function openMenu() {
  if (!menu || !nav || !toggle) return;
  menuOpen = true; menu.hidden = false;
  requestAnimationFrame(() => menu.classList.add('is-open'));
  nav.classList.add('menu-open');
  toggle.setAttribute('aria-expanded', 'true');
  toggle.querySelector('.sr-only')!.textContent = toggle.dataset.labelClose ?? '';
  lenis?.stop();
}
function closeMenu() {
  if (!menuOpen || !menu || !nav || !toggle) return;
  menuOpen = false;
  menu.classList.remove('is-open'); nav.classList.remove('menu-open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.querySelector('.sr-only')!.textContent = toggle.dataset.labelOpen ?? '';
  lenis?.start();
  window.setTimeout(() => { if (!menuOpen) menu.hidden = true; }, 700);
}
toggle?.addEventListener('click', () => (menuOpen ? closeMenu() : openMenu()));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

if (nav) {
  $$('[data-nav-theme]').forEach((section) => {
    const theme = section.dataset.navTheme!;
    ScrollTrigger.create({
      trigger: section,
      start: () => `top ${navH() / 2}`,
      end: () => `bottom ${navH() / 2}`,
      onEnter: () => (nav.dataset.theme = theme),
      onEnterBack: () => (nav.dataset.theme = theme),
    });
  });
  ScrollTrigger.create({
    start: 0, end: 'max',
    onUpdate(self) {
      const y = self.scroll();
      nav.classList.toggle('is-scrolled', y > 8);
      if (menuOpen) return;
      if (y > window.innerHeight * 0.6 && self.direction === 1) nav.classList.add('is-hidden');
      else if (self.direction === -1 || y < 80) nav.classList.remove('is-hidden');
    },
  });
}

if (!reduce) initMotion();
else { $('[data-intro]')?.remove(); root.classList.remove('js-intro', 'js-curtain'); }

function initMotion() {
  const mm = gsap.matchMedia();
  const desktop = '(min-width: 961px)';

  /* ── Tracteur : roues proportionnelles au déplacement ─────── */
  const machine = $('[data-hero-machine]');
  const svg = $<SVGSVGElement>('[data-tractor]');
  const spins = $$<SVGGElement>('[data-tr-spin]');
  const lights = $$<SVGElement>('[data-tr-light]');
  const callouts = $$<SVGGElement>('[data-callout]');
  const unit = () => (svg ? svg.getBoundingClientRect().width / 800 : 1);
  // Roue arrière r = 100 unités ; la roue avant (r = 70) tourne 1,43 fois plus vite.
  const drive = { x: 0 };
  const applyDrive = () => {
    if (!machine) return;
    gsap.set(machine, { x: drive.x });
    const deg = (drive.x / unit() / (2 * Math.PI * 100)) * 360;
    spins.forEach((s) => gsap.set(s, { rotation: deg * parseFloat(s.dataset.ratio ?? '1') }));
  };

  /* ── Entrée du site + hero ─────────────────────────────────── */
  const hero = $('[data-hero]');
  const introEl = $('[data-intro]');
  const playIntro = !!introEl && root.classList.contains('js-intro');
  const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
  let at = 0.15;

  if (curtain && root.classList.contains('js-curtain')) {
    tl.to(curtain, { yPercent: -101, duration: 0.9, ease: 'expo.inOut' }, 0.05)
      .add(() => { root.classList.remove('js-curtain'); gsap.set(curtain, { yPercent: 101, visibility: 'hidden' }); });
    at = 0.5;
  }

  if (playIntro && introEl) {
    lenis?.stop();
    const letters = $$('.intro__letter', introEl);
    gsap.set(letters, { y: 0, yPercent: 110 });
    tl.to(letters, { yPercent: 0, duration: 0.9, stagger: 0.07 }, 0.1)
      .to($('.intro__beacon span', introEl), { opacity: 1, duration: 0.08, repeat: 3, yoyo: true, ease: 'none' }, 0.45)
      .to($('.intro__line span', introEl), { scaleX: 1, duration: 0.9, ease: 'power3.inOut' }, 0.3)
      .to($('.intro__label', introEl), { opacity: 1, duration: 0.6 }, 0.55)
      .to(introEl, { yPercent: -100, duration: 1, ease: 'expo.inOut' }, 1.35)
      .add(() => {
        introEl.remove(); root.classList.remove('js-intro');
        try { sessionStorage.setItem('aks-intro', '1'); } catch {}
        lenis?.start();
      });
    at = 1.65;
  } else {
    introEl?.remove();
    root.classList.remove('js-intro');
  }

  if (hero) {
    const lines = $$('[data-hero-title] .mask__inner', hero);
    const items = $$('[data-hero-item]', hero);
    const furrows = $('[data-furrows]', hero);
    const rows = $('[data-rows]', hero);
    gsap.set(lines, { y: 0, yPercent: 105 });
    gsap.set(items, { autoAlpha: 0, y: 20 });
    gsap.set(furrows, { strokeDasharray: 1, strokeDashoffset: 1 });
    gsap.set(rows, { opacity: 0 });
    gsap.set(lights, { autoAlpha: 0 });
    gsap.set(callouts, { autoAlpha: 0 });

    // Le tracteur entre par la droite, roues en mouvement
    const startX = () => Math.min(window.innerWidth * 0.55, 760);
    drive.x = startX(); applyDrive();
    tl.to(furrows, { strokeDashoffset: 0, duration: 2.2, ease: 'power2.inOut' }, at - 0.2)
      .to(rows, { opacity: 1, duration: 1.6 }, at + 0.4)
      .to(drive, { x: 0, duration: 2.4, ease: 'power3.out', onUpdate: applyDrive }, at - 0.1)
      .to(lines, { yPercent: 0, duration: 1.4, stagger: 0.1 }, at)
      .to(items, { autoAlpha: 1, y: 0, duration: 1.2, stagger: 0.08 }, at + 0.45)
      // Contact : le gyrophare et les phares s'allument
      .to(lights, { autoAlpha: 1, duration: 0.25, ease: 'none' }, at + 1.9)
      .to(callouts, { autoAlpha: 1, duration: 0.8, stagger: 0.12 }, at + 2.1);

    // Sortie au défilement : le tracteur continue sa route, le texte s'efface
    const exit = { x: 0 };
    gsap.timeline({ scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } })
      .to($('[data-hero-content]', hero), { yPercent: -12, opacity: 0.2, ease: 'none' }, 0)
      .to($('[data-field]', hero), { yPercent: 10, ease: 'none' }, 0)
      .to(exit, {
        x: () => -window.innerWidth * 0.22, ease: 'none',
        onUpdate: () => { if (tl.progress() === 1) { drive.x = exit.x; applyDrive(); } },
      }, 0);
  }

  /* ── Révélations génériques ───────────────────────────────── */
  const reveals = $$('[data-reveal]');
  gsap.set(reveals, { opacity: 0, y: 28 });
  ScrollTrigger.batch(reveals, {
    start: 'top 90%', once: true,
    onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: 1.1, ease: 'expo.out', stagger: 0.08 }),
  });
  $$('[data-split]').forEach((title) => {
    const inner = $$('.mask__inner', title);
    gsap.set(inner, { y: 0, yPercent: 105 });
    gsap.to(inner, { yPercent: 0, duration: 1.3, ease: 'expo.out', stagger: 0.09, scrollTrigger: { trigger: title, start: 'top 86%', once: true } });
  });

  /* ── Atelier : la phrase s'allume au fil de la lecture ────── */
  $$('[data-words]').forEach((el) => {
    gsap.fromTo($$('.word', el), { color: '#7d8696' }, {
      color: '#101529', ease: 'none', stagger: 0.1,
      scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 50%', scrub: true },
    });
  });

  /* ── Cartes en cascade ────────────────────────────────────── */
  const cards = $$('[data-card]');
  gsap.set(cards, { opacity: 0, y: 36 });
  ScrollTrigger.batch(cards, {
    start: 'top 92%', once: true,
    onEnter: (b) => gsap.to(b, { opacity: 1, y: 0, duration: 1, ease: 'expo.out', stagger: 0.08, clearProps: 'transform' }),
  });

  /* ── Familles de machines : défilement horizontal épinglé ─── */
  const pin = $('[data-hscroll]');
  const track = $('[data-hscroll-track]');
  if (pin && track) {
    mm.add(desktop, () => {
      const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);
      const bar = $('[data-hscroll-progress]', pin);
      gsap.to(track, {
        x: () => -distance(), ease: 'none',
        scrollTrigger: {
          trigger: pin, start: 'center 54%', end: () => `+=${distance()}`,
          pin: true, scrub: 0.8, invalidateOnRefresh: true, anticipatePin: 1,
          onUpdate: (self) => bar && gsap.set(bar, { scaleX: self.progress }),
        },
      });
    });
  }

  /* ── Mietpark : la flèche du télescopique se lève ─────────── */
  const boom = $('[data-loader-boom]');
  const fork = $('[data-loader-fork]');
  if (boom && fork) {
    gsap.timeline({ scrollTrigger: { trigger: '#mietpark', start: 'top 60%', end: 'bottom 80%', scrub: 0.6 } })
      .fromTo(boom, { rotation: 0, svgOrigin: '420 161' }, { rotation: 26, svgOrigin: '420 161', ease: 'none' }, 0)
      .fromTo(fork, { rotation: 0, svgOrigin: '30 161' }, { rotation: -26, svgOrigin: '30 161', ease: 'none' }, 0);
  }

  /* ── Chiffres des fiches techniques ───────────────────────── */
  $$('[data-count]').forEach((el) => {
    const end = parseFloat(el.dataset.count!);
    const decimals = (el.dataset.count!.split('.')[1] ?? '').length;
    const nf = new Intl.NumberFormat(root.lang || 'de', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    const obj = { v: 0 };
    gsap.to(obj, {
      v: end, duration: 1.6, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 92%', once: true },
      onStart: () => { el.textContent = nf.format(0); },
      onUpdate: () => { el.textContent = nf.format(obj.v); },
    });
  });

  /* ── CTA final : le panneau s'élargit ─────────────────────── */
  const panel = $('[data-cta-panel]');
  if (panel) {
    gsap.fromTo(panel, { clipPath: 'inset(0% 4% 0% 4% round 18px)' }, {
      clipPath: 'inset(0% 0% 0% 0% round 0px)', ease: 'none',
      scrollTrigger: { trigger: panel, start: 'top bottom', end: 'top 20%', scrub: true },
    });
  }

  /* ── Pied de page : AKS sort du sol ───────────────────────── */
  const word = $('[data-footer-word]');
  if (word) {
    const letters = $$('.footer__letter', word);
    gsap.set(letters, { yPercent: 100 });
    gsap.to(letters, { yPercent: 0, duration: 1.4, ease: 'expo.out', stagger: 0.08, scrollTrigger: { trigger: word, start: 'top 96%', once: true } });
  }

  /* ── Boutons magnétiques (souris uniquement) ──────────────── */
  if (finePointer) {
    $$('[data-magnetic]').forEach((el) => {
      const label = $('.btn__label', el) ?? el;
      const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3' });
      const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3' });
      const lx = gsap.quickTo(label, 'x', { duration: 0.6, ease: 'power3' });
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        xTo((e.clientX - (r.left + r.width / 2)) * 0.2); yTo((e.clientY - (r.top + r.height / 2)) * 0.28); lx((e.clientX - (r.left + r.width / 2)) * 0.06);
      });
      el.addEventListener('pointerleave', () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.9, ease: 'elastic.out(1, 0.4)' });
        gsap.to(label, { x: 0, duration: 0.9, ease: 'elastic.out(1, 0.4)' });
      });
    });
  }

  document.fonts?.ready.then(() => ScrollTrigger.refresh());
  window.addEventListener('load', () => ScrollTrigger.refresh());
}

if (location.hash.length > 1) {
  window.addEventListener('load', () => setTimeout(() => scrollToTarget(location.hash), 300));
}
