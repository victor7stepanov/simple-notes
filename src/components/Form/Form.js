import './Form.scss';
import Button from '../UI/Button/Button';
import {Link} from "react-router-dom";

export default function Form({formProps, toggleModalHandler, submitHandler}) {
    return (
        <form className={'.form'} noValidate={true} onSubmit={submitHandler}>
            {formProps.inputItems.map((input) => {
                return (
                    <div className={'form__input-wrapper'}
                         key={input.id} data-error={input.errorMessage || null}
                    >
                        <label className={'form__label'} htmlFor={input.id}>{input.labelTitle}</label>
                        <input className={input.className} id={input.id}
                               type={input.type} placeholder={input.placeholder}
                               required={true} onChange={input.handler}
                        />
                        {/*{ input.type === 'password'*/}
                        {/*    ? (*/}
                        {/*        <input className={'form__password-checkbox'} type='checkbox'/>*/}
                        {/*    )*/}
                        {/*    : null*/}
                        {/*}*/}
                    </div>
                )
            })}
            { formProps.textAreaProps
                ? (
                    <div className={'form__text-area-wrapper'} data-error={formProps.textAreaProps.errorMessage}>
                        <label className={'form__label'} htmlFor={formProps.textAreaProps.id}>
                            {formProps.textAreaProps.labelTitle}</label>
                        <textarea id={'#modal-textarea'} className={formProps.textAreaProps.className}
                                  placeholder={formProps.textAreaProps.placeholder}
                                  required={true} wrap={'soft'} spellCheck={true}
                        />
                    </div>
                ) : null
            }
            <div className={'form__button-container'}>
                <Button title={formProps.buttonProps.title} type={formProps.buttonProps.type}/>
            </div>
            <div className={'form__link-container'}>
                {formProps.linkProps.map((link) => {
                    return link.isLink
                        ? <Link to={link.path} className={'form__link'} key={link.id}>{link.title}</Link>
                        : <Button title={link.title} key={link.id}
                              className={link.className} toggleModalHandler={toggleModalHandler}
                              linkButton={true} type={link.type}
                        />
                })}
            </div>
        </form>
    )
}