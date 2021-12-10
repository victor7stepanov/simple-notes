import './Card.scss';
import InfoField from '../../UI/InfoField/InfoField';
import Button from '../../UI/Button/Button';

export default function Card({infoFieldProps}) {
    return (
        <section className={'card'}>
            <div className={'card__user-name'}>
                <img className={'card__user-name-avatar'}
                     src={`${window.location.origin}/img/default_user_avatar.svg`}
                     alt="User avatar"/>
                <div className={'card__user-name-container'}>
                    { infoFieldProps.userNames.map((userName) => {
                        return (
                            <InfoField infoField={userName} key={userName.id}
                                       editableInput={userName.editableInput}
                                       boldInputFont={userName.boldInputFont}
                            />
                        )
                    })}
                </div>
            </div>
            <div className={'card__user-info'}>
                <h3 className={'card__user-info-title'}>User information</h3>
                <div className={'card__user-info-container'}>
                    { infoFieldProps.userInfo.map((info) => {
                        return (
                            <InfoField infoField={info} key={info.id}
                                       editableInput={info.editableInput}
                            />
                        )
                    })}
                </div>
            </div>
            <div className={'card__user-auth'}>
                <div className={'card__user-auth-container'}>
                    <h3 className={'card__user-auth-title'}>Authorization info</h3>
                    { infoFieldProps.authorizationInfo.map((info) => {
                        return <InfoField infoField={info} key={info.id} />
                    }) }
                </div>
                <div className={'card__user-auth-container'}>
                    <Button title={'Change email'} />
                    <Button title={'Change password'} />
                    <Button title={'Delete account'} backgroundColor={'red'} />
                </div>
            </div>
        </section>
    )
}