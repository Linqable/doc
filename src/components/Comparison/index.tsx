import React = require("react");
import { Grid, Label, Segment } from "semantic-ui-react";
import Editor from "../Editor";

function capitalize(string: string) {
    if (string.length <= 4)
        return string.toUpperCase();
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}
export default ({ source, language, stacked = true }) => (
    <Segment stacked={stacked} attached={!stacked} className='code-example'>
        <Grid columns='equal' centered textAlign='left'>
            <Grid.Column style={{ flexGrow: 1 }} computer='8' largeScreen='7' widescreen='7' width='16'>
                <Label size='tiny' attached='top left'>
                    {capitalize(language)}
                </Label>
                <Editor value={source} mode={language} readOnly />
            </Grid.Column>
        </Grid>
    </Segment>
);

