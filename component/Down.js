import { useSelector,useDispatch } from "react-redux";
const Down =()=>{
    const dispatch = useDispatch();
    const onClickUp = ()=>{
        dispatch({
            type:"DOWN",
        });
    }
    const onClickReset = ()=>{
        dispatch({
            type:"RESET2",
        });
    }
    const number = useSelector(({downReducer})=>downReducer.num);
    return(
        <div className="col-lg-3 col-md-3 col-sm-8 col-8">
      <div className="timer bg-danger" id="timer-down">
        <p>{number}</p>
        <button onClick={onClickUp} type="button" className="btn btn-dark">Down</button>
        <button onClick={onClickReset}type="button" className="btn btn-dark">Reset</button>
      </div>
    </div>
    )
}
export default Down;