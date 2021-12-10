import './Link.scss';

export default function Link({linkObj}) {
    return (
        <a className={'link'} key={linkObj.id}
           href={linkObj.href}>{linkObj.title}
        </a>
    )
}
