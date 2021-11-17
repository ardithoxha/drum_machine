import { useDispatch, useSelector } from "react-redux";
import { changeVolume } from "./redux/actionCreators";


function VolumeSlider() {
   
    const dispatch = useDispatch();
    const volume = useSelector(state => state.volume);
    const updateVolume = (e) => {dispatch(changeVolume(e.target.value))}
    return (
        <div>
            <input
                type="range"
                min="1" max="100"
                value={volume}
                className="Volume"
                className="myRange"
                onChange={updateVolume}
            />
            
        </div>
    );
}

export default VolumeSlider;