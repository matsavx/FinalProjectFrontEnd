import React, {Component} from "react";
import {Tab, Container, Row, Col, Nav} from "react-bootstrap";
import FirstGameStatisticSlider from "../Components/FirstGameStatisticSlider";
import SecondGameStatisticSlider from "../Components/SecondGameStatisticSlider";
import ThirdGameStatisticSlider from "../Components/ThirdGameStatisticSlider";

export default class Statistic extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="statistic-block" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <h2 className="mt-3">Box-Score</h2>
                                <Nav.Item>
                                    <Nav.Link eventKey="first" className="mt-5">Lakers - Pelicans</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" className="mt-5">Bulls - Thunder</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" className="mt-5">Bucks - Mavericks</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <FirstGameStatisticSlider/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <SecondGameStatisticSlider/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <ThirdGameStatisticSlider/>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}