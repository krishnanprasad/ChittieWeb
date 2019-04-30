import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css'
class Modal extends React.Component {
    render() {
        // Render nothing if the "show" prop is false
        if (!this.props.show) {
            return null;
        }
        else {
            return (
                <div className="backdrop backdropStyle">
                    <p>Model is Coming</p>

                    <div className="modalStyle">
                        <div className="footer" style={{marginBottom:'10px'}}>
                            <span style={{fontWeight:'bold'}}>Add Members</span>
                            <button style={{float:'right'}} onClick={this.props.onClose}>Close            </button>
                        </div>
                        {this.props.children}

                     
                    </div>
                </div>
            );
        }
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};

export default Modal;