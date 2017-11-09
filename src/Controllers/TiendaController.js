import { extendObservable } from 'mobx';

class TiendaController{
    constructor(){
        extendObservable(this, 
            {
                platillos: [
                    {nombre: 'Primer plato', 
                    descripcion: 'platillo',
                    precio: 20,
                    cantidad: 0},
                    {nombre: 'Segundo plato', 
                    descripcion: 'platillo',
                    precio: 20,
                    cantidad: 0},
                    {nombre: 'Tercer Plato', 
                    descripcion: 'platillo',
                    precio: 20,
                    cantidad: 0}
                ]
        });
    }
}

var VarTiendaController = new TiendaController;

export default VarTiendaController;