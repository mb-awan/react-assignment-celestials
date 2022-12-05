import styles from './MainArea.module.css';
import CreateUpdateForm from "./CreateUpdateForm/CreateUpdateForm";

const MainArea = props => {
    // To get the values in case of editing existing item
    const {titleToEdit, colorToEdit, textToEdit} = props.itemToEdit;

    // In case of update form the values will be initialized with props.itemToEdit for prefilled form
    let initialValues = {
        title: titleToEdit ? titleToEdit : '',
        color: colorToEdit ? colorToEdit : '#470247',
        text: textToEdit ? textToEdit : ''
    }

    const createUpdateSubmitHandler = (values, {resetForm}) => {
        const newItem = {
            id: props.itemToEdit.id ? props.itemToEdit.id : Math.floor(1000 + Math.random() * 9000),
            ...values
        } // To create a new item with newly created id or updated object item with previous id
        props.onAddorUpdateItem(newItem);
        resetForm();
        // To Reset Form in case of Update Form
        if(props.itemToEdit.id){
            props.onUpdateReset();
        }
    }

    return (
        <div className={styles.mainArea}>
            <h1 className={styles.formHeading}> {props.itemToEdit.id ? 'Edit' : 'Add'} Items in the List</h1>
            <CreateUpdateForm initialValues={initialValues} onSubmit={createUpdateSubmitHandler}/>
        </div>
    )
}

export default MainArea;