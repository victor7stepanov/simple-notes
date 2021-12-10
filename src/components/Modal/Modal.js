import './Modal.scss';
import Form from '../Form/Form';

export default function Modal({headerTitle}) {
    return (
        <section className={'modal'}>
            <h2 className={'modal__header'}>{headerTitle}</h2>
            <Form
                inputItems={[
                    {id: '#modal-email-input', className: 'form__input form_error-border', labelTitle: 'Old password', type: 'password', placeholder: 'Enter old password', errorMessage: 'Invalid password'},
                    {id: '#modal-password-input', className: 'form__input', labelTitle: 'New password', type: 'password', placeholder: 'Enter new password'}
                ]}
                buttonTitle={'Change password'}
                linkProps={[{id: '1', href: '#', title: 'Reset password by email'}]}
                textAreaProps={{id: '#modal-textarea', className: 'form__textarea form_error-border', labelTitle: 'Note', placeholder: 'Enter note', errorMessage: 'Empty note'}}
            />
        </section>
    )
}