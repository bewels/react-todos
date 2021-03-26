import React from 'react';

export default class FormAdd extends React.Component {
    addItem = (e) => {
        if(e.key === 'Enter'){
            if (e.target.value === '') {
                const value = 'emptyText'
                this.props.postAddItem(value)
                return 1
            }
            this.props.postAddItem(e.target.value)
            e.target.value = '';
        }
    }
    render () {
        return (
            <div className="input-group">
                <input 
                    placeholder="Ваше задание"
                    type="text"
                    required
                    className="form-control"
                    onKeyUp={(this.addItem)}
                />
            </div>
        )
    }
}

