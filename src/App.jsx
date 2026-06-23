import React, { useState } from 'react';
import Portfolio from './components/Portfolio';
import LoadingScreen from './components/LoadingScreen';
import { AnimatePresence } from 'framer-motion';
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="app-container">
      <Portfolio />
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
