/**
 * ─────────────────────────────────────────────────────────────
 *  MOUVEMENT — GSAP + ScrollTrigger + Lenis
 * ─────────────────────────────────────────────────────────────
 *  Règle d'or (guide) : les animations servent le design, jamais
 *  l'inverse. Tout est désactivé si l'utilisateur a demandé à
 *  réduire les animations ; le contenu reste toujours lisible
 *  sans JavaScript.
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
const $ = <T extends Element = HTMLElement>(sel: string, ctx: ParentNode = document) => ctx.querySelector<T>(sel as any) as T | null;
const $$ = <T extends Element = HTMLElement>(sel: string, ctx: ParentNode = document) => Array.from(ctx.querySelectorAll<T>(sel as any)) as T[];
const navH = () => parseFloat(getComputedStyle(root).getPropertyValue('--nav-h')) || 72;

/* ── Défilement fluide ─────────────────────────────────────── */
let lenis: Lenis | null = null;
if (!reduce) {
  lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis!.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

function scrollToTarget(hash: string) {
  const target = hash === '#top' || hash === '#main' ? 0 : $(hash);
  if (target === null) return;
  if (lenis) lenis.scrollTo(target as any, { duration: 1.4, easing: (t) => 1 - Math.pow(1 - t, 4) });
  else if (target === 0) window.scrollTo({ top: 0 });
  else (target as HTMLElement).scrollIntoView();
}

/* ── Liens : ancres en douceur, autres pages avec rideau ──── */
const curtain = $('[data-curtain]');

function leaveTo(url: string) {
  if (reduce || !curtain) { location.href = url; return; }
  try { sessionStorage.setItem('az-nav', '1'); sessionStorage.setItem('az-intro', '1'); } catch {}
  lenis?.stop();
  gsap.fromTo(curtain, { y: 0, yPercent: 101, visibility: 'visible' }, {
    yPercent: 0, duration: 0.75, ease: 'expo.inOut',
    onComplete: () => { location.href = url; },
  });
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
    if (url.hash !== '#top' && url.hash !== '#main') history.replaceState(null, '', url.hash);
    return;
  }
  if (samePage) return;
  e.preventDefault();
  closeMenu();
  leaveTo(url.href);
});

// Retour arrière (cache du navigateur) : on retire le rideau
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
  menuOpen = true;
  menu.hidden = false;
  requestAnimationFrame(() => menu.classList.add('is-open'));
  nav.classList.add('menu-open');
  toggle.setAttribute('aria-expanded', 'true');
  toggle.querySelector('.sr-only')!.textContent = toggle.dataset.labelClose ?? '';
  lenis?.stop();
}
function closeMenu() {
  if (!menuOpen || !menu || !nav || !toggle) return;
  menuOpen = false;
  menu.classList.remove('is-open');
  nav.classList.remove('menu-open');
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
    start: 0,
    end: 'max',
    onUpdate(self) {
      const y = self.scroll();
      nav.classList.toggle('is-scrolled', y > 8);
      if (menuOpen) return;
      if (y > window.innerHeight * 0.6 && self.direction === 1) nav.classList.add('is-hidden');
      else if (self.direction === -1 || y < 80) nav.classList.remove('is-hidden');
    },
  });
}

/* ── Ciel étoilé du hero (canvas léger, en pause hors écran) ─ */
function initStars() {
  const canvas = $<HTMLCanvasElement>('[data-stars]');
  const hero = $('[data-hero]');
  if (!canvas || !hero) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const TAU = Math.PI * 2;
  let w = 0, h = 0, raf = 0, running = false;
  let stars: { x: number; y: number; r: number; a: number; s: number; p: number }[] = [];

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.max(60, Math.min(220, Math.round((w * h) / 8000)));
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.pow(Math.random(), 1.4) * h * 0.78,
      r: Math.random() * 0.85 + 0.2,
      a: Math.random() * 0.55 + 0.15,
      s: Math.random() * 0.8 + 0.2,
      p: Math.random() * TAU,
    }));
    if (!running) draw(0);
  };
  const draw = (t: number) => {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#ffffff';
    for (const s of stars) {
      ctx.globalAlpha = reduce ? s.a : s.a * (0.55 + 0.45 * Math.sin(t * 0.0012 * s.s + s.p));
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, TAU); ctx.fill();
    }
    ctx.globalAlpha = 1;
  };
  const loop = (t: number) => { draw(t); raf = requestAnimationFrame(loop); };
  const start = () => { if (running || reduce) return; running = true; raf = requestAnimationFrame(loop); };
  const stop = () => { running = false; cancelAnimationFrame(raf); };

  resize();
  new ResizeObserver(() => resize()).observe(canvas);
  new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop())).observe(hero);
  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
}
initStars();

