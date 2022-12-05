import styles from './App.module.css';
import SideBar from "./Components/SideBar/SideBar";
import MainArea from "./Components/MainArea/MainArea";
import {useState} from "react";

function App() {
    const [items, setItems] = useState([]); // For List Items
    const [itemToEdit, setItemToEdit] = useState({}); // For Update Form Props

    const addAndUpdateItemHandler = newItem => {
        // It will add new Item and update items with newItem id is already in previous list.
        setItems(prevItems => {
            const itemAlready = prevItems.find(item => item.id === newItem.id);
            if (!itemAlready)
                return [...prevItems, newItem];
            const updatedItems = [...prevItems];
            updatedItems[prevItems.indexOf(itemAlready)] = newItem;

            return updatedItems;
        })
    }

    const editItemHandler = itemForEdit => {
        /* Set the props for form in Main Area
         and there values will be initialized for prefilled field in update form
        */
        setItemToEdit(itemForEdit);
    }

    const resetEditItem = () => {
        /*
            For resting the update Form prefilled values :
            1). On Submit Update
            2). On Deleting the Item whose values are in update Form
        */
        setItemToEdit({});
    }

    const deleteItem = id => {
        setItems(prevItems => {
            const newItems = [...prevItems];
            newItems.splice(newItems.findIndex(item => item.id === id), 1);
            return newItems;
        })
        resetEditItem();
    }

    return (
        <>
            {/*<h2 className={styles.appHeading}>Assignment 1</h2>*/}
            <div className={styles.appContent}>
                <SideBar
                    sideBarItems={items}
                    onEditItem={editItemHandler}
                    onDeleteItem = {deleteItem}
                />
                <MainArea
                    onAddorUpdateItem={addAndUpdateItemHandler}
                    itemToEdit={itemToEdit}
                    onUpdateReset={resetEditItem}
                />
            </div>
        </>
    );
}

export default App;
