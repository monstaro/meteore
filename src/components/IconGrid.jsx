import { Link } from "react-router-dom";

/**
 * The console: a fixed grid of pixel-art icons in the centre of the hero.
 *
 * Each item is either a destination (`to`) or an action (`onSelect`), rendered
 * as a Link or a button accordingly. `pressed` drives aria-pressed and the
 * dimmed state for toggles.
 */
export default function IconGrid({ items, label = "Console" }) {
  return (
    <nav className="icon-grid" aria-label={label}>
      {items.map((item) => {
        const inner = (
          <>
            <img
              className="icon-art"
              src={item.icon}
              alt=""
              width="540"
              height="500"
              decoding="async"
            />
            <span className="icon-label">{item.label}</span>
          </>
        );

        return item.to ? (
          <Link key={item.id} to={item.to} className="icon-item">
            {inner}
          </Link>
        ) : (
          <button
            key={item.id}
            type="button"
            className="icon-item"
            onClick={item.onSelect}
            aria-pressed={item.pressed}
            aria-label={item.actionLabel}
          >
            {inner}
          </button>
        );
      })}
    </nav>
  );
}
