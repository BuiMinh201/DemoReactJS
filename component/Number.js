import { useSelector } from "react-redux";

const Number = ({})=>{
    const number = useSelector(({num})=>{
        return num;
    });
    return(
    <h3>{number}</h3>
    )
}
export default Number;