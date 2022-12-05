import styles from './CreateUpdateForm.module.css';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {ItemsValidationSchema} from "./ValidationSchema";

const CreateUpdateForm = props => {
    return (
        <Formik
            initialValues={props.initialValues}
            onSubmit={props.onSubmit}
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
                        {
                            props => {
                                return <div className={styles.error}>{props}</div>
                            }
                        }
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
                        {
                            props => {
                                return <div className={styles.error}>{props}</div>
                            }
                        }
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

export default CreateUpdateForm;