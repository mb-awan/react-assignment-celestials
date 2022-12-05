import styles from './SideBar.module.css';
import SideBarItem from "./SideBarItem/SideBarItem";

const SideBar = props => {
    const editItemHandler = itemToEdit => {
        props.onEditItem(itemToEdit);
    }

    const deleteItemHandler = id => {
        props.onDeleteItem(id);
    }

    return (
        <div className={styles.sideBar}>
            {props.sideBarItems.map(item =>
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