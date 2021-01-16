import React, {Component} from "react";
import {Navbar, Container, Nav} from 'react-bootstrap'
import logoicon from './logoicon.png'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Results from "../Pages/Results";
import Statistic from "../Pages/Statistic";
import Support from "../Pages/Support";

export default class Header extends Component {
    render() {
        return (
            //collapseOnSelect для адаптивности навбара на разных разрешениях, а expand - брейкпоинт, в котором навбар станет адаптивным (типа размера страницы)
            <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/" >
                        <img src={logoicon} height="30" width="30" className="d-inline-block align-top" alt = "Logo"/>
                        {" "}NBA Basketball Info
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/" className="mr-3">Results</Nav.Link>
                            <Nav.Link href="/statistic" className="mr-3">Statistic</Nav.Link>
                            <Nav.Link href="/support">Support</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Router>
                <Switch>
                    <Route exact path="/" component={Results}/>
                    <Route exact path="/statistic" component={Statistic}/>
                    <Route exact path="/support" component={Support}/>
                </Switch>
            </Router>
        </>
        )
    }
}