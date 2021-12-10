import './Button.scss';

export default function Button({title, type, backgroundColor}) {
    let buttonClassName = ['button'];
    switch (backgroundColor) {
        case 'light-blue':buttonClassName.push('button_background-color_light-blue');
            break;
        case 'red': buttonClassName.push('button_background-color_red');
            break;
        default: buttonClassName.push('button_background-color_blue');
    }

    return (
        <button className={buttonClassName.join(' ')} type={type}>{title}</button>
    )
}
