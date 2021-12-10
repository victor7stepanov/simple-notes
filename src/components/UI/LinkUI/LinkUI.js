import './LinkUI.scss';

export default function LinkUI({linkObj}) {
    return (
        <a className={'linkUI'} key={linkObj.id}
           href={linkObj.href} target={linkObj.target || null}
        >{linkObj.title}</a>
    )
}
