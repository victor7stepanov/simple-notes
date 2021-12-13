import './Menu.scss';
import {Link} from "react-router-dom";

export default function Menu({isOpen, menuItems, burgerHandler}) {
    return (
        <nav className={isOpen ? 'menu open' : 'menu'}>
            <button className={'close-button'} onClick={burgerHandler}/>
            <ul className={'menu__list'}>
                {menuItems.map((item) => {
                    return (
                        <li className={'menu__list-item'} key={item.id} onClick={burgerHandler}>
                            <Link to={item.path} className={'menu__list-link'}>{item.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}