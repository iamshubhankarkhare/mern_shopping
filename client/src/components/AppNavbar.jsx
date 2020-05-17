import React, { Component, Fragment } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Container } from 'reactstrap'
import RegisterModal from './RegisterModal'
import LoginModal from './LoginModal'
import Logout from './Logout'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export class AppNavbar extends Component {
    state = {
        isOpen: false
    }

    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }



    render() {
        const { isAuthenticated, user } = this.props.auth;


        const authLinks = (
            <Fragment>
                <NavItem>
                    <span className="navbar-text mr-3">
                        <strong>{user ? `Welcome ${user.name}` : ''}</strong>
                    </span>
                </NavItem>
                <NavItem>
                    <Logout></Logout>
                </NavItem>
            </Fragment>
        )
        const guestLinks = (
            <Fragment>
                <NavItem>
                    <RegisterModal></RegisterModal>
                </NavItem>
                <NavItem>
                    <LoginModal></LoginModal>
                </NavItem>
            </Fragment>
        )
        return (
            <div>

                <Navbar color="dark" expand="sm" className="mb-5" style={{ listStyle: "none" }}>
                    <Container>
                        <NavbarBrand href="/">Shopping List</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}></NavbarToggler>
                        <Collapse isOpen={this.state.isOpen} navbar></Collapse>
                        <Nav className="ml-auto" navbar></Nav>
                        {isAuthenticated ? authLinks : guestLinks}

                    </Container>
                </Navbar>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    auth: state.auth
})
export default connect(mapStateToProps, null)(AppNavbar)
