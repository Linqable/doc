import * as React from "react";
import { Segment, Header } from "semantic-ui-react";
import CodeExample from "../../CodeExample";
import { Component } from "react";
import pkg from "../../../pkg";


const cdn = `<script src="https://cdn.jsdelivr.net/npm/linqable.ts@${pkg.version}/lib/web/linq.min.js"></script>`
export default class Home extends Component {
    render() {
        return (
            <Segment basic padded>
                <Header as='h2'>
                    Install
                </Header>
                The Linqable.ts package can be installed via Yarn:
                <CodeExample src="$ yarn add linqable.ts" />
                <Header as="h2">
                    Content Delivery Network (CDN)
                </Header>
                You can use the default web version by including a CDN link in your *.html file.
                <CodeExample src={cdn} language="html" />
            </Segment>
        );
    }
}