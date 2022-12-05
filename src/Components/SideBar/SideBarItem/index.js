import styles from './SideBarItem.module.css';

const SideBarItem = props => {
    const {id, color, title, text, onEditItem, onDeleteItem} = props;
    const editItemHandler = () => {
        const itemToEdit = {
            id,
            colorToEdit: color,
            titleToEdit: title,
            textToEdit: text,
        }
        onEditItem(itemToEdit);
    }

    const deleteItemHandler = () => {
        onDeleteItem(id);
    }

    return (
        <div className={styles.sideBarItem}>
            <div className={styles.color} style={{ backgroundColor: color}}></div>
            <div className={styles.id}><span>#{id}</span></div>
            <div className={styles.content}>
                <div className={styles.title}>{title}</div>
                <div className={styles.text}>{text}</div>
            </div>
            <div className={styles.operations}>
                <div className={styles.edit} title='Edit' onClick={editItemHandler}>E</div>
                <div className={styles.delete} title='Delete' onClick={deleteItemHandler}>D</div>
            </div>
        </div>
    );
}

export default SideBarItem;
