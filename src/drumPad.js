function DrumButton(props) {
    return (
      <button className="myButton">{props.button}</button>  
    );
}

function DrumPad(props) {
    const renderButtons = (i) =>{
        return (<div>
            <DrumButton button={i}/></div>
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