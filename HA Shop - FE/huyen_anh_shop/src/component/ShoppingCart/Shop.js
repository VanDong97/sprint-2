import "../Home/home.css";
import React, {useContext, useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import {Link,NavLink} from "react-router-dom";
import {useNavigate} from "react-router";
import * as UserService from "../../service/userService";
import {QuantityContext} from "./QuantityContext";
import * as Swal from "sweetalert2";
import axios from "axios";
import * as productService from "../../service/productService";
import {search} from "../../service/productService";


export function Shop() {

    const [productType, setProductType] = useState([])
    const [product, setProduct] = useState([]);
    const [itemsToShow, setItemsToShow] = useState(8);
    const [itemsPerLoad, setItemsPerLoad] = useState(4);
    const {iconQuantity, setIconQuantity} = useContext(QuantityContext)
    const navigate = useNavigate();
    const [userId, setUserId] = useState(0);
    const username = sessionStorage.getItem('USERNAME');
    const [amount, setAmount] = useState(1);
    const [productName, setProductName] = useState("");


    useEffect(() => {
        document.title = "Sản Phẩm"; // Thay đổi title
    }, []);

    useEffect(() => {
        (async () => {
            const res = await productService.search(productName);
            setProduct(res);
        })()
    }, [productName])

    useEffect(() => {
        const getUserName = async () => {
            const rs = await UserService.findUserName(username);
            setUserId(rs)
        }
        getUserName();
    }, []);

    const handleDisplayByType = async (type) => {
        const res = await productService.getAllProductByType(type);
        setProduct(res);
    };

    useEffect(() => {
        const showProductType = async () => {
            const rs = await productService.findProductType();
            setProductType(rs)
        }
        showProductType()

    }, []);
    const handleAllProduct = async () => {
        const re = await productService.findAllProduct();
        setProduct(re);
    }

    useEffect(() => {
        const showList = async () => {
            const rs = await productService.findAllProduct();
            setProduct(rs)
        }
        showList()
    }, []);
    const handleLoadMore = () => {
        setItemsToShow(prevItems => prevItems + itemsPerLoad);
    };

    const addToCart = (productId, item) => {
        if (!username) {
            Swal.fire({
                icon: 'error',
                title: 'Đăng nhập để xem giỏ hàng',
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/login')
        } else {
            const apiUrl = `http://localhost:8080/v2/cart/addToCart/${userId}/${productId}/${amount}`;
            setIconQuantity(iconQuantity + 1);
            const config = {
                headers: {
                    'Authorization': 'Bearer ' + sessionStorage.getItem("TOKEN"),
                },
            };
            axios.get(apiUrl, config)
                .then(response => {
                    Swal.fire({
                        title: 'Thông báo ',
                        text: 'Thêm vào giỏ hàng thành công ',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        timer : 1500
                    });
                })
                .catch(error => {
                    console.error('Lỗi khi thêm vào giỏ hàng :', error.response);
                });
        }
        ;
    }

    const handleAddToCartClick = (productId) => {
        addToCart(productId);
    };
    const search = (value) => {
        setProductName(value.productName);
    };

    if (!product) {
        return null
    }

    return (
        <>
            <div className="row">
                <div className="col-3">
                    <h4 className="position-relative text-uppercase mb-3 container-fluid pt-5 pb-5">
                        <span className="bg-secondary pr-3">Loại sản phẩm</span>
                    </h4>
                    <div className="bg-light p-4 ">
                        <Formik
                            initialValues={{
                                productName: "",
                            }}
                            onSubmit={(value) => {
                                search(value);
                            }}
                        >
                            <Form className="d-flex m-1">
                                <Field
                                    style={{
                                        width: "18vw",
                                        marginBottom: "20px",
                                    }}
                                    className="form-control me-3"
                                    type="text"
                                    placeholder="Tìm kiếm theo tên sản phẩm"
                                    aria-label="Search"
                                    name="productName"
                                />
                                <button
                                    className="btn btn-outline-success"
                                    style={{
                                        marginBottom: "20px",
                                        width: "50px",
                                    }}
                                    type="submit"
                                >
                                    <i className="bi bi-search"/>
                                </button>
                            </Form>
                        </Formik>
                        <Link onClick={() => handleAllProduct()}>
                            <i className="bx bx-home-alt"></i>
                            <h5>Toàn bộ sản phẩm</h5>
                        </Link>
                        {productType.map((value, index) => {
                            return (
                                <div className="" key={index}>
                                    <div>
                                        <div className="">
                                            <div>
                                                <Link
                                                    onClick={() => handleDisplayByType(value.productTypeId)}>
                                                    <i className="bx bx-home-alt"></i>
                                                    <h5>{value.productTypeName}</h5>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="col-9">

                    <div className="container-fluid pt-5 pb-3">
                        <h2 className=" position-relative text-uppercase mx-xl-5 mb-4">
                            <span className="bg-secondary pr-3">Sản Phẩm</span>
                        </h2>
                        {product?.length === 0 && productName !== "" ? (
                            <div colSpan="10">
                                <h3 className={"text-danger text-center my-3"}>
                                    Sản phẩm không tồn tại
                                </h3>
                            </div>
                        ) : (
                            <div className="row px-xl-5">
                                {product?.slice(0, itemsToShow)?.map((value, index) => (
                                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={index}>
                                        <div className="product-item bg-light mb-4">
                                            <div className="product-img position-relative overflow-hidden">
                                                <img className="img-fluid w-100"
                                                     alt="" src={value.image}/>
                                                <div className="product-action">
                                                    <a className="btn btn-outline-dark btn-square"
                                                       onClick={() => handleAddToCartClick(value.productId)}>
                                                        <i className="bi bi-cart4"></i>
                                                    </a>
                                                    <a className="btn btn-outline-dark btn-square">
                                                        <Link to={`/detail/${value.productId}`}>
                                                            <i
                                                                className="bi bi-info-square"
                                                            />
                                                        </Link>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="text-center py-3">
                                                <a className="h6 text-decoration-none text-truncate">
                                                    {value.productName}
                                                </a>
                                                <div className="d-flex align-items-center justify-content-center mt-2">
                                                    <h5 style={{fontSize: "15px"}}>{(+value?.price).toLocaleString()} VND</h5>
                                                    <h6 className="text-muted ml-2">
                                                        <del style={{color: "red"}}>2.100.000 VND</del>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {itemsToShow < product.length && (
                            <div className="text-center mt-3 mb-4">
                                <div className="btn btn-outline" style={{width: "200px"}} onClick={handleLoadMore}>
                                    Xem thêm
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}