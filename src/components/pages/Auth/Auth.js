import Form from '../../Form/Form';

export default function Auth() {
    return (
            <Form
                inputItems={[
                    {id: '#section-email-input', className: 'form__input form_error-border', errorMessage: 'Invalid email', labelTitle: 'Email', type: 'email', placeholder: 'Enter email'},
                    {id: '#section-password-input', className: 'form__input', labelTitle: 'Password', type: 'password', placeholder: 'Enter password'}
                ]}
                buttonTitle={'Login'}
                linkProps={[
                    {id: '1', title: 'Forgotten password', href: '#'},
                    {id: '2', title: 'Create new account', href: '#'}
                ]}
            />
    )
}