import React, { Component } from 'react';
import Button from './Button';
import menuBurger from '../menuBurger.json';
import { Grid, Row, Col } from 'react-flexbox-grid';

class MenuLunchAndDinner extends Component {
    constructor() {
        super();
        this.state = { menuBurger }
    }

    render() {
        const lunchAndDinner = this.state.menuBurger.lunchAndDinner.map((menu, i) => {
            return (
                <Button btnName={menu.name + "" + menu.price} />
            )
        })

        return (
            <Grid fluid>
                <Row>
                    <Col xs={6} md={3}>
                    <div id="productLunch">
                        {lunchAndDinner}
                    </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default MenuLunchAndDinner;
