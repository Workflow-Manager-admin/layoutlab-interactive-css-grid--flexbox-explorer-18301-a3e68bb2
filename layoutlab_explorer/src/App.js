import React, { useState } from 'react';
import './App.css';
import GridFlexButtons from "./GridFlexButtons";

/**
 * Renders a 6x6 matrix of 30x30px child divs using either grid or flexbox layout and suitable dark theme colors.
 * @param {'grid' | 'flex'} mode - Which layout mode to use
 */
function MatrixPreview({ mode }) {
  const containerStyle =
    mode === "grid"
      ? {
          display: "grid",
          gridTemplateColumns: "repeat(6, 30px)",
          gridTemplateRows: "repeat(6, 30px)",
          gap: "4px",
          justifyContent: "center",
          alignItems: "center",
          margin: "24px 0"
        }
      : {
          display: "flex",
          flexWrap: "wrap",
          width: "208px", // 6 * 30 + 5 * 4 (gap)
          gap: "4px",
          justifyContent: "center",
          margin: "24px 0"
        };

  const boxStyle = {
    width: "30px",
    height: "30px",
    background: "var(--kavia-dark)",
    border: "1.5px solid var(--border-color)",
    borderRadius: "6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--text-secondary)",
    boxShadow: "0 2px 7px 0 rgba(44,49,73,0.13)",
    transition: "background 0.17s",
  };

  // Generate 36 children for the grid/flex matrix
  return (
    <div style={containerStyle}>
      {Array.from({ length: 36 }).map((_, i) => (
        <div key={i} style={boxStyle}></div>
      ))}
    </div>
  );
}

// PUBLIC_INTERFACE
function App() {
  const [viewMode, setViewMode] = useState(null); // null, 'grid', or 'flex'

  const handleGridClick = () => setViewMode("grid");
  const handleFlexClick = () => setViewMode("flex");

  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> KAVIA AI
            </div>
            <button className="btn">Template Button</button>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <div className="hero">
            <div className="subtitle">AI Workflow Manager Template</div>
            <h1 className="title">layoutlab_explorer</h1>
            <div className="description">
              Start building your application.
            </div>
            <GridFlexButtons
              onGridClick={handleGridClick}
              onFlexBoxClick={handleFlexClick}
              activeMode={viewMode}
            />
            {/* Show the matrix only when a view is selected */}
            {viewMode && <MatrixPreview mode={viewMode} />}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;