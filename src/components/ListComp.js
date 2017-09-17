import React, {Component} from 'react';

class ListComp extends Component {
    render() {
        const {containerStyle} = styles;
        const listItems = this.props.items.map((item, i) =>
            this.props.renderItem(item, i)
        );

        return (
            <div style={containerStyle}>
                {listItems}
            </div>
        );
    }
}

const styles = {
    containerStyle: {
        height: '100%',
        overflowY: 'scroll'
    }
}

export default ListComp;