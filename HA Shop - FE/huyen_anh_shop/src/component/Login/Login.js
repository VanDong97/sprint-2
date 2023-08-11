import React, {useEffect, useState} from "react";
import "../Login/login.css";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useNavigate} from "react-router";
import {postLogin} from "../../service/Service";
import * as Swal from "sweetalert2";

export function Login() {
    const navigate = useNavigate();
    const [failedAccount, setFailedAccount] = useState(null);

    useEffect(() => {
        document.title = "Đăng nhập"; // Thay đổi title
    }, []);

    if (sessionStorage.getItem("TOKEN")) {
        navigate('/');
        return null;
    }
    return (
        <>
            <Formik
                initialValues={{
                    username: "",
                    password: ""
                }}

                validationSchema={Yup.object().shape({
                    username: Yup.string().required("Vui lòng nhập tên tài khoản"),

                    password: Yup.string()
                        .required("Vui lòng nhập mật khẩu")
                })}

                onSubmit={(values) => {
                    postLogin(values)
                        .then((e) => {
                            console.log(e);
                            sessionStorage.setItem('TOKEN', e.accessToken);
                            sessionStorage.setItem('USERNAME', e.username);
                            sessionStorage.setItem('USERID', e.userId);
                            sessionStorage.setItem('roles', e.roles[0])
                            window.location.href = '/';

                        })
                        .catch(() => {
                                setFailedAccount("Tên đăng nhập hoặc mật khẩu không chính xác")
                            }
                        );
                }}
            >
                <section className="h-100 gradient-form" style={{backgroundColor: "#eee"}}>
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-xl-10">
                                <div className="card rounded-3 text-black">
                                    <div className="row g-0">
                                        <div className="col-lg-6">
                                            <div className="card-body p-md-5 mx-md-4">
                                                <div className="text-center">
                                                    <img
                                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                                        style={{width: 185}}
                                                        alt="logo"
                                                    />
                                                    <h4 className="mt-1 mb-5 pb-1">Chúng tôi là Huyền Anh Shop</h4>
                                                </div>
                                                <Form>
                                                    <div className="form-outline mb-4">
                                                        <Field
                                                            type="email"
                                                            id="form2Example11"
                                                            className="form-control"
                                                            placeholder="Số điện thoại hoặc Email"
                                                            name="username"
                                                        />
                                                        <label className="form-label" htmlFor="form2Example11">
                                                            Tên đăng nhập
                                                        </label>
                                                        <ErrorMessage name="username" className="text-danger col-12"
                                                                      component="span"/>
                                                    </div>
                                                    <div className="form-outline mb-4">
                                                        <Field
                                                            type="password"
                                                            id="form2Example22"
                                                            className="form-control"
                                                            name="password"
                                                        />
                                                        <label className="form-label" htmlFor="form2Example22">
                                                            Mật khẩu
                                                        </label>
                                                        <ErrorMessage name="password" className="text-danger col-12"
                                                                      component="span"/>
                                                                      <div>
                                                                          {failedAccount && (
                                                                              <span className="text-danger col-12">{failedAccount}</span>
                                                                          )}
                                                                      </div>
                                                    </div>
                                                    <div className="text-center pt-1 mb-5 pb-1">
                                                        <button
                                                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-1"
                                                            type="submit"
                                                        >
                                                            Đăng nhập
                                                        </button>
                                                        <a className="text-muted" href="">
                                                            Quên mật khẩu ?
                                                        </a>
                                                    </div>
                                                    <div
                                                        className="d-flex align-items-center justify-content-center pb-4">
                                                        <p className="mb-0 me-2">Bạn đã có tài khoản chưa ?</p>
                                                        <button type="button" className="btn btn-outline-danger">
                                                            Tạo tài khoản
                                                        </button>
                                                    </div>
                                                </Form>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                                <h4 className="mb-4">Chúng tôi không chỉ là một shop giày đơn giản</h4>
                                                <p className="small mb-0">
                                                    Mà còn 1 nơi để tôn vinh cá tính của các bạn lên bằng một cách khác
                                                    biệt về thẩm mỹ .
                                                    Bạn sẽ khó có nhiều thời gian để chăm chút cho sự lựa chọn giầy dép.
                                                    Có quá nhiều người nghĩ rằng giầy dép không quan trọng, nhưng toàn
                                                    bộ sự tinh tế của mỗi người toát ra chính từ đôi chân.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Formik>
        </>
    );
}