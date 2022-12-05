import styles from './SideBarItem.module.css';

const SideBarItem = props => {
    const editItemHandler = () => {
        const itemToEdit = {
            id: props.id,
            colorToEdit: props.color,
            titleToEdit: props.title,
            textToEdit: props.text,
        }
        props.onEditItem(itemToEdit);
    }
    const deleteItemHandler = () => {
        props.onDeleteItem(props.id);
    }

    return (
        <div className={styles.sideBarItem}>
            <div className={styles.color} style={{ backgroundColor: props.color}}></div>
            <div className={styles.id}><span>#{props.id}</span></div>
            <div className={styles.content}>
                <div className={styles.title}>{props.title}</div>
                <div className={styles.text}>{props.text}</div>
            </div>
            <div className={styles.operations}>
                <div className={styles.edit} title='Edit' onClick={editItemHandler}>E</div>
                <div className={styles.delete} title='Delete' onClick={deleteItemHandler}>D</div>
            </div>
        </div>
    );
}

export default SideBarItem;
