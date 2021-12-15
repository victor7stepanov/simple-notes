import './Auth.scss';
import Form from '../../Form/Form';

export default function Auth({authProps, toggleModalHandler, submitHandler}) {
    return (
        <section className={'section'}>
            <h1 className={'section__header'}>{authProps.headerTitle}</h1>
            <div className={'auth'}>
                <Form
                    formProps={authProps.formProps}
                    toggleModalHandler={toggleModalHandler}
                    submitHandler={submitHandler}
                />
            </div>
        </section>
    )
}