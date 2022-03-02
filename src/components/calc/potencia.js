import React, {Component} from "react";
import Mecha_calcu from "../mecha_calc";

class Potencia extends Component{
	state= {
		plan:'',
		masa:' ',
		altura:' ',
		tiempo:' '
	}
	back = () => {
		this.setState({ plan: 'back' })
	}
	dato = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	enviar=(e)=>{
		e.preventDefault();
		var masa = this.state.masa
		var fuerza =  parseFloat(masa*9.8).toFixed(3) 
		document.getElementById('fuerza').innerHTML = fuerza + ' New'
		var potencia =  parseFloat(fuerza*(parseFloat(this.state.altura)/parseFloat(this.state.tiempo))).toFixed(3)
		document.getElementById('potencia').innerHTML=potencia + ' Watt'


	}
	render(){
		
		   {if(this.state.plan === 'back'){
				return(
					<div>
						<Mecha_calcu />
					</div>
					
				)
		   }
		   else if(this.state.plan === ''){
			   return(
			   <div>
					<div>
						<button type="button" className="btn btn-success back" onClick={this.back}>↩</button>
					</div>
					<div>
						<h5>Potencia requeria para mover una masa en determinada altura y determinado tiempo</h5>
						<br />
						<div className="d-flex">
							<div className="me-3">
								<h6>Masa (m)</h6>
								<input type= 'number'
								className="form-control"
								placeholder="Masa"
								aria-label="Masa"
								onChange={this.dato}
								value={this.state.masa}
								name="masa" />
							</div>
							<div className="me-3">
								<h6>Altura (h)</h6>
								<input type= 'number'
								className="form-control"
								value={this.state.altura}
								name='altura'
								onChange={this.dato}
								/>
							</div>
							<div>
								<h6>Tiempo (t)</h6>
								<input type= 'number'
								className="form-control"
								value={this.state.tiempo}
								name='tiempo'
								onChange={this.dato}
								/>
							</div>
						</div>
						<div>
							<button type="button" className="btn btn-success back" onClick={this.enviar}>✔</button>
						</div>
						<br />
						<div className="d-flex">
							<div className="d-flex">
								<div><h4>P =</h4></div>
								<div className="me-2"><h4>F</h4></div>
								<div><div><h4>m</h4></div><div><h4 className="mb">t</h4></div></div>
							</div>
							<div className="me-3 ms-3"><h4>;</h4></div>
							<div><h4>F=m*g</h4></div>
						</div>
						<div>
							<h4>Fuerza</h4>
							<h6>F=<span id="fuerza"></span></h6>
						</div>
						<div>
							<h4>Potencia necesaria</h4>
							<h6>P=<span id="potencia"></span></h6>
						</div>
					</div>
				</div>
			)}}
		
	}


}
export default Potencia;