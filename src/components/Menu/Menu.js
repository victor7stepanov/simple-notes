import './Menu.scss';
import Button from '../UI/Button/Button';

export default function Menu({menuItems}) {
    return (
        <nav className={'menu'}>
            <ul className={'menu__list'}>
                {menuItems.map((item) => {
                    return (
                        <li className={'menu__list-item'} key={item.id}>
                            <Button className={'menu__list-link'} type={'button'}
                                    title={item.title} linkButton={true}
                            />
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}