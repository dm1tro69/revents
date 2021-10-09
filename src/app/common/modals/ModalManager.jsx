import React from 'react';
import {useSelector} from "react-redux";
import TestModal from "../../../features/sandbox/TestModal";
import LoginForm from "../../../features/auth/LoginForm";

const ModalManager = () => {
    const modalLookup = {
        TestModal,
        LoginForm
    }
    const currentModal = useSelector(state => state.modals)
    let renderedModals;
    if (currentModal){
        const {modalType, modalProps} = currentModal
        const ModalComponent = modalLookup[modalType]
        renderedModals = <ModalComponent {...modalProps}/>
    }
    return (
        <span>
            {renderedModals}
        </span>
    );
};

export default ModalManager;
