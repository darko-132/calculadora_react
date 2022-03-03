import React, {Component} from "react";
import Mecha_calcu from "../mecha_calc";

class Engranes extends Component{
	state={
		plan: ' ',
		diente: ' ',
		modulo: ' '
	}
	back = ()=>{
		this.setState({plan: 'back'})
	}
	enviar = (e) =>{ /* evitar que se refresque la pagina */
		console.log(this.state)
		e.preventDefault(); /* cancela el refresco */
		const Modulo = this.state.modulo
		const Diente = this.state.diente
		let h1 =  Modulo 
		let h2 = parseFloat(1.16*Modulo).toFixed(3) 
		let diametroP = parseFloat(Diente*Modulo).toFixed(3)
		document.getElementById('h1').innerHTML = h1 + ' mm'
		document.getElementById('h2').innerHTML = h2 + ' mm'
		document.getElementById('ht').innerHTML =parseFloat(h1+h2).toFixed(3) + ' mm'
		document.getElementById('Juego').innerHTML =parseFloat(0.16*Modulo).toFixed(3) + ' mm'
		document.getElementById('paso').innerHTML =(Math.PI*Modulo).toFixed(3) + ' mm'
		document.getElementById('espesor').innerHTML =parseFloat(1.57)*Modulo + ' mm'
		document.getElementById('dp').innerHTML = diametroP + ' mm'
		document.getElementById('de').innerHTML =parseFloat(diametroP)+(2*parseFloat(Modulo)) + ' mm'
		document.getElementById('di').innerHTML =parseFloat(diametroP)-(2.32*parseFloat(Modulo)) + ' mm'
	}
	datos = (e) =>{
		console.log(e.target.name, e.target.value)
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	render(props) {
			{if(this.state.plan === 'back'){
            return(
			<div><Mecha_calcu/></div>
            )}
			else if(this.state.plan === ' '){
			return (
				<div>
					<div>
							<button type="button" className="btn btn-success back" onClick={this.back}>↩</button>
					</div>
					<div>
						<div className="col">
							<h5>Nº de dientes (Z)</h5>
							<input type="number"
							placeholder="Numero de dientes"
							value={this.state.diente}
							onChange={this.datos}
							name="diente" />
						</div>
						<div className="col">
							<h5>Modulo (M)</h5>
							<input type="number"
							placeholder="Modulo"
							value={this.state.modulo}
							onChange={this.datos}
							name="modulo" />
						</div>
					</div>
					<div>
						<button type="button" className="btn btn-success back" onClick={this.enviar}>✔</button>
					</div>
					<div className="engranaje">
						<div>
							<p>Altura del diente(h<sub>1</sub>) = Modulo (M)</p>
							<h5>h<sub>1</sub> = <span id="h1"></span></h5>
						</div>
						<div>
							<p>Altura de pie del diente(h<sub>2</sub>) = 1,16(constante) * Modulo(M)</p>
							<h5>h<sub>2</sub> = <span id="h2"></span></h5>
						</div>
						<div>
							<p>Altura total del diente(H<sub>t</sub>) = 2,16(constante) * Modulo (M)</p>
							<h5>H<sub>t</sub> = <span id="ht"></span></h5>
						</div>
						<div>
							<p>Juego entre dientes (J) = 0,16(constante) * Modulo (M)</p>
							<h5>J = <span id="Juego"></span></h5>
						</div>
						<div>
							<p>Paso del engranage (P) = π * Modulo (M)</p>
							<h5>P = <span id="paso"></span></h5>
						</div>
						<div>
							<p>Espesor del diente  (E) = 1,57(constante) * Modulo (M)</p>
							<h5>E = <span id="espesor"></span></h5>
						</div>
						<div>
							<p>Diametros del engranage</p>
							<div>
								<p>Diametro primitivo (Dp) = Nº de dientes (Z) * Modulo (M)</p>
								<h5>Dp = <span id="dp"></span></h5>
							</div>
							<div>
								<p>Diametro externo (De) = Diametro primitivo (Dp) + 2*Modulo (M)</p>
								<h5>De = <span id="de"></span></h5>
							</div>
							<div>
								<p>Diametro interno (Di) = Diametro primitivo (Dp) - 2,32*Modulo (M)</p>
								<h5>Di = <span id="di"></span></h5>
							</div>
						</div>
					</div>
				</div>
			)}
			
			}}
}
export default Engranes;