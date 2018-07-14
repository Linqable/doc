import * as React from 'react';
import { Grid } from 'semantic-ui-react';
import Sidemenu from './sidemenu';

export default () => (
    <div>
        <Sidemenu />
        <Grid centered textAlign="center" >

            <Grid.Column width="5">
                <div>test</div>
            </Grid.Column>
        </Grid >
    </div>
);