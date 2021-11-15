import './App.css';
import {Provider, connect } from "react-redux"
import React from 'react';
import { store,mapStateToProps, mapDispatchToProps } from './redux/store';
import DrumPad from './drumPad';
import BankButton from './bankButton';
import PowerButton from './powerButton';
import VolumeSlider from './volumeSlider'


function App() {
  return (
    <div className="App">
      <PowerButton />
      <div className="middleContainer">
        <div className="display">Display</div> 
        <div className="drumPadContainer">
          <DrumPad />
        </div>
        <div className="volumeContainer">
          <VolumeSlider />
        </div>
      </div>
      <BankButton />
    </div>
  );
}

const Container = connect(mapStateToProps,mapDispatchToProps)(App)

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

export default AppWrapper;
