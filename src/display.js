import { useSelector } from "react-redux";

export function Display() {
    const id = useSelector(state => state.id);
    return (
        <div className="displayContainer"><div className="display">{id}</div></div>);
}

export default Display;