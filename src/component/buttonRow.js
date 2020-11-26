import React from 'react';
import Button from './button';

const ButtonRow = props => {
    const arr = props.labels;
    const buttons = arr.map(label => <Button label={label} click={props.click} />);

    return (
        <div className="button-row">
            {buttons}
        </div>
    );
}

export default ButtonRow;