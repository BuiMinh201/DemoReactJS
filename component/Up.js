import { useSelector,useDispatch } from "react-redux";
const Up =()=>{
    const dispatch = useDispatch();
    const onClickUp = ()=>{
        dispatch({
            type:"UP",
        });
    }
    const onClickReset = ()=>{
        dispatch({
            type:"RESET1",
        });
    }
    const number = useSelector(({upReducer})=>upReducer.num);
    return(
        <div className="col-lg-3 col-md-3 col-sm-8 col-8">
        <div className="timer bg-info" id="timer-up">
          <p>{number}</p>
          <button onClick={onClickUp} type="button" className="btn btn-dark">Up</button>
          <button onClick={onClickReset}type="button" className="btn btn-dark">Reset</button>
        </div>
      </div>
    )
}
export default Up;