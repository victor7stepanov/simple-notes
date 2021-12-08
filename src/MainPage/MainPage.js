import Menu from '../components/Menu/Menu';
import Page from '../components/Page/Page';
import Auth from '../components/pages/Auth/Auth';
import Modal from '../components/pages/Modal/Modal';

export default function MainPage() {
    return (
        <>
            <Menu menuItems={[
                {id: '1', title: 'Notes', href: '#'},
                {id: '2', title: 'Deleted notes', href: '#'},
                {id: '3', title: 'Card', href: '#'},
                {id: '4', title: 'Settings', href: '#'},
                {id: '5', title: 'About app', href: '#'},
                {id: '6', title: 'Exit', href: '#'},
            ]}/>
            <Page headerTitle={'Log in to Simple Notes'}>
                <Auth/>
            </Page>
            <Modal headerTitle={'Change password'}/>
        </>
    )
}