import './IndexPage.scss';
import {Routes, Route} from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Auth from '../components/pages/Auth/Auth';
import Notes from '../components/pages/Notes/Notes';
import Card from '../components/pages/Card/Card';
import Settings from '../components/pages/Settings/Settings';
import AboutApp from '../components/pages/AboutApp/AboutApp';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {toggleAuth} from '../redux/authSlice';
import {getDataBase} from '../redux/dataBaseSlice';
import {setNotes} from '../redux/notesSlice';

export default function IndexPage() {

    const [emailInput, setEmailInput] = useState('');
    const loginEmailHandler = (event) => setEmailInput(event.target.value);

    const [passwordInput, setPasswordInput] = useState('');
    const loginPasswordHandler = (event) => setPasswordInput(event.target.value);

    const dispatch = useDispatch();
    const {isAuth} = useSelector((state) => state.auth);
    const {dataBase} = useSelector((state) => state.dataBase);

    useEffect(() => {
        dispatch(getDataBase());
    }, []);


    const loginProps = {
        headerTitle: 'Log in to Simple Notes',
        formProps: {
            inputItems: [
                {id: '#section-email-input', className: 'form__input', labelTitle: 'Email', type: 'email', placeholder: 'Enter email', handler: loginEmailHandler},
                {id: '#section-password-input', className: 'form__input', labelTitle: 'Password', type: 'password', placeholder: 'Enter password', handler: loginPasswordHandler}
            ],
            buttonProps: {title: 'Login', type: 'submit'},
            linkProps: [{id: '1', className: 'button-link', path: 'signup', title: 'Create new account', type: 'button', isLink: true}]
        }
    }
    const signUpProps = {
        headerTitle: 'Sign up to Simple Notes',
        formProps: {
            inputItems: [
                {id: '#section-email-input', className: 'form__input', labelTitle: 'Email', type: 'email', placeholder: 'Enter email'},
                {id: '#section-password-input', className: 'form__input', labelTitle: 'Password', type: 'password', placeholder: 'Enter password'}
            ],
            buttonProps: {title: 'Sign up', type: 'submit'},
            linkProps: [{id: '1', className: 'button-link', path: '/', title: 'Already have an account', type: 'button', isLink: true}]
        }
    };

    const notesHeaderTitle = 'Simple Notes';
    const notesButtons = [
        {id: '1', title: 'Add note',
            name: 'addNote', backgroundColor: 'blue'},
        {id: '2', title: 'Edit active note',
            name: 'editNote', backgroundColor: 'light-blue'},
        {id: '3', title: 'Delete selected notes',
            name: 'deleteNote', backgroundColor: 'red'}
    ];
    const {notes} = useSelector((state) => state.notes);

    const deletedNotesHeaderTitle = 'Deleted notes';
    const deletedNotesButtons = [
        {id: '1', title: 'Recover selected notes',
            name: 'recoverNotes', backgroundColor: 'light-blue'},
        {id: '2', title: 'Delete selected notes forever',
            name: 'deleteNotesForever', backgroundColor: 'red'}
    ];

    const cardProps = {
        headerTitle: 'Card',
        userNames: [
            {id: '1n', title: 'Username', placeholder: 'Enter username', editableInput: true, boldInputFont: true},
            {id: '2n', title: 'First name', placeholder: 'Enter first name', editableInput: true, boldInputFont: true}
        ],
        userInfo: [
            {id: '1i', title: 'Birth date', placeholder: 'Enter date of birth', editableInput: true},
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

    const loginSubmitHandler = (event) => {
        event.preventDefault();

        let authUserId = null;

        const foundUser = dataBase.users.find((user) => {
            authUserId = user.id;
            return user.email === emailInput && user.password === passwordInput
        });

        if (foundUser) {
            const authUserNotes = dataBase.notes.filter((item) => {
                return item.userId === authUserId;
            })
            authUserNotes && dispatch(setNotes(authUserNotes));
            dispatch(toggleAuth());
        }
    }

    const signupSubmitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <Routes>
            <Route path={'/'} element={<Layout isAuth={isAuth}/>} >
                { isAuth
                    ? <>
                        <Route index element={<Notes headerTitle={notesHeaderTitle} buttons={notesButtons} notes={notes} />} />
                        <Route path={'deleted'} element={<Notes headerTitle={deletedNotesHeaderTitle} buttons={deletedNotesButtons}/>} />
                        <Route path={'card'} element={<Card cardProps={cardProps}/>} />
                        <Route path={'settings'} element={<Settings settingsProps={settingsProps}/>} />
                        <Route path={'about'} element={<AboutApp aboutAppProps={aboutAppProps} />} />
                    </>
                    : <>
                        <Route index element={<Auth authProps={loginProps} submitHandler={loginSubmitHandler}/>} />
                        <Route path={'signup'} element={<Auth authProps={signUpProps} submitHandler={signupSubmitHandler}/>} />
                        <Route path={'about'} element={<AboutApp aboutAppProps={aboutAppProps}/>} />
                    </>
                }
            </Route>
        </Routes>
    )
}