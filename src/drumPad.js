import { useDispatch } from "react-redux";
import { pressPad } from "./redux/actionCreators";
import { nameArray } from "./soundcode";

function DrumButton(props) {

    const dispatch = useDispatch();
    
    const playPad = () => dispatch(pressPad(props.letter));
    
    
    return (
        <button
            className="myButton"
            onClick={playPad}
        >
            {props.letter}
        </button>
    );
}

function DrumPad() {

    const renderButtons = (i) => {
        return (<div key={i} >

            <DrumButton index={i} letter={nameArray[i]} /></div>
        );
    }
    const buttonGrid = [];
    for (let i = 0; i < 9; i++) {
        buttonGrid.push(renderButtons(i));
    }

    
    return (
        <div className="drumPad">
            {buttonGrid}
        </div>
    );
}

export default DrumPad;