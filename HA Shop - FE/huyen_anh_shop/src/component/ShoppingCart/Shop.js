import "../Home/home.css";
import React, {useContext, useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import * as UserService from "../../service/userService";
import * as productService from "../../service/productService";
import {QuantityContext} from "./QuantityContext";
export function Shop() {

    const [productType, setProductType] = useState([])
    const [product, setProduct] = useState([]);
    const [itemsToShow, setItemsToShow] = useState(8);
    const [itemsPerLoad, setItemsPerLoad] = useState(4);
    const { iconQuantity, setIconQuantity } = useContext(QuantityContext)
    const navigate = useNavigate();
    const [userId, setUserId] = useState(0);
    const username = sessionStorage.getItem('USERNAME');
    const [amount, setAmount] = useState(1);

    useEffect(() => {
        document.title = "Sản Phẩm"; // Thay đổi title
    }, []);

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

    return (
        <>
            <div className="row">
                <div className="col-3">
                    <h4 className="section-title position-relative text-uppercase mb-3 container-fluid pt-5 pb-5">
                        <span className="bg-secondary pr-3">Loại sản phẩm</span>
                    </h4>
                    <div className="bg-light p-4 mb-30">
                        <div>
                            <h5>Toàn bộ</h5>
                        </div>
                        {productType.map((value, index) => {
                            return (
                                <div className="" key={index}>
                                    <div>
                                        <div className="">
                                            <div >
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
                        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
                            <span className="bg-secondary pr-3">Sản Phẩm</span>
                        </h2>
                        <div className="row px-xl-5">
                            {product?.slice(0, itemsToShow)?.map((value, index) => (
                                <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                                    <div className="product-item bg-light mb-4">
                                        <div className="product-img position-relative overflow-hidden">
                                            <img className="img-fluid w-100"
                                                 alt="" src={value.image}/>
                                            <div className="product-action">
                                                <a className="btn btn-outline-dark btn-square">
                                                    <i className="bi bi-cart4"></i>
                                                </a>
                                                <a className="btn btn-outline-dark btn-square" >
                                                    <Link to={`/detail/${value.productId}`}>
                                                        <i
                                                            className="bi bi-info-square"
                                                        />
                                                    </Link>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="text-center py-4">
                                            <a className="h6 text-decoration-none text-truncate" href="">
                                                {value.productName}
                                            </a>
                                            <div className="d-flex align-items-center justify-content-center mt-2">
                                                <h5>{(+value?.price).toLocaleString()} VND</h5>
                                                <h6 className="text-muted ml-2">
                                                    <del style={{color : "red"}}>2.100.000 VND</del>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {itemsToShow < product.length && (
                            <div className="text-center mt-3">
                                <button style={{ width: "200px" ,backgroundColor: "#faebd7"}}  onClick={handleLoadMore}>
                                    Xem thêm
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )

}