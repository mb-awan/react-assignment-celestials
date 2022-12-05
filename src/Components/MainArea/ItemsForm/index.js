import styles from './ItemsForm.module.css';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {ItemsValidationSchema} from "./ValidationSchema";

const ItemsForm = props => {
    const { initialValues, onSubmit} = props;

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            enableReinitialize={true}
            validationSchema={ItemsValidationSchema}
        >
            <Form>
                <div>
                    <label htmlFor='title'>title:</label>
                    <Field
                        id='title'
                        name='title'
                    />
                    <ErrorMessage name='title'>
                        {props => <div className={styles.error}>{props}</div>}
                    </ErrorMessage>
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
                    <ErrorMessage name='text'>
                        {props => <div className={styles.error}>{props}</div>}
                    </ErrorMessage>
                </div>

                <div>
                    <button
                        type='submit'
                    >Save
                    </button>
                </div>
            </Form>
        </Formik>
    );
}

export default ItemsForm;