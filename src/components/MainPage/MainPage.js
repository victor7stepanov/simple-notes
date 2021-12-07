import './MainPage.scss';
import Auth from '../pages/Auth/Auth';
import Menu from '../pages/Menu/Menu';
import Modal from '../pages/Modal/Modal';

export default function MainPage() {
    return (
        <main className={'main'}>
            <Menu menuItems={[
                {id: '1', title: 'Notes', href: '#'},
                {id: '2', title: 'Deleted notes', href: '#'},
                {id: '3', title: 'Card', href: '#'},
                {id: '4', title: 'Settings', href: '#'},
                {id: '5', title: 'About app', href: '#'},
                {id: '6', title: 'Exit', href: '#'},
            ]}/>
            <Auth
                headerTitle={'Log in to Simple Notes'}
                buttonTitle={'Login'}
                linkProps={[
                    {id: '1', title: 'Forgotten password', href: '#'},
                    {id: '2', title: 'Create new account', href: '#'}
                ]}
            />
            <Modal/>
        </main>
    )
}