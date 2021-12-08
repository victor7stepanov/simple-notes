import './Page.scss';

export default function Page({headerTitle, children}) {
    return (
        <section className={'section'}>
            <h1 className={'section__header'}>{headerTitle}</h1>
            {children}
        </section>
    )
}