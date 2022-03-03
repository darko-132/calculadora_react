import React, {Component} from "react";
import Elect_calc from "../elect_calc";

class Carga extends Component{
	state = {
	amperios: "",
	tiempo:"",
	plan: ' '
	}
    back = ()=>{
        this.setState({plan: 'back'})
    }
	enviar = (e) =>{ /* evitar que se refresque la pagina */
		console.log(this.state)
		e.preventDefault(); /* cancela el refresco */
		const cargaBat= (parseFloat(this.state.amperios)*parseFloat(this.state.tiempo))
		const cargaR= (parseFloat(cargaBat)/parseFloat(0.5))
		document.getElementById('cargaBat').innerHTML = cargaBat+' Ah'
		document.getElementById('cargaR').innerHTML = cargaR+' Ah'
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
				<h3>Calcular la capacidad en amperios-hora</h3>
				<div className="row g-3">
					{/* onChange escucha los cambios en los inputs */}
					<span>Amperios que necesita la aplicación</span>
					<div className="col">
						<input type="number"
						className="form-control" 
						placeholder="Amperios" 
						aria-label="Amperios"
						onChange={this.datos}
						value={this.state.amperios}
						name="amperios"/>
					</div>
					<span>Tiempo en horas que queremos que funcione.</span>
					<div className="col">
						<input type="text"
						className="form-control"
						placeholder="Tiempo"
						aria-label="Last name"
						onChange={this.datos}
						value={this.state.tiempo}
						name= "tiempo"/>
					</div>
				</div>
				<div>
					<button type="button" className="btn btn-success back" onClick={this.enviar}>✔</button>
				</div>
				<div >
					<h3 id="cargaBat">0 Ah</h3>
				</div>
				<div>
					<span>Calcular la capacidad que necesitaremos de la batería, sin llegar a descargarla del todo.
					Las descargas completas, hasta llegar a cero, no son recomendables.
					</span>
					<h3 id="cargaR">0 Ah</h3>
				</div>
			</div>
		)};
	}}
}

export default Carga;