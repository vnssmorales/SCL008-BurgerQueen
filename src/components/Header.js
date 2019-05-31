import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Header extends Component {
    render() {
        return (

            <Grid fluid>
                <Row>
                    <Col xs={12} md={12} lg={12}>
                    <div className="header">
                        <h3>BURGER QUEEN</h3>
                        {this.props.header}
                    </div>
                    </Col>
                </Row>
            </Grid >

                    );
    }

}

export default Header;