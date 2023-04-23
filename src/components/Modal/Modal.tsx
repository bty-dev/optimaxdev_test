import React, {ReactNode} from 'react';

import classes from './Modal.module.scss';

interface AddProductModalProps {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
}

const Modal = ({children, isOpen, toggle}: AddProductModalProps) => {
    return (
        <>
            {isOpen && (
                    <div role="modal" onClick={() => toggle()} className={classes.modal}>
                        <div onClick={(e) => e.stopPropagation()} className={classes.modal__content}>
                            {children}
                        </div>
                    </div>
            )}
        </>

    );
};

export default Modal;