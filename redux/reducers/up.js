const initState = {
    num: 0,
}
export default (state=initState, action)=>{
    switch(action.type){
        case "UP": return {...state,num: ++state.num}
        case "RESET1": return {...state,num: 0}
        default:return state;
    }

}