import './AboutApp.scss';
import InfoField from "../../UI/InfoField/InfoField";

export default function AboutApp({infoFieldProps}) {
    return (
        <section className={'about-app'}>
            <div className={'about-app__description'}>
                <h3 className={'about-app__description-title'}>App description</h3>
                <p className={'about-app__description-paragraph'}>
                    Simple Notes application was created for solution of making and saving a lot of short notes in the one simple and fast app.
                </p>
                <p className={'about-app__description-paragraph'}>
                    Thanks for using!
                </p>
            </div>
            <div className={'about-app__dev'}>
                <img className={'about-app__dev-avatar'}
                     src={`${window.location.origin}/img/dev_avatar.png`}
                     alt="Developer avatar"/>
                <div className={'about-app__dev-info-container'}>
                    { infoFieldProps.devInfo.map((info) => {
                        return (
                            <InfoField infoField={info} key={info.id}
                                       boldInputFont={info.boldInputFont}
                                       inputLink={info.inputLink} linkObj={info.linkObj}
                            />
                        )
                    })}
                </div>
            </div>
            <div className={'about-app__info'}>
                <h3 className={'about-app__info-title'}>App information</h3>
                <div className={'about-app__info-container'}>
                    { infoFieldProps.appInfo.map((info) => {
                        return <InfoField infoField={info} key={info.id}/>
                    })}
                </div>
            </div>
        </section>
    )
}