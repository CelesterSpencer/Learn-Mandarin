import React, {Component} from 'react';
import Divider from './Divider';

class ListComp extends Component {
    render() {
        const {containerStyle} = styles;
        const itemsCount = this.props.items.length;

        let listItems = [];
        for(var i = 0; i < itemsCount; i++) {
            const item = this.props.items[i];

            listItems.push(this.props.renderItem(item, i));
            if(i < itemsCount-1) {
                listItems.push(<Divider key={'divider'+i} />);
            }
        }

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
        overflowY: 'auto'
    }
}

export default ListComp;