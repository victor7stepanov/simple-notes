import './Button.scss';

export default function Button({title}) {
    return (
        <button className={'button'} type={'submit'}>{title}</button>
    )
}
