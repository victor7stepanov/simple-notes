import './Auth.scss';

export default function Auth({headerTitle, buttonTitle, linkProps}) {
    return (
        <section className={'section'}>
            <h1 className={'section__header'}>{headerTitle}</h1>
            <form className={'section__form'} noValidate={true}>
                <div className={'section__form-input-wrapper'}>
                    <label className={'section__form-label'} htmlFor='#email-input'>Email</label>
                    <input className={'section__form-input'} type='email' id={'#email-input'} placeholder={'Enter email'} required={true}/>
                </div>
                <div className={'section__form-input-wrapper'}>
                    <label className={'section__form-label'} htmlFor='#password-input'>Password</label>
                    <input className={'section__form-input'} type='password' id={'#password-input'} placeholder={'Enter password'} required={true}/>
                </div>
                <button className={'section__form-button'} type={'submit'}>{buttonTitle}</button>
            </form>
            <div className={'section__link-container'}>
                {linkProps.map((link) => {
                    return <a className={'section__link'} key={link.id} href={link.href}>{link.title}</a>
                })}
            </div>
        </section>
    )
}