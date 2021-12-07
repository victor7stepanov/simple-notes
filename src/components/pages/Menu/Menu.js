import './Menu.scss';

export default function Menu({menuItems}) {
    return (
        <nav className={'menu'}>
            <ul className={'menu__list'}>
                {menuItems.map((item) => {
                    return (
                        <li className={'menu__list-item'} key={item.id}>
                            <a className={'menu__list-link'} href={item.href}>{item.title}</a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}