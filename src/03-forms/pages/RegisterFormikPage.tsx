import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

import '../styles/styles.css';


export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                }}
                onSubmit={ ( values ) => {
                    console.log( values );
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                                    .max(15, 'Debe de tener 15 caracteres o menos')
                                    .min(2, 'Debe de tener 2 caracteres o más')
                                    .required('Requerido'),
                        email: Yup.string()
                                    .email('El correo no tiene un formato válido')
                                    .required('Requerido'),
                        password1: Yup.string()
                                        .min(6, 'Debe de tener 6 caracteres o más')
                                        .required('Requerido'),
                        password2: Yup.string()
                                        .oneOf([Yup.ref('password1') ], 'Las contraseñas deben de ser iguales')
                                        .required('Requerido')
                    })
                }
            >

                {( {handleReset} ) => (
                    <Form>
                        <MyTextInput
                            label="Nombre"
                            name="name"
                            placeholder="John"
                            type="text"
                        />

                        <MyTextInput
                            label="Email"
                            name="email"
                            placeholder="john@google.com"
                            type="email"
                        />

                        <MyTextInput
                            label="Password"
                            name="password1"
                            placeholder="******"
                            type="password"
                        />

                        <MyTextInput
                            label="Confirme Password"
                            name="password2"
                            placeholder="******"
                            type="password"
                        />

                        <button type="submit">Registrar</button>

                        <button type="button" onClick={ handleReset }>Reset Form</button>
                    </Form>
                    )
                }
            </Formik>
        </div>
    )
}
