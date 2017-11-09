import React, { Component } from 'react';
//import { observer } from 'mobx-react';
import Plato from './Plato';

class Lienzo extends Component{
    render(){
        return(
            <div className="container">
                <div className="jumbotron">
                    <h2>Nombre de tienda</h2>
                </div>
                <Plato/>
                <h4>Pedidos</h4>
            </div>                
        );
    }
}

export default Lienzo;