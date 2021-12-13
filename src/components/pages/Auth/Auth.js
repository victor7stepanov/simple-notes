import './Auth.scss';
import Form from '../../Form/Form';

export default function Auth({authProps, toggleModalHandler}) {
    return (
        <section className={'section'}>
            <h1 className={'section__header'}>{authProps.headerTitle}</h1>
            <div className={'auth'}>
                <Form
                    // formProps={authProps.formProps}

                    inputItems={[
                    {id: '#section-email-input', className: 'form__input', labelTitle: 'Email', type: 'email', placeholder: 'Enter email'},
                    {id: '#section-password-input', className: 'form__input', labelTitle: 'Password', type: 'password', placeholder: 'Enter password'}
                    ]}
                    buttonProps={{title: 'Sign up', type: 'submit'}}
                    linkProps={[{id: '1', className: 'button-link', title: 'Already have an account', type: 'button', isLink: true}]}

                    toggleModalHandler={toggleModalHandler}
                />
            </div>
        </section>
    )
}