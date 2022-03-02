import React, {Component} from "react";
import Select from "./select";
import Engranes from "./calc/engranes";
import Potencia from "./calc/potencia";

class Mecha_calcu extends Component{
    state={
        plan: 'mecha'    
    }
    back = ()=>{
        this.setState({plan: 'back'})
      }
    engranes = ()=>{
        this.setState({plan:'engranes'})
    }
    potencia = ()=>{
        this.setState({plan:'potencia'})
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
                            <button type="button" className="btn btn-primary" onClick={this.engranes}>Engranes</button>
                            <button type="button" className="btn btn-primary" onClick={this.potencia}>Potencia</button>
                            <button type="button" className="btn btn-primary">Peso</button>
                        </div>
                        
                    </div>
                    )
            }
            else if(this.state.plan === 'engranes'){
            return(
                <Engranes/>
            )
            }
            else if(this.state.plan === 'potencia'){
            return(
                <Potencia/>
            )
            }
        
        
        }
    }
}

export default Mecha_calcu;