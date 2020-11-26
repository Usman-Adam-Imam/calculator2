import React from 'react';

const Button = props => (
    <input type="button" onClick={props.click} value={props.label} />
);

export default Button;