import './Notes.scss';
import Button from '../../UI/Button/Button';
import Checkbox from '../../UI/Checkbox/Checkbox';

export default function Notes({headerTitle, buttons, notes}) {
    return (
        <section className={'section'}>
            <h1 className={'section__header'}>{headerTitle}</h1>
            <div className={'notes'}>
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
                    { notes
                        ? notes.map((note) => {
                                return (
                                    <li className={'notes__note'} key={note.id}>
                                        <Checkbox checkbox={note} />
                                    </li>
                                )
                              })
                        : <p>Заметок пока нет</p>
                    }
                </ul>
            </div>
        </section>
    )
}