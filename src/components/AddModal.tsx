import '../styles/AddModal.css'

import React, { FunctionComponent } from 'react';
import { MediaTypes } from '../misc/MediaTypes';
import InputMask from './InputMask';

interface AddModalProps {
    style: React.CSSProperties
    setVisibility: React.MouseEventHandler<HTMLButtonElement>
    selectedMedium: MediaTypes    
}
 
const AddModal: FunctionComponent<AddModalProps> = ({style, setVisibility, selectedMedium}) => {

    return ( 
    <div className="overlay" style={style}>
        <div className="modal">
            <div className="modal-header">
                <button className="btn-close" onClick={setVisibility}>X</button>
            </div>
            <div className="modal-main">
                <InputMask medium={selectedMedium}/>
            </div>
        </div>
    </div> );
}
 
export default AddModal;