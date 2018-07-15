import * as React from "react";
import { Segment, Header } from "semantic-ui-react";
import Logo from "../Logo";
import pkg from "../../pkg";

export default () => (
    <Segment basic textAlign='center'>
        <Logo centered size='small' />
        <Header as='h1' textAlign='center'>
            Linqable.ts {pkg.version} ✨
            <Header.Subheader>
                LINQ implementation library for TypeScript
            </Header.Subheader>
        </Header>
    </Segment>
)