import { useDispatch } from "react-redux";
import { changeVolume } from "./redux/actionCreators";


function VolumeSlider(props) {
   
    const dispatch = useDispatch();
    const updateVolume = (e) => {dispatch(changeVolume(e.target.value))}
    return (
        <div>
            <input
                type="range"
                min="1" max="100"
                value={props.volume}
                class="Volume"
                className="myRange"
                onChange={updateVolume}
            />
            
        </div>
    );
}

export default VolumeSlider;