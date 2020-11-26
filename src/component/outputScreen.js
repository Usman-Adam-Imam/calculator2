import React from 'react';
import OutputScreenRow from './outputScreenRow';


const OutputScreen = props => (<div className="screen">
    <OutputScreenRow val={props.question} />
    <OutputScreenRow val={props.answer} />
</div>);

export default OutputScreen;