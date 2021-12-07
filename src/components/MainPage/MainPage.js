import './MainPage.scss';
import Auth from '../pages/Auth/Auth';

export default function MainPage() {
    return (
        <main className={'main'}>
            <div className={'main__burger-wrapper'}>
                <input className={'main__burger-input'} type='checkbox'/>
            </div>
            <Auth
                headerTitle={'Sign up to Simple Notes'}
                buttonTitle={'Sign up'}
                linkProps={[
                    {id: '1', title: 'Already have an account', href: '#'},
                    {id: '2', title: 'Already have an account', href: '#'}
                ]}
            />
        </main>
    )
}