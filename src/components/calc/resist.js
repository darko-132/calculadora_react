import React, {Component} from "react";
import Elect_calc from "../elect_calc";

class Resist extends Component{
	state = {
	ampere:"",
	voltaje:"",
	plan: ' '
	}
	back = ()=>{
		this.setState({plan: 'back'})
	}
	enviar = (e) =>{ /* evitar que se refresque la pagina */
		console.log(this.state)
		e.preventDefault(); /* cancela el refresco */
		const cargaBat= (parseFloat(this.state.voltio)/parseFloat(this.state.ampere))
		document.getElementById('Resistincia').innerHTML = cargaBat+' Ω'
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
			<div><Elect_calc/></div>
			)}
			else if(this.state.plan === ' '){
			return (
			<div>
				<div>
					<button type="button" className="btn btn-success back" onClick = {this.back}>↩</button>
				</div>
				<h3>Calcular resistencia</h3>
				<div className="row g-3">
					{/* onChange escucha los cambios en los inputs */}
					<span>voltaje (R)</span>
					<div className="col">
						<input type="text"
						className="form-control"
						placeholder="voltaje"
						aria-label="voltaje"
						onChange={this.datos}
						value={this.state.voltaje}
						name= "resistencia"/>
					</div>
					<span>Corriente (Ω)</span>
					<div className="col">
						<input type="number"
						className="form-control" 
						placeholder="Ampere" 
						aria-label="Ampere"
						onChange={this.datos}
						value={this.state.ampere}
						name="ampere"/>
					</div>
				</div>
				<div>
					<button type="button" className="btn btn-success back" onClick={this.enviar}>✔</button>
				</div>
				<div >
					<h3 id="Resistincia">0 Ω</h3>
				</div>
			</div>
		)};
	}}
}

export default Resist;