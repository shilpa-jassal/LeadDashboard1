import React, { Component } from 'react'
import {Nav, NavItem, NavLink } from 'reactstrap'

export default class Logout extends Component {
    render() {
        return (
            <div>
                <Nav>
                    <NavItem>
                        <NavLink href="/Login">Login</NavLink>
                    </NavItem>
                </Nav>
                <h4>You have been logged out</h4>
                
            </div>
        )
    }
}
