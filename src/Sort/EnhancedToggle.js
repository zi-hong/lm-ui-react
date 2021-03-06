import React from 'react';

class EnhancedToggle extends React.Component {
    constructor(props) {
        super(props)
    }
    
    handleChange = (event) => {
        if (this.props.toggle === false) {
            this.refs.checkbox.checked = true;
        }
    
        let checkStatus = this.refs.checkbox.checked;
        
        if (this.props.onParentShouldUpdate) {
            this.props.onParentShouldUpdate(checkStatus)
        }
    }
    
    
    render() {
        const {
            onParentShouldUpdate,
            style,
            toggle,
            disabled,
            ...others
        } = this.props;
        
        return (
            <input
                ref="checkbox"
                type="checkbox"
                { ...others }
                onChange={ this.handleChange }
                style={ style }
            />
        )
    }
    
}

EnhancedToggle.PropTypes = {
    style: React.PropTypes.object,
    onParentShouldUpdate: React.PropTypes.func,
    toggle: React.PropTypes.bool,
    disabled: React.PropTypes.bool
};

EnhancedToggle.defaultProps = {
    style: {},
    toggle: true,
    onParentShouldUpdate: () => {}
};

export default EnhancedToggle