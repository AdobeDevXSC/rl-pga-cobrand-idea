/**
 * Statement block (cobrand)
 *
 * Row 1: the statement (a heading, or text that becomes a paragraph).
 * Row 2 (optional): attribution.
 * One display-size serif line on an immersive ground. When the section has no
 * ground of its own, the block gives it the black ground.
 * @param {Element} block The block element
 */
const GROUNDS = ['light', 'highlight', 'dark', 'black', 'cobrand', 'cobrand-accent'];

export default function decorate(block) {
  const [statementCell, attributionCell] = [...block.children].map((row) => row.firstElementChild);
  if (!statementCell) return;

  let statement = statementCell.querySelector('h1, h2, h3, h4, h5, h6, p');
  if (!statement) {
    statement = document.createElement('p');
    statement.append(...statementCell.childNodes);
  }
  statement.classList.add('cb-statement-text');

  const content = [statement];
  if (attributionCell && attributionCell.textContent.trim()) {
    const attribution = document.createElement('p');
    attribution.className = 'cb-statement-attribution';
    attribution.textContent = attributionCell.textContent.trim();
    content.push(attribution);
  }
  block.replaceChildren(...content);

  const section = block.closest('.section');
  if (section && !GROUNDS.some((ground) => section.classList.contains(ground))) {
    section.classList.add('black');
  }
}
