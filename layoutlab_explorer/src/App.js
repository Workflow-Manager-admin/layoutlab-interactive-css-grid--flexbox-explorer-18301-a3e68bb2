import React from 'react';
import './App.css';
import GridFlexButtons from "./GridFlexButtons";

function App() {
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
            
            {/* Import and use the new GridFlexButtons component */}
            {/* PUBLIC_INTERFACE */}
            {/* The onGridClick/onFlexBoxClick props can be no-ops or have logic added later as needed */}
            <GridFlexButtons
              onGridClick={() => {}}
              onFlexBoxClick={() => {}}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

import GridFlexButtons from "./GridFlexButtons";
export default App;