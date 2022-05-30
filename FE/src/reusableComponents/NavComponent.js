import React, { Component, Fragment } from 'react'
import { Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class NavComponent extends Component {
    render() {
        return (
            <Fragment>
                <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
                    <Link to="/">
                        <Navbar.Brand href="#home">Jubelio React Test</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        )
    }
}
