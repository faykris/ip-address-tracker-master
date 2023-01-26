import React, {useEffect, useState} from 'react';
import './App.css';
import SearchField from '../SearchField/SearchField';
import Map from '../MyMap/MyMap';
import { useSelector } from 'react-redux';
import { RootState }  from '../../redux/store';
import Footer from '../Footer/Footer';

const App = () => {
  const [lat, setLat] = useState(0)
  const [lng, setLng] = useState(0)
  const state = useSelector((state: RootState) => state)

  // eslint-disable-next-line
  useEffect(() => {
    setLat(state.lat)
    setLng(state.lng)
  });

  return (
    <div className="App">
      <header className="App-header">
        <h2>IP Address Tracker</h2>
        <SearchField />
      </header>
      <Map lat={lat} lng={lng} />
      <Footer />
    </div>   
  );
};

export default App;
