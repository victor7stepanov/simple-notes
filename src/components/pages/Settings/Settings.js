import './Settings.scss';
import Checkbox from '../../UI/Checkbox/Checkbox';

export default function Settings({settingsProps}) {
    return (
        <section className={'section'}>
            <h1 className={'section__header'}>{settingsProps.headerTitle}</h1>
            <div className={'settings'}>
                <div className={'settings__container'}>
                    <div className={'settings__inner'}>
                        <span className={'settings__theme-title'}>Theme</span>
                        <div className={'settings__theme-radio-inner'}>
                            <input className={'settings__theme-radio-input'} type={'radio'}
                                   name={'theme'} value={'light'} id={'#light'} checked={true}
                                   readOnly={true}
                            />
                            <label className={'settings__theme-radio-label'} htmlFor={'#light'}>Light</label>
                        </div>
                        <div className={'settings__theme-radio-inner'}>
                            <input className={'settings__theme-radio-input'} type={'radio'}
                                   name={'theme'} value={'dark'} id={'#dark'}
                            />
                            <label className={'settings__theme-radio-label'} htmlFor={'#dark'}>Dark</label>
                        </div>
                    </div>
                    <div className={'settings__inner'}>
                        <label className={'settings__font-size-label'}
                               htmlFor={'#font-size'}>Font size</label>
                        <select className={'settings__font-size-select'} name={'font-size'} id={'#font-size'}>
                            <option value={16}>16</option>
                            <option value={18}>18</option>
                            <option value={20}>20</option>
                        </select>
                    </div>
                    <Checkbox checkbox={{id: '#hide-deleted',
                        title: 'Do not save deleted notes and hide Deleted notes'}}/>
                </div>
            </div>
        </section>
    )
}