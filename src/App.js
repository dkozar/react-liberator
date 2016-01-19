import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import Demo1 from './components/Demo1';
import Demo2 from './components/Demo2';
import Demo3 from './components/Demo3';

require('./styles/main.css');

var options = [
        'Demo 1 - Liberate!',
        'Demo 2 - Popup',
        'Demo 3 - Full screen'
    ];

export class App extends Component {

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);

        this.state = {
            demo: 0,
            label: options[0]
        };
    }

    onChange(event, eventKey) {
        this.setState({
            demo: eventKey,
            label: options[eventKey]
        })
    }

    onUrlClick() {

    }

    render() {
        var index = this.state.demo,
            demo;

        switch (index) {
            case 0:
                demo = <Demo1 />;
                break;
            case 1:
                demo = <Demo2 />;
                break;
            case 2:
                demo = <Demo3 />;
                break;
        }

        return (
            <div>
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="https://github.com/dkozar/react-liberator" target="_blank">React Liberator</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavDropdown onSelect={this.onChange} eventKey={3} title={this.state.label} id="basic-nav-dropdown">
                                <MenuItem eventKey={0}>{options[0]}</MenuItem>
                                <MenuItem eventKey={1}>{options[1]}</MenuItem>
                                <MenuItem eventKey={2}>{options[2]}</MenuItem>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                {demo}

            </div>
        );
    }
}