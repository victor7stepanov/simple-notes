import './IndexPage.scss';
import {Routes, Route} from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Auth from '../components/pages/Auth/Auth';
import Notes from '../components/pages/Notes/Notes';
import Card from '../components/pages/Card/Card';
import Settings from '../components/pages/Settings/Settings';
import AboutApp from '../components/pages/AboutApp/AboutApp';

export default function IndexPage() {
    const signUpProps = {
        headerTitle: 'Sign up to Simple Notes',
        formProps: {
            inputItems: [
                {id: '#section-email-input', className: 'form__input', labelTitle: 'Email', type: 'email', placeholder: 'Enter email'},
                {id: '#section-password-input', className: 'form__input', labelTitle: 'Password', type: 'password', placeholder: 'Enter password'}
            ],
            buttonProps: {title: 'Sign up', type: 'submit'},
            linkProps: [{id: '1', className: 'button-link', title: 'Already have an account', type: 'button', isLink: true}]
        }
    };
    const loginProps = {
        headerTitle: 'Log in to Simple Notes',
        formProps: {
            inputItems: [
                {id: '#section-email-input', className: 'form__input', labelTitle: 'Email', type: 'email', placeholder: 'Enter email'},
                {id: '#section-password-input', className: 'form__input', labelTitle: 'Password', type: 'password', placeholder: 'Enter password'}
            ],
            buttonProps: {title: 'Sign up', type: 'submit'},
            linkProps: [{id: '1', className: 'button-link', title: 'Already have an account', type: 'button', isLink: true}]
        }
    }
    const notesProps = {
        headerTitle: 'Simple Notes',
        notes: [
            {id: '1', title: `Купить хлеб`},
            {id: '2', title: `Совещание в 20 часов`},
            {id: '3', title: `Книга Грокаем алгоритмы`}
        ],
        buttons: [
            {id: '1', title: 'Add note',
                name: 'addNote', backgroundColor: 'blue'},
            {id: '2', title: 'Edit active note',
                name: 'editNote', backgroundColor: 'light-blue'},
            {id: '3', title: 'Delete selected notes',
                name: 'deleteNote', backgroundColor: 'red'}
        ]
    };
    const deletedNotesProps = {
        headerTitle: 'Deleted notes',
        notes: [
            {id: '1', title: `Купить хлеб`},
            {id: '2', title: `Совещание в 20 часов`},
            {id: '3', title: `Книга Грокаем алгоритмы`}
        ],
        buttons: [
            {id: '1', title: 'Recover selected notes',
                name: 'recoverNotes', backgroundColor: 'light-blue'},
            {id: '2', title: 'Delete selected notes forever',
                name: 'deleteNotesForever', backgroundColor: 'red'}
        ]
    }
    const cardProps = {
        headerTitle: 'Card',
        userNames: [
            {id: '1n', title: 'Username', placeholder: 'Enter username', editableInput: true, boldInputFont: true},
            {id: '2n', title: 'First name', placeholder: 'Enter first name', editableInput: true, boldInputFont: true}
        ],
        userInfo: [
            {id: '1i', title: 'Date of birth', placeholder: 'Enter date of birth', editableInput: true},
            {id: '2i', title: 'City', placeholder: 'Enter city', editableInput: true},
            {id: '3i', title: 'Country', placeholder: 'Enter country', editableInput: true},
            {id: '4i', title: 'Registration date', value: '01.01.2022'}
        ],
        authorizationInfo: [
            {id: '1a', title: 'Email', value: 'bestuser@gmail.com'},
            {id: '2a', title: 'Latest authorization', value: '15:00 01.01.2022'}
        ]
    }
    const settingsProps = {
        headerTitle: 'Settings'
    }
    const aboutAppProps = {
        headerTitle: 'About app',
        devInfo: [
            {id: '1', title: 'Developer', value: 'Victor Stepanov', boldInputFont: true},
            {id: '2', title: 'Feedback email', inputLink: true, linkObj:
                    {href: 'mailto:victor7stepanov@ya.ru?subject=Simple notes feedback',
                        title: 'victor7stepanov@ya.ru',
                        target: '_blank'}
            }
        ],
        appInfo: [
            {id: '1', title: 'Version', value: '1.0.0'},
            {id: '2', title: 'Stack', value: 'React.js + Redux'}
        ]
    };

    const isAuth = false;

    return (
        <Routes>
            <Route path={'/'} element={<Layout isAuth={isAuth}/>} >
                { isAuth
                    ? <>
                        <Route index element={<Notes notesProps={notesProps}/>} />
                        <Route path={'deleted'} element={<Notes notesProps={deletedNotesProps}/>} />
                        <Route path={'card'} element={<Card cardProps={cardProps}/>} />
                        <Route path={'settings'} element={<Settings settingsProps={settingsProps}/>} />
                        <Route path={'about'} element={<AboutApp aboutAppProps={aboutAppProps} />} />
                    </>
                    : <>
                        <Route index element={<Auth authProps={signUpProps}/>} />
                        <Route path={'login'} element={<Auth authProps={loginProps}/>} />
                        <Route path={'about'} element={<AboutApp aboutAppProps={aboutAppProps}/>} />
                    </>
                }
            </Route>
        </Routes>
    )
}