/* Tout ce qui suit est du mouvement pur : on s'arrête là si réduit */
if (!reduce) initMotion();

function initMotion() {
  const mm = gsap.matchMedia();
  const desktop = '(min-width: 901px)';

  /* ── Hero : entrée + sortie au scroll ─────────────────────── */
  const hero = $('[data-hero]');
  const introEl = $('[data-intro]');
  const playIntro = !!introEl && root.classList.contains('js-intro');

  if (hero) {
    const planet = $('[data-planet]', hero);
    const glow = $('[data-glow]', hero);
    const sky = $('.hero__sky', hero);
    const veil = $('[data-hero-veil]', hero);
    const content = $('[data-hero-content]', hero);
    const lines = $$('[data-hero-title] .mask__inner', hero);
    const items = $$('[data-hero-item]', hero);

    gsap.set(lines, { y: 0, yPercent: 105 });
    gsap.set(items, { autoAlpha: 0, y: 24 });
    gsap.set(planet, { yPercent: 16 });
    gsap.set(glow, { opacity: 0, scale: 0.55 });

    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
    let at = 0.1;

    // Arrivée depuis une autre page : le rideau se lève
    if (curtain && root.classList.contains('js-curtain')) {
      tl.to(curtain, { yPercent: -101, duration: 0.9, ease: 'expo.inOut' }, 0.05)
        .add(() => { root.classList.remove('js-curtain'); gsap.set(curtain, { yPercent: 101, visibility: 'hidden' }); });
      at = 0.55;
    }

    if (playIntro && introEl) {
      lenis?.stop();
      const letters = $$('.intro__letter', introEl);
      const bar = $('.intro__line span', introEl);
      gsap.set(letters, { y: 0, yPercent: 110 });
      tl.to(letters, { yPercent: 0, duration: 1, stagger: 0.055 }, 0.1)
        .to(bar, { scaleX: 1, duration: 1, ease: 'power3.inOut' }, 0.25)
        .to(letters, { yPercent: -110, duration: 0.6, stagger: 0.03, ease: 'expo.in' }, 1.2)
        .to(introEl, { yPercent: -100, duration: 1.1, ease: 'expo.inOut' }, 1.45)
        .add(() => {
          introEl.remove();
          root.classList.remove('js-intro');
          try { sessionStorage.setItem('az-intro', '1'); } catch {}
          lenis?.start();
        });
      at = 1.85;
    } else {
      introEl?.remove();
      root.classList.remove('js-intro');
    }

    tl.to(planet, { yPercent: 0, duration: 2.6 }, at - 0.4)
      .to(glow, { opacity: 0.85, scale: 1, duration: 2.8 }, at - 0.4)
      .to(lines, { yPercent: 0, duration: 1.5, stagger: 0.1 }, at)
      .to(items, { autoAlpha: 1, y: 0, duration: 1.3, stagger: 0.09 }, at + 0.4);

    // Sortie : le hero reste épinglé pendant que la section suivante le recouvre
    if (hero.hasAttribute('data-hero-pin')) {
      mm.add(desktop, () => {
        ScrollTrigger.create({ trigger: hero, start: 'top top', end: 'bottom top', pin: true, pinSpacing: false });
      });
    }
    gsap.timeline({ scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } })
      .to(content, { yPercent: -10, scale: 0.97, opacity: 0.25, ease: 'none' }, 0)
      .to(sky, { yPercent: -8, scale: 1.08, ease: 'none' }, 0)
      .to(veil, { opacity: 0.6, ease: 'none' }, 0);

    // Micro-parallaxe au pointeur (profondeur)
    if (finePointer) {
      const stars = $('[data-stars]', hero);
      const sx = gsap.quickTo(stars, 'x', { duration: 1.2, ease: 'power3' });
      const sy = gsap.quickTo(stars, 'y', { duration: 1.2, ease: 'power3' });
      const gx = gsap.quickTo(glow, 'x', { duration: 1.6, ease: 'power3' });
      hero.addEventListener('pointermove', (e) => {
        const nx = e.clientX / window.innerWidth - 0.5;
        const ny = e.clientY / window.innerHeight - 0.5;
        sx(nx * -18); sy(ny * -12); gx(nx * 40);
      });
    }
  } else {
    introEl?.remove();
    root.classList.remove('js-intro');
    if (curtain && root.classList.contains('js-curtain')) {
      gsap.to(curtain, { yPercent: -101, duration: 0.9, ease: 'expo.inOut', delay: 0.05, onComplete: () => {
        root.classList.remove('js-curtain'); gsap.set(curtain, { yPercent: 101, visibility: 'hidden' });
      } });
    }
  }

  /* ── Chiffres clés : décompte à l'apparition ──────────────── */
  $$('[data-count]').forEach((el) => {
    const end = parseFloat(el.dataset.count!);
    const obj = { v: 0 };
    el.textContent = '0';
    gsap.to(obj, {
      v: end, duration: 1.8, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      onUpdate: () => { el.textContent = Math.round(obj.v).toLocaleString(root.lang || 'fr'); },
    });
  });

  /* ── Révélations génériques ───────────────────────────────── */
  const reveals = $$('[data-reveal]');
  gsap.set(reveals, { opacity: 0, y: 32 });
  ScrollTrigger.batch(reveals, {
    start: 'top 88%',
    once: true,
    onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: 1.2, ease: 'expo.out', stagger: 0.08 }),
  });

  // Titres : chaque ligne sort de son masque
  $$('[data-split]').forEach((title) => {
    const inner = $$('.mask__inner', title);
    gsap.set(inner, { y: 0, yPercent: 105 });
    gsap.to(inner, {
      yPercent: 0, duration: 1.4, ease: 'expo.out', stagger: 0.1,
      scrollTrigger: { trigger: title, start: 'top 85%', once: true },
    });
  });

  /* ── Manifeste : les mots s'allument au fil de la lecture ─── */
  $$('[data-words]').forEach((el) => {
    const words = $$('.word', el);
    // Gris accessible (contraste ≥ 3:1 sur grand texte) → noir
    gsap.fromTo(words, { color: '#8f8d8a' }, {
      color: '#000000', ease: 'none', stagger: 0.1,
      scrollTrigger: { trigger: el, start: 'top 78%', end: 'bottom 52%', scrub: true },
    });
  });

  /* ── Écosystème : cartes empilées ─────────────────────────── */
  const cards = $$('[data-pcard]');
  mm.add(desktop, () => {
    cards.forEach((card, i) => {
      card.style.setProperty('--top', `calc(var(--nav-h) + 20px + ${i * 14}px)`);
      const next = cards[i + 1];
      if (!next) return;
      const shade = $('[data-pcard-shade]', card);
      gsap.timeline({
        scrollTrigger: { trigger: next, start: 'top bottom', end: () => `top ${navH() + 20 + (i + 1) * 14}px`, scrub: true },
      })
        .to(card, { scale: 0.94, ease: 'none' }, 0)
        .to(shade, { opacity: 0.55, ease: 'none' }, 0);
    });
    return () => cards.forEach((c) => c.style.removeProperty('--top'));
  });
  mm.add('(max-width: 900px)', () => {
    gsap.set(cards, { opacity: 0, y: 48 });
    ScrollTrigger.batch(cards, {
      start: 'top 90%', once: true,
      onEnter: (b) => gsap.to(b, { opacity: 1, y: 0, duration: 1.2, ease: 'expo.out', stagger: 0.1 }),
    });
  });

  // Visuels produits : les éléments se transforment au scroll
  $$('[data-pcard-visual]').forEach((visual) => {
    const fans = $$('[data-fan="2"], [data-fan="3"]', visual);
    if (fans.length) {
      gsap.from(fans, {
        x: 0, y: 0, rotation: 0, scale: 1, opacity: 0, ease: 'none',
        scrollTrigger: { trigger: visual, start: 'top 90%', end: 'center 55%', scrub: 0.8 },
      });
      gsap.from($('[data-fan="1"]', visual), {
        y: 40, ease: 'none',
        scrollTrigger: { trigger: visual, start: 'top 90%', end: 'center 55%', scrub: 0.8 },
      });
    }
    const line = $('[data-chart-line]', visual);
    if (line) {
      const area = $('[data-chart-area]', visual);
      gsap.timeline({ scrollTrigger: { trigger: visual, start: 'top 85%', end: 'center 50%', scrub: 0.8 } })
        .fromTo(line, { strokeDashoffset: 1 }, { strokeDashoffset: 0, ease: 'none' }, 0)
        .fromTo(area, { opacity: 0 }, { opacity: 1, ease: 'none' }, 0.3);
    }
  });

  /* ── Méthode : fil de progression ─────────────────────────── */
  const steps = $('[data-steps]');
  if (steps) {
    gsap.to($('[data-steps-progress]', steps), {
      scaleY: 1, ease: 'none',
      scrollTrigger: { trigger: steps, start: 'top 62%', end: 'bottom 62%', scrub: true },
    });
    $$('[data-step]', steps).forEach((step) => {
      ScrollTrigger.create({
        trigger: step, start: 'top 62%',
        onEnter: () => step.classList.add('is-active'),
        onLeaveBack: () => step.classList.remove('is-active'),
      });
    });
  }

  /* ── Principes : cartes en cascade ────────────────────────── */
  const cells = $$('[data-card]');
  gsap.set(cells, { opacity: 0, y: 40 });
  ScrollTrigger.batch(cells, {
    start: 'top 90%', once: true,
    onEnter: (b) => gsap.to(b, { opacity: 1, y: 0, duration: 1.1, ease: 'expo.out', stagger: 0.09, clearProps: 'transform' }),
  });

  /* ── CTA final : le panneau s'agrandit jusqu'au plein écran ─ */
  const panel = $('[data-cta-panel]');
  if (panel) {
    gsap.timeline({ scrollTrigger: { trigger: panel, start: 'top bottom', end: 'top top', scrub: true } })
      .fromTo(panel, { clipPath: 'inset(0% 5% 0% 5% round 28px)' }, { clipPath: 'inset(0% 0% 0% 0% round 0px)', ease: 'none' }, 0)
      .fromTo($('[data-cta-horizon]', panel), { yPercent: 18 }, { yPercent: 0, ease: 'none' }, 0);
  }

  /* ── Pied de page : le mot-symbole se lève ────────────────── */
  const word = $('[data-footer-word]');
  if (word) {
    const letters = $$('.footer__letter', word);
    gsap.set(letters, { yPercent: 100 });
    gsap.to(letters, {
      yPercent: 0, duration: 1.4, ease: 'expo.out', stagger: 0.05,
      scrollTrigger: { trigger: word, start: 'top 95%', once: true },
    });
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
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        xTo(dx * 0.22); yTo(dy * 0.3); lx(dx * 0.08);
      });
      el.addEventListener('pointerleave', () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.9, ease: 'elastic.out(1, 0.4)' });
        gsap.to(label, { x: 0, duration: 0.9, ease: 'elastic.out(1, 0.4)' });
      });
    });
  }

  // Recalcule les positions une fois la police chargée
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
  window.addEventListener('load', () => ScrollTrigger.refresh());
}

// Arrivée directe sur une ancre (ex. ariziki.com/#contact)
if (location.hash.length > 1) {
  window.addEventListener('load', () => setTimeout(() => scrollToTarget(location.hash), 300));
}
