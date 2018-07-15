import * as React from "react";
import { Header, Message, Icon } from "semantic-ui-react";
import Comparison from "../Comparison";

function renderTitle(title) {
    if (title == null)
        return <div />;
    return (
        <Header as='h4' dividing>
            {title}
        </Header>
    );
}
function renderDesc(desc) {
    if (desc == null)
        return <div />;
    return <p>{desc}</p>
}
function renderWarning(warn) {
    if (warn == null)
        return <div />;
    return (
        <Message warning attached='bottom'>
            <Icon name='warning' />
            {warn}
        </Message>
    )
}
function renderInfo(info) {
    if (info == null)
        return <div />;
    return (
        <Message info attached='bottom'>
            {info}
        </Message>
    )
}
export default ({ src, language = "sh", title = null, desc = null, warning = null, info = null }) => {
    return (
        <div>
            {renderTitle(title)}
            {renderDesc(desc)}
            <Comparison stacked={warning == null && info == null} source={src} language={language} />
            {renderWarning(warning)}
            {renderInfo(info)}
            <br />
        </div>
    );
}