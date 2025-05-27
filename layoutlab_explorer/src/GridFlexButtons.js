import React from "react";
import "./GridFlexButtons.css";

/**
 * GridFlexButtons component renders two buttons: 'Grid' and 'Flex Box',
 * styled according to the dark theme and project color palette.
 *
 * PUBLIC_INTERFACE
 */
function GridFlexButtons({ onGridClick, onFlexBoxClick }) {
  return (
    <div className="gridflex-btn-group">
      <button
        className="gridflex-btn"
        onClick={onGridClick}
        type="button"
        aria-label="Select Grid Layout"
      >
        Grid
      </button>
      <button
        className="gridflex-btn"
        onClick={onFlexBoxClick}
        type="button"
        aria-label="Select Flex Box Layout"
      >
        Flex Box
      </button>
    </div>
  );
}

export default GridFlexButtons;
