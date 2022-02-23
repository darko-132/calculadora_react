import React, {Component} from "react";
import Mecha_calcu from './mecha_calc'
import Elect_calc from './elect_calc'


  class Select extends Component{
    state={
        plan: 'selec'    
    }

    electrica = ()=>{
        this.setState({plan: 'electrica'})
      }
    mecanica =()=>{
        this.setState({plan: 'mecanica'})
      }

    render(){
        {if(this.state.plan == 'selec'){
        return(
                <div className="select selectG">
                    <button type="button" className="btn btn-danger " onClick = {this.mecanica}>Mecanica</button>
                    <button type="button" className="btn btn-warning " onClick={this.electrica}>Electrica</button>
                </div>
            )
        }else if(this.state.plan == 'mecanica'){
            return(
                <div>
                    <Mecha_calcu/>
                </div>
            )
        }else if(this.state.plan == 'electrica'){
            return(
                <div>
                    <Elect_calc/>
                </div>
            )
        }}
    }
}

export default Select;