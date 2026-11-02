/*
 * cb-motion (prototype): reveal text and settle images as they enter the viewport.
 * Skips the header, footer (logos), any primary button and teaser overlay text.
 * Does nothing when the visitor prefers reduced motion.
 */
if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  document.documentElement.classList.add('cine-ready');

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  const tag = () => {
    const main = document.querySelector('main');
    main.querySelectorAll(':scope > .section:not(.hero-container) :is(h2, h3, blockquote, p, li)')
      .forEach((el) => {
        if (el.classList.contains('cine-reveal') || el.closest('.cine-reveal')) return;
        if (el.querySelector('a.button.primary, picture') || el.closest('.teaser-overlay, .teaser-media')) return;
        const siblings = [...el.parentElement.children];
        el.style.setProperty('--cine-delay', `${Math.min(siblings.indexOf(el), 4) * 0.12}s`);
        el.classList.add('cine-reveal');
        io.observe(el);
      });
    main.querySelectorAll('.columns picture, .teaser picture').forEach((pic) => {
      const frame = pic.parentElement;
      if (frame.classList.contains('cine-settle')) return;
      frame.classList.add('cine-settle');
      io.observe(frame);
    });
  };

  new MutationObserver(tag).observe(document.querySelector('main'), {
    subtree: true,
    attributes: true,
    attributeFilter: ['data-block-status'],
  });
  window.addEventListener('load', tag);
}
