import * as React from "react";
import { Menu } from "semantic-ui-react";
import StandardApi from "./docs-snapshot/standard";
import AdvancedApi from './docs-snapshot/advanced';
import Home from "./docs-snapshot/home";



export default class DocManager extends React.Component {
    state = { activeItem: 'usg' }
    handleItemClick = (e, { name, id }) => this.setState({ activeItem: id })

    render() {
        const { activeItem } = this.state

        return (
            <div>
                <Menu pointing>
                    <Menu.Item
                        id="usg"
                        name='Usage'
                        active={activeItem === 'usg'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        id="std"
                        name='Standard API'
                        active={activeItem === 'std'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        id="advanced"
                        name='Advanced API'
                        active={activeItem === 'advanced'}
                        onClick={this.handleItemClick}
                    />
                </Menu>
                {this.renderDoc()}
            </div>
        );
    }
    renderDoc() {
        const { activeItem } = this.state
        switch (activeItem) {
            case "advanced": return (<AdvancedApi />);
            case "std": return (<StandardApi />);
            case "usg": return (<Home />);
        }
    }
}