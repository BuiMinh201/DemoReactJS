import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Up from "./component/Up";
import Down from "./component/Down";

const App = () =>{

  return(
    <>
	<Provider store={store}>
	<div className="container">
  <div className="row justify-content-center">
	<Up/>
	<Down/>
  </div>
</div>
	</Provider>

    </>
  )
}



export default App;
