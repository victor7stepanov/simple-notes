import './Menu.scss';

export default function Menu({open, menuItems, burgerHandler}) {
    return (
        <nav className={open ? 'menu open' : 'menu'}>
            <button className={'menu__close'} onClick={burgerHandler}/>
            <ul className={'menu__list'}>
                {menuItems.map((item) => {
                    return (
                        <li className={'menu__list-item'} key={item.id}>
                            <a className={'menu__list-link'} href={'#1'}>{item.title}</a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}