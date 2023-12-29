

const Title = ({sttTitle,updatestt,title,updateTitle})=>{
    const onChangeTitle = (e)=>updateTitle(e.target.value);
    const txtTitle =()=>{
        return  <h4 onDoubleClick={updatestt}>{title}</h4>
    }
    const frmTitle =()=>{
        return <input
        onChange={onChangeTitle}
        onBlur={updatestt}
        type="text"
        name="txt" 
        value={title}/>
    }
    const showTitle =()=>{
        if(sttTitle){
            return txtTitle();
        }
        else{
            return frmTitle();
        }
    }
return(
    <>
    {showTitle()}
    </>
)
}
export default Title;