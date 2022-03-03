import React, {Component} from "react";
import Select from "./select";
import Engranes from "./calc/engranes";
import Potencia from "./calc/potencia";
import Temperatura from "./calc/temperatura";

class Mecha_calcu extends Component{
	state={
		plan: 'mecha'    
	}
	back = ()=>{
		this.setState({plan: 'back'})
	  }
	engranes = ()=>{
		this.setState({plan:'engranes'})
	}
	potencia = ()=>{
		this.setState({plan:'potencia'})
	}
	temperatura = ()=>{
		this.setState({plan:'temperatura'})
	}
	render(){
		{
			if(this.state.plan === 'back'){
			return(
				<Select/>
			)
			}
			else if(this.state.plan === 'mecha'){
				return( 
					<div >
						<div>
							<button type="button" className="btn btn-success back" onClick = {this.back}>↩</button>
						</div>
						<div className="selectM">
							<div className="card" /* style="width: 18rem;" */>
							<img src="https://i.imgur.com/qSh0qmJ.jpg" class="card-img-top" alt="..."/>
								<div className="card-body">
									<button type="button" className="btn btn-primary" onClick={this.engranes}>Engranes</button>
								</div>
							</div>
							<div className="card" /* style="width: 18rem;" */>
							<img src="https://i.imgur.com/BGFX0tm.png" class="card-img-top" alt="..."/>
								<div className="card-body">
									<button type="button" className="btn btn-primary potencia" onClick={this.potencia}>Potencia</button>
								</div>
							</div>
							<div className="card" /* style="width: 18rem;" */>
							<img src="https://i.imgur.com/twmUrK7.jpg" class="card-img-top" alt="..."/>
								<div className="card-body">
									<button type="button" className="btn btn-primary" onClick={this.temperatura}>Temperatura</button>
								</div>
							</div>
						</div>
						
					</div>
					)
			}
			else if(this.state.plan === 'engranes'){
			return(
				<Engranes/>
			)
			}
			else if(this.state.plan === 'potencia'){
			return(
				<Potencia/>
			)
			}
			else if(this.state.plan === 'temperatura'){
			return(
				<Temperatura/>
			)
			}
		
		
		}
	}
}

export default Mecha_calcu;