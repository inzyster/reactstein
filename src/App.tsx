import React, { useState, useEffect } from 'react';
import './App.scss';
import Renderer from './Renderer';
import { Map, Convert as MapConverter } from './Map';
import { Loader } from './Loader';
import { getUrl } from './Utils';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (isLoaded === false) {
      const loadMap = async () => {
        const data = await fetch(getUrl('/assets/E1M2.json')).then(response => response.text());
        setMap(MapConverter.toMap(data));
        setIsLoaded(true);
      };
      loadMap();
    }
  });

  return (
    <div className="App">{isLoaded && map ? <Renderer cols={80} rows={43} level={map} /> : <Loader />}</div>
  );
};

export default App;
