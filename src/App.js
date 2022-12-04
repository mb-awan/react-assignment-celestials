import styles from './App.module.css';
import SideBar from "./Components/SideBar/SideBarList/SideBar";
import MainArea from "./Components/MainArea/MainArea";
import {useState} from "react";

function App() {
    const [items, setItems] = useState([]);
    const [itemToEdit, setItemToEdit] = useState({});

    const addItemHandler = newItem => {
        setItems(prevItems => {
            const itemAlready = prevItems.find(item => item.id === newItem.id);
            if(!itemAlready)
                return [...prevItems, newItem];
            const updatedItems = [...prevItems];
            updatedItems[prevItems.indexOf(itemAlready)] = newItem;

            return updatedItems;

        })
    }

    const editItemHandler = itemForEdit => {
        setItemToEdit(itemForEdit);
    }

    const resetEditItem = () => {
        setItemToEdit({});
    }

    const deleteItem = id => {
        setItems(prevItems => {
            const newItems = [...prevItems];
            newItems.splice(newItems.findIndex(item => item.id === id),1);
            return newItems;
        })
    }

    return (
        <>
            <h2 className={styles.appHeading}>Assignment 1</h2>
            <div className={styles.appContent}>
                <SideBar
                    sideBarItems={items}
                    onEditItem={editItemHandler}
                    onDeleteItem = {deleteItem}
                />
                <MainArea
                    onAddItem={addItemHandler}
                    itemToEdit={itemToEdit}
                    onUpdateReset={resetEditItem}
                />
            </div>
        </>
    );
}

export default App;
