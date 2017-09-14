import React, {Component} from 'react';

class ListComp extends Component {
    render() {
        const listItems = this.props.items.map((item, i) =>
            this.props.renderItem(item, i)
        );

        return (
            <div>
                {listItems}
            </div>
        );
    }
}

export default ListComp;