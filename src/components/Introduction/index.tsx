import * as React from "react";
import { Header, List, Segment } from "semantic-ui-react";


export default () => (
    <Segment basic padded>
        <Header as='h2' dividing>
            Introduction
        </Header>
        <p>
            Linqable.ts is LINQ implementation library for {' '}
            <a href="http://www.typescriptlang.org">TypeScript</a> .
        </p>
        <List>
            <List.Item icon='check' content='Standard API' />
            <List.Item icon='check' content='Advanced API' />
            <List.Item icon='check' content='Array Extension' />
            <List.Item icon='check' content='Logic-to-logic from csharp' />
            <List.Item icon='check' content='Optimized 🌊' />
            <List.Item icon='check' content='Fasted ⚡️' />
            <List.Item icon='check' content='Kawaii ✨' />
        </List>
    </Segment>
);