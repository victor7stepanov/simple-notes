import './MainPage.scss';
import Menu from '../components/Menu/Menu';
import Page from '../components/Page/Page';
import Modal from '../components/Modal/Modal';
// import Auth from '../components/pages/Auth/Auth';
// import Notes from '../components/pages/Notes/Notes';
// import Card from '../components/pages/Card/Card';
// import AboutApp from '../components/pages/AboutApp/AboutApp';
import Settings from '../components/pages/Settings/Settings';

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
            <Page headerTitle={'Settings'}>
                {/*<Auth/>*/}
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
                {/*        {id: '1', title: 'Username', placeholder: 'Enter username', editableInput: true, boldInputFont: true},*/}
                {/*        {id: '2', title: 'First name', placeholder: 'Enter first name', editableInput: true, boldInputFont: true}*/}
                {/*    ],*/}
                {/*    userInfo: [*/}
                {/*        {id: '1', title: 'Date of birth', placeholder: 'Enter date of birth', editableInput: true},*/}
                {/*        {id: '2', title: 'City', placeholder: 'Enter city', editableInput: true},*/}
                {/*        {id: '3', title: 'Country', placeholder: 'Enter country', editableInput: true},*/}
                {/*        {id: '4', title: 'Registration date', value: '01.01.2022'}*/}
                {/*    ],*/}
                {/*    authorizationInfo: [*/}
                {/*        {id: '1', title: 'Email', value: 'bestuser@gmail.com'},*/}
                {/*        {id: '2', title: 'Latest authorization', value: '15:00 01.01.2022'}*/}
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
                <Settings/>
            </Page>
            <Modal headerTitle={'Change password'}/>
        </main>
    )
}