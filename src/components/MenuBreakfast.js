import React, { Component } from 'react';
import Button from './Button';
import menuBurger from '../menuBurger.json';
import { Grid, Row, Col } from 'react-flexbox-grid';


class MenuBreakfast extends Component {
    constructor() {
        super();
        this.state = { menuBurger }
    }

    render() {
        const breakfast = this.state.menuBurger.breakfast.map((menu, i) => {
            return (
                <Button btnName={menu.name + "" + menu.price} />
            )
        })

        return (
            <Grid fluid>
                <Row>
                    <Col xs={6} md={3}>
                        {breakfast}
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default MenuBreakfast;
