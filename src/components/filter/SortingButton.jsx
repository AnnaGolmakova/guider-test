import "./SortingButton.css";

function SortingButton({ label, isActive, sortDirection, onClick }) {
  return (
    <button
      className={`sort-button
        ${isActive ? "sort-button_active" : ""}
        ${sortDirection == "desc" ? "sort-button_up" : ""}
      `}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default SortingButton;
