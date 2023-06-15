/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Row, Button } from 'antd';
import AuthSide from '../../../components/AuthSide';
import { Formik, Form, Field } from "formik";
import { TextField } from '../../../components/forms/TextField';
import { fogotpasswordschema } from '../../../heplers/validationSchema/authSchema'

function ForgotPassword() {
    const initialValues = {
        email: ""
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
                        <h2>Forgotten Password ?</h2>
                        <p>Enter your email to reset your password</p>

                        <div className="loginForm-Ctr">
                            <Formik
                                initialValues={initialValues}
                                enableReinitialize={true}
                                validationSchema={fogotpasswordschema}
                                onSubmit={(values) => {
                                    console.log('values', values);
                                }}
                            >
                                <Form>
                                    <Row gutter={[16, 32]}>
                                        <Col xs={24} sm={24} md={24} lg={24} xl={24} className="p-0">
                                            <Field
                                                name="email"
                                                component={TextField}
                                                placeholder="Email"
                                                type="text"
                                                required={true}
                                            />
                                        </Col>
                                    </Row>
                                    <div class="form-group d-flex flex-wrap justify-content-between align-items-center btnSection">
                                        <Link to='/'>
                                            Cancel
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

export default ForgotPassword