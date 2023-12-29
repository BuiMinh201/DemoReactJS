import { useDispatch } from "react-redux";
const Control = ()=>{
    const dispath = useDispatch();
    const onClickGetNumber = ()=>{
        dispath({
            type: "GET_NUM"
        });
    }
    const onClickResetNumber = ()=>{
        dispath({
            type: "RESET_NUM"
        });
    }
return(
    <div>
    <button onClick={onClickGetNumber} class="btn btn-dark">Get Number</button>
    <button onClick={onClickResetNumber} class="btn btn-dark">Reset</button>
    </div>
)
}
export default Control;