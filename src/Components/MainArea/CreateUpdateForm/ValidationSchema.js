import * as yup from 'yup';

export const ItemsValidationSchema = yup.object({
    title: yup.string().required("title can not be empty"),
    text: yup.string().required('text can not be empty')
});