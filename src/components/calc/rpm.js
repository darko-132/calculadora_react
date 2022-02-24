import React, {Component} from "react";
import Mecha_calcu from "../mecha_calc";

class Select extends Component{
	render(){
		return(
			<div>
				<div>
					<button type="button" className="btn btn-success back" onClick = {this.back}>↩</button>
				</div>
				<div>
					<h3>Formula</h3>
					<h5>Z1 X N1 = Z2 X N2</h5>
				</div>
				<select className="form-select" aria-label="Valor a calcular"  onChange={this.enviar}>
					<option selected>Valor a calcular</option>
					<option value='z1' >Z1</option>
					<option value='n1' >N1</option>
					<option value='z2' >Z2</option>
					<option value='n2' >N2</option>
				</select>
			</div>
		)
	}
}


class RPM extends Component{
	state={
		plan: ' ',
		dato: ' '
	}
	back = ()=>{
		this.setState({plan: 'back'})
	}
	z1 = ()=>{
		this.setState({plan: 'z1'})
	}
	n1 = ()=>{
		this.setState({plan: 'n1'})
	}
	z2 = ()=>{
		this.setState({plan: 'z2'})
	}
	n2 = ()=>{
		this.setState({plan: 'n2'})
	}
	enviar = (e) =>{ /* evitar que se refresque la pagina */
		console.log(this.state)
		e.preventDefault(); /* cancela el refresco */
	}
	select = (e) =>{ /* evitar que se refresque la pagina */
		console.log(this.state)
		e.preventDefault(); /* cancela el refresco */
	}
	
	datos = (e) =>{
		console.log(e.target.name, e.target.value)
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	render() {
			{if(this.state.plan === 'back'){
            return(
			<div><Mecha_calcu/></div>
            )}
			else if(this.state.plan === ' '){
			return (
			 <Select/>
			)}
			}}
	/* render(){
		return(
			
		)
	} */

}
export default RPM;