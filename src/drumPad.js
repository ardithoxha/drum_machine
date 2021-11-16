import { soundArrayOne } from './soundcode';

function DrumButton(props) {
    const nameArray = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"]
    return (
      <button className="myButton"  onClick={props.onClick}>{nameArray[props.button]}</button>  
    );
}

function DrumPad(props) {
    
    const renderButtons = (i) =>{
        return (<div>
            <DrumButton button={i} onClick={() => props.onClick(i)}/></div>
        );
    }
    const buttonGrid = [];
    for(let i=0; i<9; i++) {
        buttonGrid.push(renderButtons(i));
    }
    return (
        <div className="drumPad">
            {buttonGrid}
        </div>
    );
}

export default DrumPad;