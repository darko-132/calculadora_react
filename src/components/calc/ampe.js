import React, {Component} from "react";
import Elect_calc from "../elect_calc";

class Ampere extends Component{
	state = {
    voltio:"",
	resistencia:"",
	plan: ' '
	}
    back = ()=>{
        this.setState({plan: 'back'})
    }
	enviar = (e) =>{ /* evitar que se refresque la pagina */
		console.log(this.state)
		e.preventDefault(); /* cancela el refresco */
		const cargaBat= (parseFloat(this.state.voltio)/parseFloat(this.state.resistencia))
		document.getElementById('Ampere').innerHTML = cargaBat+' Amp'
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
				<h3>Calcular Amperaje</h3>
				<div class="row g-3">
					{/* onChange escucha los cambios en los inputs */}
					<span>Voltio (V)</span>
					<div class="col">
						<input type="number"
						class="form-control" 
						placeholder="Voltio" 
						aria-label="Voltio"
						onChange={this.datos}
						value={this.state.voltio}
						name="voltio"/>
					</div>
					<span>Resistencia (R)</span>
					<div class="col">
						<input type="text"
						class="form-control"
						placeholder="Resistencia"
						aria-label="Resistencia"
						onChange={this.datos}
						value={this.state.resistencia}
						name= "resistencia"/>
					</div>
				</div>
				<form onSubmit={this.enviar} className="row g-2">
					<input type="submit"/>
				</form>
				<div >
					<h3 id="Ampere">0 ampere</h3>
				</div>
			</div>
		)};
	}}
}

export default Ampere;