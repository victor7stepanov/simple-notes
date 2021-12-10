import './MainPage.scss';
import Menu from '../components/Menu/Menu';
import Page from '../components/Page/Page';
import Modal from '../components/pages/Modal/Modal';
// import Auth from '../components/pages/Auth/Auth';
import Notes from '../components/pages/Notes/Notes';

export default function MainPage() {
    return (
        <main className="main">
            <Menu menuItems={[
                {id: '1', title: 'Notes', href: '#'},
                {id: '2', title: 'Deleted notes', href: '#'},
                {id: '3', title: 'Card', href: '#'},
                {id: '4', title: 'Settings', href: '#'},
                {id: '5', title: 'About app', href: '#'},
                {id: '6', title: 'Exit', href: '#'},
            ]}/>
            <Page headerTitle={'Deleted Notes'}>
                {/*<Auth/>*/}
                <Notes notes={[
                    {id: '1', title: `Купить хлеб`},
                    {id: '2', title: `Совещание в 20 часов`},
                    {id: '3', title: `Книга Грокаем алгоритмы`}
                ]} buttons={[
                    {id: '1', title: 'Recover selected notes',
                        name: 'edit', backgroundColor: 'light-blue'},
                    {id: '2', title: 'Delete selected notes forever',
                        name: 'edit', backgroundColor: 'red'}
                ]}/>
            </Page>
            <Modal headerTitle={'Change password'}/>
        </main>
    )
}