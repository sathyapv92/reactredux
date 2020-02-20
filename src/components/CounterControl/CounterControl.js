import React from 'react';

import './CounterControl.css';

const counterControl = (props) => (
    <div className="CounterControl" onClick={props.clicked}>
        {props.label}{props.initial}
    </div>
);

export default counterControl;