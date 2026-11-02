/**
 * Motion block (cobrand): the Cinematic motion register (DESIGN.md § Motion).
 *
 * Author it once per page, in the same section as the hero, so its styles are
 * in place before the first section is shown. It has no content of its own.
 * - Hero: slow image drift and title rise.
 * - Below the hero: text rises in and images settle as they enter the view.
 * Never touches the header, footer (logos), primary buttons or teaser overlay
 * text, and does nothing when the visitor prefers reduced motion.
 * @param {Element} block The block element
 */
const reveal = (main, observer) => {
  main.querySelectorAll(':scope > .section:not(.hero-container) :is(h2, h3, blockquote, p, li)')
    .forEach((el) => {
      if (el.classList.contains('cb-motion-reveal') || el.closest('.cb-motion-reveal')) return;
      if (el.querySelector('a.button.primary, picture') || el.closest('.teaser-overlay, .teaser-media')) return;
      const index = [...el.parentElement.children].indexOf(el);
      el.style.setProperty('--cb-motion-delay', `${Math.min(index, 4) * 0.12}s`);
      el.classList.add('cb-motion-reveal');
      observer.observe(el);
    });
  main.querySelectorAll('.columns picture, .teaser picture').forEach((picture) => {
    const frame = picture.parentElement;
    if (frame.classList.contains('cb-motion-settle')) return;
    frame.classList.add('cb-motion-settle');
    observer.observe(frame);
  });
};

export default function decorate(block) {
  const main = block.closest('main');
  const section = block.closest('.section');
  block.closest('.cb-motion-wrapper')?.remove();
  section?.classList.remove('cb-motion-container');
  if (!main || !window.matchMedia('(prefers-reduced-motion: no-preference)').matches) return;

  main.querySelector('.hero')?.classList.add('cb-motion-hero');
  document.documentElement.classList.add('cb-motion');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  // later sections are decorated lazily; tag their content as each block loads
  new MutationObserver(() => reveal(main, observer)).observe(main, {
    subtree: true,
    attributes: true,
    attributeFilter: ['data-block-status', 'data-section-status'],
  });
  reveal(main, observer);
}
