import { useState } from "react";

export default function DropdownMulti({
  title,
  options,
  selected,
  onChange,
  isOpen,
  onToggle,
}) {
  return (
    <div
      className="dropdown me-3"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="btn btn-outline-secondary dropdown-toggle"
        onClick={onToggle}
      >
        {title}
      </button>

      {isOpen && (
        <div className="dropdown-menu show p-3">
          {options.map((opt) => (
            <div key={opt} className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={selected.includes(opt)}
                onChange={() => {
                  if (selected.includes(opt)) {
                    onChange(selected.filter((s) => s !== opt));
                  } else {
                    onChange([...selected, opt]);
                  }
                }}
              />
              <label className="form-check-label">
                {opt.charAt(0).toUpperCase() + opt.slice(1)}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
