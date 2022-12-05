import styles from './SideBar.module.css';
import SideBarItem from "./SideBarItem";

const SideBar = props => {
    const { sideBarItems, onEditItem, onDeleteItem } = props
    const editItemHandler = itemToEdit => {
        onEditItem(itemToEdit);
    }

    const deleteItemHandler = id => {
        onDeleteItem(id);
    }

    return (
        <div className={styles.sideBar}>
            {sideBarItems.map(item =>
                <SideBarItem
                    key={item.id}
                    id={item.id}
                    color={item.color}
                    title={item.title}
                    text={item.text}
                    onEditItem={editItemHandler}
                    onDeleteItem = {deleteItemHandler}
                />
            )}
        </div>
    )
}

export default SideBar;