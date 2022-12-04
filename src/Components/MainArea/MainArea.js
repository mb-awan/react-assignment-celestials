import styles from './MainArea.module.css';
import {Field, Form, Formik} from "formik";

const MainArea = props => {
    // To get the values in case of editing existing item
    const {titleToEdit, colorToEdit, textToEdit} = props.itemToEdit;


    let initialValues = {
        title: titleToEdit ? titleToEdit : '',
        color: colorToEdit ? colorToEdit : '#470247',
        text: textToEdit ? textToEdit : ''
    }

    const submitHandler = (values, {resetForm}) => {
        // console.log(values)
        const newItem = {
            id: props.itemToEdit.id ? props.itemToEdit.id : Math.floor(1000 + Math.random() * 9000),
            ...values
        }
        props.onAddItem(newItem);
        resetForm();
        if(props.itemToEdit){
            props.onUpdateReset();
        }
    }


    return (
        <div className={styles.mainArea}>
            <h1 className={styles.formHeading}> Add Items to the List</h1>
            <Formik initialValues={initialValues} onSubmit={submitHandler} enableReinitialize={true}>
                <Form>
                    <div>
                        <label htmlFor='title'>title:</label>
                        <Field
                            id='title'
                            name='title'
                        />
                    </div>
                    <div>
                        <label htmlFor='color'>color:</label>
                        <Field
                            id='color'
                            name='color'
                            type='color'
                        />
                    </div>
                    <div>
                        <label htmlFor='text'>text:</label>
                        <Field
                            id='text'
                            name='text'
                            as='textarea'
                        />
                    </div>
                    <div className={styles.formControls}>
                        <button
                            type='submit'
                        >Save
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default MainArea;