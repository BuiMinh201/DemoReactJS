const initState = {
    num: 10,
}
export default (state=initState, action)=>{
    switch(action.type){
        case "DOWN": return {...state,num: --state.num}
        case "RESET2": return {...state,num: 10}
        default:return state;
    }

}