import React from 'react';

import './add-list-item.css';

export default class PostAddItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: this.props.select,
        }
        
    }
    
    onCeckedStatus = (e) => {
        const check = e.target.checked
        this.props.onSelect(this.props.id)
        this.setState(({checked: check}))
    }


    render () {
        const {label, id, onDelete} = this.props
        const {Type} = this.state
        let classNamed = 'task-text'
        if (this.state.checked){
            classNamed += ' ready'
        }
        return (
            <div className="d-flex filed-todo">
                <div className="task">
                    <input 
                        type="checkbox"
                        id={id}
                        name="redy"
                        className="custom-checkbox"
                        checked={this.state.checked}
                        onChange={this.onCeckedStatus}
                    />
                    <label 
                        htmlFor={id}
                    ></label>
                    <span onDoubleClick={this.onChangeInput} className={classNamed} >{label}</span>
                </div>
                
                <i 
                    className="fa fa-trash"
                    onClick={onDelete}
                ></i>
            </div>
        )
    }
}

