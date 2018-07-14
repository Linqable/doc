import { Component } from 'react';
import * as React from 'react';
import { AppContainer } from 'react-hot-loader';
import 'semantic-ui-css/semantic.min.css';
import LinqApp from './components/Linq.app';


export default class App extends Component {
    render() {
        return (<AppContainer>
            <LinqApp />
        </AppContainer>)
    }
}