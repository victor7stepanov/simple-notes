import './Layout.scss';
import {useState} from 'react';
import Menu from '../Menu/Menu';
import Modal from '../Modal/Modal';
import {Outlet} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Spinner from '../UI/Spinner/Spinner';

export default function Layout({isAuth}) {

    const menuItems = isAuth
    ? [
            {id: '1', title: 'Notes', className: 'menu__list-link', path: '/'},
            {id: '2', title: 'Deleted notes', className: 'menu__list-link', path: 'deleted'},
            {id: '3', title: 'Card', className: 'menu__list-link', path: 'card'},
            {id: '4', title: 'Settings', className: 'menu__list-link', path: 'settings'},
            {id: '5', title: 'About app', className: 'menu__list-link', path: 'about'},
            {id: '6', title: 'Exit', className: 'menu__list-link', path: '/'}
    ]
    : [
            {id: '1', title: 'Login', className: 'menu__list-link', path: '/'},
            {id: '2', title: 'Sign up', className: 'menu__list-link', path: 'signup'},
            {id: '3', title: 'About app', className: 'menu__list-link', path: 'about'}
    ]

    const [openedMenu, setOpenedMenu] = useState(false);
    const burgerHandler = () => setOpenedMenu(!openedMenu);
    const backdropMenuHandler = () => setOpenedMenu(!openedMenu);

    const [openedModal, setOpenedModal] = useState(false);
    const toggleModalHandler = () => setOpenedModal(!openedModal);
    const backdropModalHandler = () => setOpenedModal(!openedModal);

    const {loadingDataBase} = useSelector((state) => state.dataBase);

    return (
        <main className={'main'}>
            <button className={'main__burger'} onClick={burgerHandler}/>
            {openedMenu ? <div className={'main__backdrop'} onClick={backdropMenuHandler}/> : null}
            {openedModal ? <div className={'main__backdrop'} onClick={backdropModalHandler}/> : null}

            <Menu burgerHandler={burgerHandler} isOpen={openedMenu} menuItems={menuItems}/>
            { loadingDataBase ? <Spinner/> : <Outlet/>}
            <Modal headerTitle={'Change password'} isOpen={openedModal}
                   toggleModalHandler={toggleModalHandler}
            />
        </main>
    )
}