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
                <div className="select">
                    <button onClick={this.Carga}>Carga de baterias</button>
                    <button onClick={this.Volt}>voltaje</button>
                    <button onClick={this.Ampere}>Amperaje</button>
                    <button onClick={this.Resist}>Resistencia</button>
                </div>
            </div>
        )
    }
}

export default Elect_calc;