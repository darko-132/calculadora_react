import React, {Component} from "react";
import Elect_calc from "../elect_calc";

class Volt extends Component{
	state = {
	amperios: "",
	resistencia:"",
	plan: ' '
	}
    back = ()=>{
        this.setState({plan: 'back'})
    }
	enviar = (e) =>{ /* evitar que se refresque la pagina */
		console.log(this.state)
		e.preventDefault(); /* cancela el refresco */
		const cargaBat= (parseFloat(this.state.amperios)*parseFloat(this.state.resistencia))
		document.getElementById('Volt').innerHTML = cargaBat+' Volt'
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
				<h3>Calcular voltaje</h3>
				<div className="row g-3">
					{/* onChange escucha los cambios en los inputs */}
					<span>Corriente (I) </span>
					<div className="col">
						<input type="number"
						className="form-control" 
						placeholder="Amperios" 
						aria-label="Amperios"
						onChange={this.datos}
						value={this.state.amperios}
						name="amperios"/>
					</div>
					<span>Resistencia (R)</span>
					<div className="col">
						<input type="text"
						className="form-control"
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
					<h3 id="Volt">0 volt</h3>
				</div>
			</div>
		)};
	}}
}

export default Volt;