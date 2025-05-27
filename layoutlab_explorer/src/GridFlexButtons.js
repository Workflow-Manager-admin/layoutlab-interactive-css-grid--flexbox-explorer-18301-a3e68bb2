import React from "react";
import "./GridFlexButtons.css";

/**
 * GridFlexButtons component renders two buttons: 'Grid' and 'Flex Box',
 * styled according to the dark theme and project color palette.
 * Highlights the active mode (if provided via props).
 *
 * PUBLIC_INTERFACE
 */
function GridFlexButtons({ onGridClick, onFlexBoxClick, activeMode }) {
  return (
    <div className="gridflex-btn-group">
      <button
        className={`gridflex-btn${activeMode === "grid" ? " active" : ""}`}
        onClick={onGridClick}
        type="button"
        aria-label="Select Grid Layout"
        tabIndex={0}
      >
        Grid
      </button>
      <button
        className={`gridflex-btn${activeMode === "flex" ? " active" : ""}`}
        onClick={onFlexBoxClick}
        type="button"
        aria-label="Select Flex Box Layout"
        tabIndex={0}
      >
        Flex Box
      </button>
    </div>
  );
}

export default GridFlexButtons;
