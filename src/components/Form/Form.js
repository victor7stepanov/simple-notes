import './Form.scss';
import Button from '../UI/Button/Button';

export default function Form({formProps, inputItems, textAreaProps, buttonProps, linkProps, toggleModalHandler}) {
    return (
        <form className={'.form'} noValidate={true}>
            {inputItems.map((input) => {
                return (
                    <div className={'form__input-wrapper'}
                         key={input.id} data-error={input.errorMessage || null}
                    >
                        <label className={'form__label'} htmlFor={input.id}>{input.labelTitle}</label>
                        <input className={input.className}
                               id={input.id}
                               type={input.type}
                               placeholder={input.placeholder}
                               required={true}
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
            { textAreaProps
                ? (
                    <div className={'form__text-area-wrapper'} data-error={textAreaProps.errorMessage}>
                        <label className={'form__label'} htmlFor={textAreaProps.id}>{textAreaProps.labelTitle}</label>
                        <textarea id={'#modal-textarea'} className={textAreaProps.className}
                                  placeholder={textAreaProps.placeholder}
                                  required={true} wrap={'soft'} spellCheck={true}
                        />
                    </div>
                ) : null
            }
            <div className={'form__button-container'}>
                <Button title={buttonProps.title} type={buttonProps.type}/>
            </div>
            <div className={'form__link-container'}>
                {linkProps.map((link) => {
                    return link.isLink
                        ? <a className={'form__link'} href="#1" key={link.id}>{link.title}</a>
                        : <Button title={link.title} key={link.id}
                              className={link.className} toggleModalHandler={toggleModalHandler}
                              linkButton={true} type={link.type}
                        />
                })}
            </div>
        </form>
    )
}