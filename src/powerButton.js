import { useDispatch } from "react-redux";
import { switchPower } from "./redux/actionCreators";

export function PowerButton() {
    const dispatch = useDispatch();
    const action = switchPower();
    
    return (<div className="switches">
        <button onClick={() => dispatch(action)}>SwitchPower</button>
    </div>);
}

export default PowerButton;