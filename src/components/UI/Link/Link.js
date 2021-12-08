import './Link.scss';

export default function Link({link}) {
    return (
        <a className={'link'} key={link.id} href={link.href}>{link.title}</a>
    )
}