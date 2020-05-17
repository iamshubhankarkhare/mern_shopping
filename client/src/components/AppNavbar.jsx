import React, { Component } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap'
import RegisterModal from './RegisterModal'
import Logout from './Logout'

export default class AppNavbar extends Component {
    state = {
        isOpen: false
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }



    render() {
        return (
            <div>
                <Navbar color="dark" expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">Shopping List</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}></NavbarToggler>
                        <Collapse isOpen={this.state.isOpen} navbar></Collapse>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <RegisterModal></RegisterModal>
                            </NavItem>
                            <NavItem>
                                <Logout></Logout>
                            </NavItem>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
