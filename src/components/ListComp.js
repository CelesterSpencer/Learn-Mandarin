import React, {Component} from 'react';
import Divider from './Divider';

class ListComp extends Component {
    static defaultProps = {
        items: [],
        renderItem: (item, i) => <div>item</div>,
        renderEmpty: () => <div></div>
    }

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
        if(itemsCount === 0) {
            listItems = this.props.renderEmpty();
        }

        return (
            <div style={{...containerStyle, ...this.props.style}}>
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