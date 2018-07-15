import { Component } from 'react';
import * as React from 'react';
import { AppContainer } from 'react-hot-loader';
import 'semantic-ui-css/semantic.min.css';
import { Header, Segment, Container, Grid } from 'semantic-ui-react';
import AppHeader from './components/AppHeader';
import Introduction from './components/Introduction';
import Comparison from './components/Comparison';
import CodeExample from './components/CodeExample';
import DocManager from './components/DocManager';
import Footer from './components/Footer';




export default class App extends Component {
    render() {
        return (
            <AppContainer>
                <Container id='page' style={{ width: "60%", "min-width": "60%" }}>
                    <Segment>
                        <AppHeader />
                        <Introduction />
                        <DocManager />
                        <Footer />
                    </Segment>
                </Container>
            </AppContainer>
        );
    }
}