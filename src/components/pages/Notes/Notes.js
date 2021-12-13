import './Notes.scss';
import Button from '../../UI/Button/Button';
import Checkbox from '../../UI/Checkbox/Checkbox';

export default function Notes({notesProps}) {
    return (
        <section className={'section'}>
            <h1 className={'section__header'}>{notesProps.headerTitle}</h1>
            <div className={'notes'}>
                <div className={'notes__button-container'}>
                    { notesProps.buttons.map((button) => {
                        return (
                            <Button key={button.id} title={button.title}
                                    backgroundColor={button.backgroundColor}
                                    name={button.name}
                            />
                        )
                    }) }
                </div>
                <ul className={'notes__list'}>
                    { notesProps.notes.map((note) => {
                        return (
                            <li className={'notes__note'} key={note.id}>
                                <Checkbox checkbox={note} />
                            </li>
                        )
                    }) }
                </ul>
            </div>
        </section>
    )
}