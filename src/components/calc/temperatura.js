import React, {Component} from "react";
import Mecha_calcu from "../mecha_calc";

class Temperatura extends Component{
	state={
		plan:' ',
		t1: 'gc',
		t2: 'gf',
		temp1: '1',
		temp2: '33.8 ºF'
	}
	
	back=()=>{
		this.setState({plan:'back'})
	}
	datos = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}
	sol1 =(e)=>{
		if(this.state.t1 === 'gc' && this.state.t2 === 'gc'){
			this.setState({temp2:this.state.temp1})
		}
		else if(this.state.t1 === 'gc' && this.state.t2 === 'gf'){
			const temp1 = parseFloat(this.state.temp1*(9/5)+32) + 'ºF'
			this.setState({temp2:temp1})
		}
		else if(this.state.t1 === 'gc' && this.state.t2 === 'gk'){
			const temp1 = parseFloat(this.state.temp1)+parseFloat(273.15) + 'ºK'
			this.setState({temp2: temp1})
		}
		else if(this.state.t1 === 'gf' && this.state.t2 === 'gc'){
			const temp1 = parseFloat((this.state.temp1-32)*(5/9)) + 'ºC'
			this.setState({temp2: temp1})
		}
		else if(this.state.t1 === 'gf' && this.state.t2 === 'gf'){
			this.setState({temp2:this.state.temp1 + 'ºF'})
		}
		else if(this.state.t1 === 'gf' && this.state.t2 === 'gk'){
			const temp1 = ((parseFloat(this.state.temp1)-parseFloat(32))*parseFloat(5/9)+parseFloat(273.15)) + 'ºK'
			this.setState({temp2: temp1})
		}
		else if(this.state.t1 === 'gk' && this.state.t2 === 'gc'){
			const temp1 = parseFloat(this.state.temp1)-parseFloat(273.15) + 'ºK'
			this.setState({temp2: temp1})
		}
		else if(this.state.t1 === 'gk' && this.state.t2 === 'gf'){
			const temp1 = (parseFloat(this.state.temp1)-parseFloat(273.15))*parseFloat(9/5)+parseFloat(32) + 'ºK'
			this.setState({temp2: temp1})
		}
		else if(this.state.t1 === 'gk' && this.state.t2 === 'gk'){
			this.setState({temp2: this.state.temp1 + 'ºK'})
		}
	}
	sol2 =(e)=>{
		if(this.state.t2 === 'gc' && this.state.t1 === 'gc'){
			this.setState({temp1:this.state.temp2})
		}
		else if(this.state.t2 === 'gc' && this.state.t1 === 'gf'){
			const temp2 = parseFloat(this.state.temp2*(9/5)+32) + 'ºF'
			this.setState({temp1:temp2})
		}
		else if(this.state.t2 === 'gc' && this.state.t1 === 'gk'){
			const temp2 = parseFloat(this.state.temp2)+parseFloat(273.15) + 'ºK'
			this.setState({temp1: temp2})
		}
		else if(this.state.t2 === 'gf' && this.state.t1 === 'gc'){
			const temp2 = parseFloat((this.state.temp2-32)*(5/9)) + 'ºC'
			this.setState({temp1: temp2})
		}
		else if(this.state.t2 === 'gf' && this.state.t1 === 'gf'){
			this.setState({temp1:this.state.temp2 + 'ºF'})
		}
		else if(this.state.t2 === 'gf' && this.state.t1 === 'gk'){
			const temp2 = ((parseFloat(this.state.temp2)-parseFloat(32))*parseFloat(5/9)+parseFloat(273.15)) + 'ºK'
			this.setState({temp1: temp2})
		}
		else if(this.state.t2 === 'gk' && this.state.t1 === 'gc'){
			const temp2 = parseFloat(this.state.temp2)-parseFloat(273.15) + 'ºK'
			this.setState({temp1: temp2})
		}
		else if(this.state.t2 === 'gk' && this.state.t1 === 'gf'){
			const temp2 = (parseFloat(this.state.temp2)-parseFloat(273.15))*parseFloat(9/5)+parseFloat(32) + 'ºK'
			this.setState({temp1: temp2})
		}
		else if(this.state.t2 === 'gk' && this.state.t1 === 'gk'){
			this.setState({temp1: this.state.temp2 + 'ºK'})
		}
	}
	

	render(){
		{if(this.state.plan === 'back'){
			return(
				<div>
					<Mecha_calcu />
				</div>
			)
	   }else if(this.state.plan === ' '){
		return(
			<div>
				<div>
					<button type="button" className="btn btn-success back" onClick={this.back}>↩</button>
				</div>
				<div>
					<h3>Calculos de temperaturas:</h3>
				</div>
				<br />
				<div class="input-group mb-3" >
					<select class="btn btn-outline-secondary" type="button" id="button-addon1" value={this.state.t1} onChange={this.datos} name='t1'>
						<option selected name='gc' value="gc">ºC</option>
						<option name='gf' value="gf">ºF</option>
						<option name='gk' value="gk">ºK</option>
					</select>
					
					<input type="text"
						className="form-control"
						placeholder="Temperatura"
						aria-label="Resistencia"
						onChange={this.datos} /* se ejecuta al realizar un cambio */
						onKeyUp={this.sol1} /* se ejecuta al soltar la tecla */
						value={this.state.temp1}
						name="temp1"
						id="temp1" />
					
				</div>
				<div class="input-group mb-3">
					<select class="btn btn-outline-secondary" type="button" id="button-addon1" value={this.state.t2} onChange={this.datos} name='t2'>
						<option name='gc' value="gc">ºC</option>
						<option selected name='gf' value="gf">ºF</option>
						<option name='gk' value="gk">ºK</option>
					</select>
					<input type="text"
						className="form-control"
						placeholder="Temperatura"
						aria-label="Resistencia"
						onChange={this.datos}
						onKeyUp={this.sol2}
						value={this.state.temp2}
						name="temp2" 
						id="temp2"/>
				</div>
			</div>

		)}
		
		}
	}
}
export default Temperatura