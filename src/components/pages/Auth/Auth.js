import './Auth.scss';
import Form from '../../Form/Form';

export default function Auth() {
    return (
        <div className={'auth'}>
            <Form
                inputItems={[
                    {id: '#section-email-input', className: 'form__input form_error-border', errorMessage: 'Invalid email', labelTitle: 'Email', type: 'email', placeholder: 'Enter email'},
                    {id: '#section-password-input', className: 'form__input', labelTitle: 'Password', type: 'password', placeholder: 'Enter password'}
                ]}
                buttonProps={{title: 'Login', type: 'submit'}}
                linkProps={[
                    {id: '1', className: 'button-link', title: 'Forgotten password', type: 'button'},
                    {id: '2', className: 'button-link', title: 'Create new account', type: 'button'}
                ]}
            />
        </div>
    )
}