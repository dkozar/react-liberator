import React, { Component } from 'react';
import { Link } from 'react-router'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import {demos} from './../demos';
import ReactWrappyText from 'react-wrappy-text';
require('./../styles/main.css');

export default class Index extends Component {
    render() {
        return (
            <div>
                {this.props.params[0]}
                <h1><ReactWrappyText>What's on the menu?</ReactWrappyText></h1>
                <blockquote>
                    Here are some Liberator demos.<br/><br/>
                    [ <em>react-liberator</em> is a plugin for ReactJS. It allows React components to render their DOM away from their siblings. ]
                </blockquote>
                <ListGroup>
                    {demos.map(demo => (
                        <ListGroupItem key={demo.url}
                                       href={'#/' + demo.url}
                                       header={demo.title}>
                            {demo.description}
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </div>
        );
    }
}