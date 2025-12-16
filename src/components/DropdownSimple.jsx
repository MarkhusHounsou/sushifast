export default function DropdownSimple({
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
        <div className="dropdown-menu show">
          {options.map((opt) => (
            <button
              key={opt.value}
              className="dropdown-item"
              onClick={() => onChange(opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
