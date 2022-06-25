import '../styles/AddModal.css'

import React, { FunctionComponent, useEffect, useState } from 'react';
import { RecordWithTtl } from 'dns';

interface AddModalProps {
    style: React.CSSProperties
    setVisibility: React.MouseEventHandler<HTMLButtonElement>    
}
 
const AddModal: FunctionComponent<AddModalProps> = ({style, setVisibility}) => {



    return ( 
    <div className="overlay" style={style}>
        <div className="modal">
            <div className="modal-header">
                <button className="btn-close" onClick={setVisibility}>X</button>
            </div>
        </div>
    </div> );
}
 
export default AddModal;