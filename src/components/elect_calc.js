import React, { Component } from "react";
import Select from "./select";
import Carga from "./calc/cargab"
import Volt from "./calc/volt";
import Ampere from "./calc/ampe";
import Resist from "./calc/resist";

class Elect_calc extends Component {
	state = {
		plan: ' '
	}
	back = () => {
		this.setState({ plan: 'back' })
	}
	Carga = () => {
		this.setState({ plan: 'Carga' })
	}
	Volt = () => {
		this.setState({ plan: 'Volt' })
	}
	Ampere = () => {
		this.setState({ plan: 'Ampere' })
	}
	Resist = () => {
		this.setState({ plan: 'Resist' })
	}
	render() {
		{
			if (this.state.plan === 'back') {
				return (
					<Select />
				)
			}
			else if (this.state.plan === 'Carga') {
				return (
					<Carga />
				)
			}
			else if (this.state.plan === 'Volt') {
				return (
					<Volt />
				)
			}
			else if (this.state.plan === 'Ampere') {
				return (
					<Ampere />
				)
			}
			else if (this.state.plan === 'Ampere') {
				return (
					<Ampere />
				)
			}
			else if (this.state.plan === 'Resist') {
				return (
					<Resist />
				)
			}
		}
		return (
			<div>
				<div>
					<button type="button" className="btn btn-success back" onClick={this.back}>↩</button>
				</div>
				<div className="select selectE">
					<div className="card" /* style="width: 18rem;" */>
						<img src="https://i.imgur.com/pIHyTYZ.jpg" class="card-img-top" alt="baterias electrica"/>
						<div className="card-body">
							<button className="btn btn-primary" onClick={this.Carga}>Carga de baterias</button>
						</div>
					</div>
					<div className="card" /* style="width: 18rem;" */>
						<img src="https://i.imgur.com/zhy0dNB.png" class="card-img-top" alt="voltaje"/>
						<div className="card-body">
							<button className="btn btn-primary" onClick={this.Volt}>voltaje</button>
						</div>
					</div>
					<div className="card" /* style="width: 18rem;" */>
						<img src="https://i.imgur.com/8WPk1xj.jpg" class="card-img-top" alt="..."/>
						<div className="card-body">
							 <button className="btn btn-primary" onClick={this.Ampere}>Amperaje</button>
						</div>
					</div>
					<div className="card" /* style="width: 18rem;" */>
						<img src="https://i.imgur.com/FxmrkjU.jpg" class="card-img-top" alt="Resistencia"/>
						<div className="card-body">
							<button className="btn btn-primary" onClick={this.Resist}>Resistencia</button>
						</div>
					</div>
					
					
					
					
				</div>
			</div>
		)
	}
}

export default Elect_calc;