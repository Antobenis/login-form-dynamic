/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Row, Divider, Button } from 'antd';
import AuthSide from '../../../components/AuthSide';
import { google_icon, apple_icon } from '../../../helpers/images';
import ImageComponent from '../../../components/image';
import { Formik, Form, Field } from "formik";
import { TextField } from '../../../components/forms/TextField';
import { PasswordField } from '../../../components/forms/PasswordField';
import { schema } from '../../../heplers/validationSchema/authSchema'

function Login() {
    const initialValues = {
        first_name: "",
        password: ""
    };
    return (
        <Row gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
        }}>
            <Col className="gutter-row p-0" span={9}>
                <AuthSide />
            </Col>
            <Col className="gutter-row" span={15}>
                <div className='authRightSide'>
                    <div className='text-right'>
                        <span>
                            Don't have an account yet?
                        </span>
                        <Link> Sign Up!</Link>
                    </div>
                    <div className='text-center authInnerForm'>
                        <h2>Login Account</h2>
                        <p>Enter your username and password</p>
                        <div>
                            <a className='btn btn-flex social-signin'>
                                <ImageComponent src={google_icon} alt="google-icon" width="20" />
                                Sign in with Google
                            </a>
                            <a className='btn btn-flex social-signin'>
                                <ImageComponent src={apple_icon} alt="google-icon" width="20" />
                                Sign in with Apple
                            </a>
                        </div>
                        <Divider plain>Or with email</Divider>

                        <div className="loginForm-Ctr">
                            <Formik
                                initialValues={initialValues}
                                enableReinitialize={true}
                                validationSchema={schema}
                                onSubmit={(values) => {
                                    console.log('values', values);
                                }}
                            >
                                <Form>
                                    <Row gutter={[16, 32]}>
                                        <Col xs={24} sm={24} md={24} lg={24} xl={24} className="p-0">
                                            <Field
                                                name="first_name"
                                                component={TextField}
                                                placeholder="Email"
                                                type="text"
                                                required={true}
                                            />
                                        </Col>

                                        <Col xs={24} sm={24} md={24} lg={24} xl={24} className="p-0">
                                            <Field
                                                name="password"
                                                component={PasswordField}
                                                placeholder="Password"
                                                type="password"
                                                required={true}
                                            />
                                        </Col>
                                    </Row>
                                    <div class="form-group d-flex flex-wrap justify-content-between align-items-center btnSection">
                                        <Link to='forgot-password'>
                                            Forgot Password
                                        </Link>
                                        <Button type="primary" htmlType="submit" className='primaryButton'>
                                            Submit
                                        </Button>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default Login