import * as React from "react";
import { List, Divider, Container, Segment, Image } from "semantic-ui-react";
const img = require("./../../../img/logo.png");
export default () => (
    <Segment vertical>
        <Container textAlign='center'>
            <Divider section />
            <Image src={img} centered size='mini' />
            <br />
            <List horizontal divided link>
                <List.Item as='a' href='https://github.com/0xF6/linqable.ts'>
                    Github
                </List.Item>
                <List.Item as='a' href='https://t.me/ivysola'>
                    Contact Us
                </List.Item>
                <List.Item as='a' href='https://www.npmjs.com/package/linqable.ts'>
                    NPM
                </List.Item>
            </List>
        </Container>
    </Segment>
);