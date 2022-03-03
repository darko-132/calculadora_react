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
            <div>
                <figure className="logo">
                    <img src="https://w7.pngwing.com/pngs/1024/610/png-transparent-black-gear-gear-mechanism-sprocket-mechanics-gears-miscellaneous-transport-gear-train-thumbnail.png" alt="Logo engranaje" />
                </figure>
                <div className="presentacion">
                    <h1>Calculadora para ingenieros</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, voluptatum placeat autem nobis adipisci facere qui, soluta hic sed rem blanditiis ab reiciendis in aperiam perspiciatis mollitia temporibus vel quasi.</p>
                </div>
                <div className="selectG">
                    <button type="button" className="btn btn-outline-dark btnS" onClick = {this.mecanica}>Mecanica</button>
                    <button type="button" className="btn btn-outline-dark btnS" onClick={this.electrica}>Electrica</button>
                </div>
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