import React, { Component } from 'react';
import VarTiendaController from '../Controllers/TiendaController';
import '../Estilos/Plato.css';
import logo from '../logo.svg';

class Plato extends Component{
    render(){
        let platos_div = [];

        const llenar_array_platos_div = VarTiendaController.platillos.forEach(
            (value,index) => (
                platos_div.push(
                    <div>{ value.nombre }</div>
                )
            )
        )

        return(
            <div className="container col-md-6">
                <div className="">
                    <div className="panel panel primary">
                        <div className="list-group Plato-Menu">
                            {platos_div}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Plato;