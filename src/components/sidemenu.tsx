import { Component } from 'react';
import * as React from 'react';
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react';

export default class Sidemenu extends Component {
    state = { visible: false }

    handleSidebarHide = () => this.setState({ visible: false });

    render() {
        const { visible } = this.state

        return (
            <div>
                <Sidebar.Pushable as={Segment}>
                    <Sidebar
                        as={Menu}
                        animation='overlay'
                        icon='labeled'
                        inverted
                        onHide={this.handleSidebarHide}
                        vertical
                        visible={visible}
                        width='thin'>
                        <Menu.Item as='a'>
                            <Icon name='github' />
                            Github
                        </Menu.Item>
                        <Menu.Item as='a'>
                            <Icon name='file' />
                            Docs
                        </Menu.Item>
                        <Menu.Item as='a'>
                            <Icon name='npm' />
                            NPM
                    </Menu.Item>
                    </Sidebar>
                </Sidebar.Pushable>
            </div>
        )
    }

}