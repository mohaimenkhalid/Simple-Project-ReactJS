import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import web from  '../../asset/image/web.svg';
import mobile from '../../asset/image/mobile.svg';
import graphics from '../../asset/image/graphics.svg';

class Service extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">MY SERVICES</h1>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={web}/>
                                <h2 className="serviceName">Web Development</h2>
                                <p className="serviceDescription">I build native and cross platfrom mobile app for your business and instiution as per as your requirements.</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={mobile}/>
                                <h2 className="serviceName">Mobile Development</h2>
                                <p className="serviceDescription">I build native and cross platfrom mobile app for your business and instiution as per as your requirements.</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={graphics}/>
                                <h2 className="serviceName">Graphics Design</h2>
                                <p className="serviceDescription">I build native and cross platfrom mobile app for your business and instiution as per as your requirements.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Service;