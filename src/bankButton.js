import { useDispatch } from "react-redux";
import { switchBanks } from "./redux/actionCreators";

function BankButton() {
    const dispatch = useDispatch();
    const changeBanks = () => dispatch(switchBanks());
    
    return (<div className="switches">
        <button onClick={changeBanks}>SwitchBank</button>
    </div>);
}

export default BankButton;