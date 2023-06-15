import * as yup from "yup";

export const schema = yup.object().shape({
    first_name: yup.string().required().label("Email or Username"),
    password: yup.string().required().label("Password")
});

export const fogotpasswordschema = yup.object().shape({
    email: yup.string().email().required().label("Email"),
});