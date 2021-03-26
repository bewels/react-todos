import React from 'react';

import './nav.css';

export default class NavMenu extends React.Component {

    onTabs = (e) => {
        const arg = e.target.id
        this.props.crateArgs(arg)
    }

    render () {
        const {post, onClear, quaData} = this.props
        const classNamed = 'tabs-item'
        if (post.length === 0){
            return <></>
        }
        const quantity = this.props.post.filter(item => !item.select).length
        let label = 'Очистить выполненые'
        if (quaData !== quantity) {
            label = 'Очистить выполненные'
        }
        return (
            <div className="nav-menu d-flex">
                <div>{quantity} items not a ready</div>
                <ul className="d-flex tabs">
                    <li
                        onClick={this.onTabs}
                        className={classNamed}
                        >All</li>
                    <li
                        onClick={this.onTabs}
                        className={classNamed}
                        id="Active"
                        >Active</li>
                    <li
                        onClick={this.onTabs}
                        className={classNamed}
                        id="Computed"
                        >Computed</li>
                </ul>
                <div onClick={onClear}>{label}</div>
            </div>
        )
    }
}
