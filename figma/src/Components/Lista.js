import React from 'react';
import './Lista.css';

export default({info1 ,info2, info3}) => {
    return(
        <div>
            <div className="lista-item">
                <div className="lista-item-info1">{info1}</div>
                <div className="lista-item-info2">{info2} {info3}</div>
            </div>
        </div>
    );
}
