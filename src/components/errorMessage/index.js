import React from 'react';
import img from './error.gif';
import './styles.css';

const ErrorMessage = () => {
    return (
        <>
            <img alt="error" className="photo" src={img} /> 
                <span>Something goes wrong :(</span>
        </>
    )
    
}
export default ErrorMessage;