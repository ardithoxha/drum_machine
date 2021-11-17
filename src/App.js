import './App.css';
import { Provider, connect, useDispatch } from "react-redux"
import React from 'react';
import { store } from './redux/store';
import DrumPad from './drumPad';
import BankButton from './bankButton';
import PowerButton from './powerButton';
import VolumeSlider from './volumeSlider';
import Display from './display';
import { pressPad } from "./redux/actionCreators";
import { nameArray } from './soundcode';

function App() {
  // const dispatch = useDispatch();
  // const keyPress = event => {
  //   const key = event.key && event.key.toUpperCase();
  //   const letter = key && nameArray.includes(key) ? key : null;
  //   console.log(letter);
  //   if (letter) {
  //     // dispatch(pressPad(letter))
  //   }
  // }

  // document.getElementById("root").addEventListener("keydown", keyPress);
  return (
    <div className="App">
      <PowerButton />
      <div className="middleContainer">
        <Display />
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

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default AppWrapper;
