import './Checkbox.scss';

export default function Checkbox({checkbox}) {
    return (
        <>
            <input className={'checkbox'} type='checkbox' id={`#note${checkbox.id}`}/>
            <label className={'checkbox__label'}
                   htmlFor={`#note${checkbox.id}`}>{checkbox.title}
            </label>
        </>
    )
}
