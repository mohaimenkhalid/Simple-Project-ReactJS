import React from 'react';
import logo from './logo.svg';
import TopBanner from "./components/TopBanner/TopBanner";
import Service from "./components/services/Service";
import TopNavigation from "./components/TopNavigation/TopNavigation";

function App() {
  return (
    <div className="App">
      <TopNavigation/>
      <TopBanner/>
      <Service/>
    </div>
  );
}

export default App;
