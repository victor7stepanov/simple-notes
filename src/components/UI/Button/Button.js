import './Button.scss';

export default function Button({className = 'button', title, type,
                                backgroundColor, linkButton = false,
                                id, toggleModalHandler}) {

    let buttonClassName = ['button'];
    switch (backgroundColor) {
        case 'light-blue':buttonClassName.push('button_background-color_light-blue');
            break;
        case 'red': buttonClassName.push('button_background-color_red');
            break;
        default: buttonClassName.push('button_background-color_blue');
    }

    if (linkButton) {
        return (
            <button className={'button-link'} type={type}
                    id={id} onClick={toggleModalHandler}
            >{title}</button>
        )
    }

    return (
        <button className={buttonClassName.join(' ')} type={type}
        >{title}</button>
    )
}
