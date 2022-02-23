import React, {Component} from "react";
import Select from "./components/select";
import  "./App.css"

class App extends Component{
  state={
    panatalla: Select
  }
  render(){
    return(
      <div className="container">
        <this.state.panatalla/>
      </div>
      
    )
  }
}

export default App;
