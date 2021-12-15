import './Modal.scss';
import Form from '../Form/Form';

export default function Modal({headerTitle, isOpen, toggleModalHandler}) {
    return (
        <section className={isOpen ? 'modal open' : 'modal'}>
            <button className={'close-button'} onClick={toggleModalHandler}/>
            <h2 className={'modal__header'}>{headerTitle}</h2>
            <Form
                formProps={{
                    inputItems: [
                        {id: '#modal-email-input', className: 'form__input form_error-border', labelTitle: 'Old password', type: 'password', placeholder: 'Enter old password', errorMessage: 'Invalid password'},
                        {id: '#modal-password-input', className: 'form__input', labelTitle: 'New password', type: 'password', placeholder: 'Enter new password'}
                    ],
                    buttonProps: {title: 'Change password', type: 'submit'},
                    linkProps: [
                        {id: '1', className: 'button-link', title: 'Reset password by email', type: 'button'},
                        {id: '2', className: 'button-link', title: 'Reset password by email', type: 'button'}
                    ],
                    // textAreaProps: {id: '#modal-textarea', className: 'form__textarea form_error-border', labelTitle: 'Note', placeholder: 'Enter note', errorMessage: 'Empty note'}
                }}
            />
        </section>
    )
}