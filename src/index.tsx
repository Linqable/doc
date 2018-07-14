import App from "./app";
import * as ReactDOM from "react-dom";
import * as React from "react";
import * as ReactGA from 'react-ga';
ReactGA.initialize('UA-70421575-5');
ReactGA.pageview(window.location.pathname + window.location.search);


ReactDOM.render(
    <App />,
    document.getElementById('root') as HTMLElement
);