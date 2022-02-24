import React, {Component} from "react";
import Select from "./select";
import RPM from "./calc/rpm";

class Mecha_calcu extends Component{
    state={
        plan: 'mecha'    
    }
    back = ()=>{
        this.setState({plan: 'back'})
      }
    rpm = ()=>{
        this.setState({plan:'rpm'})
    }
    render(){
        {
            if(this.state.plan === 'back'){
            return(
                <Select/>
            )
            }
            else if(this.state.plan === 'mecha'){
                return( 
                    <div >
                        <div>
                            <button type="button" className="btn btn-success back" onClick = {this.back}>↩</button>
                        </div>
                        <div className="select">
                            <button type="button" className="btn btn-primary" onClick={this.rpm}>RPM</button>
                            <button type="button" className="btn btn-primary">Potencia</button>
                            <button type="button" className="btn btn-primary">Peso</button>
                        </div>
                        
                    </div>
                    )
            }
            else if(this.state.plan === 'rpm'){
            return(
                <RPM/>
            )
            }
        
        
        }
    }
}

export default Mecha_calcu;