import './Notes.scss';
import Button from '../../UI/Button/Button';
import Checkbox from '../../UI/Checkbox/Checkbox';

export default function Notes({notes, buttons}) {
    return (
        <section className={'notes'}>
            <div className={'notes__button-container'}>
                { buttons.map((button) => {
                    return (
                        <Button key={button.id} title={button.title}
                                backgroundColor={button.backgroundColor}
                                name={button.name}
                        />
                    )
                }) }
            </div>
            <ul className={'notes__list'}>
                { notes.map((note) => {
                    return (
                        <li className={'notes__note'} key={note.id}>
                            <Checkbox checkbox={note} />
                        </li>
                    )
                }) }
            </ul>
        </section>
    )
}