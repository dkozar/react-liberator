import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap'
import {demos} from './demos';
var _ = require('lodash');

require('./styles/main.css');

export class App extends Component {
    render() {
        var demoUrl = this.props.routes[this.props.routes.length - 1].path,
            demo = _.find(demos, function (item) {
                return item.url === demoUrl;
            }),
            demoTitle = demo ? demo.title : null;

        return (
            <div>
                <Breadcrumb>
                    <BreadcrumbItem href="#">
                        React Liberator
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        {demoTitle}
                    </BreadcrumbItem>
                </Breadcrumb>
                {this.props.children}
            </div>
        );
    }
}