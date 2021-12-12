import './Layout.scss';
import {useState} from 'react';
import Menu from '../Menu/Menu';
import Page from '../Page/Page';
import Auth from '../pages/Auth/Auth';
import Modal from '../Modal/Modal';

export default function Layout() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const burgerHandler = () => setToggleMenu(!toggleMenu);
    const backdropMenuHandler = () => setToggleMenu(!toggleMenu);

    const [modal, setModal] = useState(false);
    const buttonHandler = () => setModal(!modal);
    const backdropModalHandler = () => setModal(!modal);

    return (
        <main className={'main'}>
            <button className={'main__burger'} onClick={burgerHandler}/>
            {toggleMenu ? <div className={'main__backdrop'} onClick={backdropMenuHandler}/> : null}
            {modal ? <div className={'main__backdrop'} onClick={backdropModalHandler}/> : null}

            <Menu burgerHandler={burgerHandler} open={toggleMenu} menuItems={[
                {id: '1', title: 'Notes', className: 'menu__list-link'},
                {id: '2', title: 'Deleted notes', className: 'menu__list-link'},
                {id: '3', title: 'Card', className: 'menu__list-link'},
                {id: '4', title: 'Settings', className: 'menu__list-link'},
                {id: '5', title: 'About app', className: 'menu__list-link'},
                {id: '6', title: 'Exit', className: 'menu__list-link'},
            ]}/>
            <Page headerTitle={'Log in to Simple Note'}>
                <Auth buttonHandler={buttonHandler}/>
                {/*<Notes notes={[*/}
                {/*    {id: '1', title: `Купить хлеб`},*/}
                {/*    {id: '2', title: `Совещание в 20 часов`},*/}
                {/*    {id: '3', title: `Книга Грокаем алгоритмы`}*/}
                {/*]} buttons={[*/}
                {/*    {id: '1', title: 'Recover selected notes',*/}
                {/*        name: 'edit', backgroundColor: 'light-blue'},*/}
                {/*    {id: '2', title: 'Delete selected notes forever',*/}
                {/*        name: 'edit', backgroundColor: 'red'}*/}
                {/*]}/>*/}
                {/*<Card infoFieldProps={{*/}
                {/*    userNames: [*/}
                {/*        {id: '1n', title: 'Username', placeholder: 'Enter username', editableInput: true, boldInputFont: true},*/}
                {/*        {id: '2n', title: 'First name', placeholder: 'Enter first name', editableInput: true, boldInputFont: true}*/}
                {/*    ],*/}
                {/*    userInfo: [*/}
                {/*        {id: '1i', title: 'Date of birth', placeholder: 'Enter date of birth', editableInput: true},*/}
                {/*        {id: '2i', title: 'City', placeholder: 'Enter city', editableInput: true},*/}
                {/*        {id: '3i', title: 'Country', placeholder: 'Enter country', editableInput: true},*/}
                {/*        {id: '4i', title: 'Registration date', value: '01.01.2022'}*/}
                {/*    ],*/}
                {/*    authorizationInfo: [*/}
                {/*        {id: '1a', title: 'Email', value: 'bestuser@gmail.com'},*/}
                {/*        {id: '2a', title: 'Latest authorization', value: '15:00 01.01.2022'}*/}
                {/*    ]*/}
                {/*}}/>*/}
                {/*<AboutApp infoFieldProps={{*/}
                {/*    devInfo: [*/}
                {/*        {id: '1', title: 'Developer', value: 'Victor Stepanov', boldInputFont: true},*/}
                {/*        {id: '2', title: 'Feedback email', inputLink: true, linkObj:*/}
                {/*                {href: 'mailto:victor7stepanov@ya.ru?subject=Simple notes feedback',*/}
                {/*                 title: 'victor7stepanov@ya.ru',*/}
                {/*                 target: '_blank'}*/}
                {/*        }*/}
                {/*    ],*/}
                {/*    appInfo: [*/}
                {/*        {id: '1', title: 'Version', value: '1.0.0'},*/}
                {/*        {id: '2', title: 'Stack', value: 'React.js + Redux'}*/}
                {/*    ]*/}
                {/*}} />*/}
                {/*<Settings/>*/}
            </Page>
            <Modal headerTitle={'Change password'} open={modal}/>
        </main>
    )
}