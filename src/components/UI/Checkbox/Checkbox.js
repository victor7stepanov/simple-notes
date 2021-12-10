import './Checkbox.scss';

export default function Checkbox({checkbox}) {
    return (
        <div className={'checkbox'}>
            <input className={'checkbox__input'} type='checkbox' id={`#note${checkbox.id}`}/>
            <label className={'checkbox__label'}
                   htmlFor={`#note${checkbox.id}`}>{checkbox.title}
            </label>
        </div>
    )
}
