import React, { Component } from 'react';
import Button from './Button';

class ProductBreakfast extends Component {
    constructor(){
        super();
      
    }

    render() {
        return (
            <div className="container_breakfast">
                <div className="row">
                    <div className="col-sm" id="breakfast">
                    <Button btn= "Café Americano" id="btn_coffeAm" />
                    <Button btn= "Café con Leche"/>
                    <Button btn= "Sándwich de Jamón y Queso"/>
                    <Button btn= "Jugo Natural"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductBreakfast;
