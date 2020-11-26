import React from 'react';

const OutputScreenRow = props => (<div className='screen-row'>
    <input type="text" value={props.val} readOnly />
</div>);

export default OutputScreenRow;