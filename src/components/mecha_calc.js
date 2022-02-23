import React, {Component} from "react";
import Select from "./select";

class Mecha_calcu extends Component{
    state={
        plan: 'mecha'    
    }
    back = ()=>{
        this.setState({plan: 'back'})
      }
    render(){
        {if(this.state.plan === 'back'){
            return(
                <Select/>
            )
        }}
        return( 
        <div >
            <div>
                <button type="button" className="btn btn-success back" onClick = {this.back}>↩</button>
            </div>
            <div className="select">
                <button type="button" className="btn btn-primary">RPM</button>
                <button type="button" className="btn btn-primary">Potencia</button>
                <button type="button" className="btn btn-primary">Peso</button>
            </div>
            
        </div>
        )}
}

export default Mecha_calcu;