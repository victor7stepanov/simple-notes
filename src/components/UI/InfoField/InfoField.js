import './InfoField.scss';
import LinkUI from '../LinkUI/LinkUI';

export default function InfoField({infoField, editableInput = false,
                                   inputType = 'text', boldInputFont = false,
                                   inputLink = false, linkObj = {}}) {

    const inputClassName = boldInputFont
        ? 'info-field__input bold-font'
        : 'info-field__input normal-font'

    return (
        <div className={'info-field'}>
            <label className={'info-field__label'} htmlFor={infoField.id}>
                {infoField.title}
            </label>
            { inputLink
                ? <LinkUI linkObj={linkObj}/>
                : <input className={inputClassName} type={inputType} value={infoField.value}
                         placeholder={infoField.placeholder} readOnly={!editableInput}
                         id={infoField.id}
                />
            }
        </div>
    )
}
