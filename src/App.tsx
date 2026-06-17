import React, { useState } from 'react';
import { FiltersScreen } from './screens/FiltersScreen';
import './styles/global.css';

type AppScreen = 'home' | 'filters' | 'plan' | 'map';

function App() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('home');

  const handleGeneratePlan = () => {
    setCurrentScreen('plan');
  };

  const handleShowMap = () => {
    setCurrentScreen('map');
  };

  const handleBackToFilters = () => {
    setCurrentScreen('filters');
  };

  return (
    <div className="App">
      {currentScreen === 'home' && (
        <div className="home-screen">
          <h1 style={{ fontFamily: 'Young Serif', fontSize: '48px' }}>Good evening, Maria</h1>
          <button
            onClick={() => setCurrentScreen('filters')}
            style={{
              background: 'linear-gradient(135deg, #15157d 0%, #ad3300 100%)',
              color: 'white',
              padding: '1rem 2rem',
              border: 'none',
              borderRadius: '0.5rem',
              fontSize: '18px',
              cursor: 'pointer',
            }}
          >
            Plan an Outing
          </button>
        </div>
      )}

      {currentScreen === 'filters' && (
        <FiltersScreen onGeneratePlan={handleGeneratePlan} onShowMap={handleShowMap} />
      )}

      {currentScreen === 'plan' && (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h1>Your Generated Plan</h1>
          <p>Plan details will appear here</p>
          <button onClick={handleBackToFilters}>Back to Filters</button>
        </div>
      )}

      {currentScreen === 'map' && (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h1>Map View</h1>
          <p>Map will be displayed here</p>
          <button onClick={handleBackToFilters}>Back to Filters</button>
        </div>
      )}
    </div>
  );
}

export default App;
