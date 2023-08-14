import React, {useContext, useEffect, useState} from "react";
import "../Home/home.css";
import {Link} from "react-router-dom";
import {useNavigate, useParams} from "react-router";
import {QuantityContext} from "../ShoppingCart/QuantityContext";
import * as Swal from "sweetalert2";
import axios from "axios";
import * as productService from "../../service/productService";
import * as UserService from "../../service/userService";


export function Home() {
    const [product, setProduct] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [itemsToShow, setItemsToShow] = useState(8); // Số sản phẩm hiển thị ban đầu
    const { iconQuantity, setIconQuantity } = useContext(QuantityContext)
    const [userId, setUserId] = useState(0);
    const username = sessionStorage.getItem('USERNAME');
    const [amount, setAmount] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        const showList = async () => {
            const rs = await productService.findAllProduct();
            setProduct(rs)
        }
        showList()
    }, []);

    useEffect(() => {
        document.title = "Trang chủ"; // Thay đổi title
    }, []);

    useEffect(() => {
        const getUserName = async () => {
            const rs = await UserService.findUserName(username);
            setUserId(rs)
        }
        getUserName();
    }, []);

    const addToCart1 = (productId, item) => {
        if (!username) {
            Swal.fire({
                icon: 'error',
                title: 'Đăng nhập để xem giỏ hàng',
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/api/login')
        }else{
            const apiUrl = `http://localhost:8080/api/cart/addToCart/${userId}/${productId}/${amount}`;
            setIconQuantity(iconQuantity + 1)
            axios.get(apiUrl)
                .then(response => {
                    Swal.fire({
                        text: 'Thêm vào giỏ hàng thành công!',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        timer : 1500,
                    })
                })
                .catch(error => {
                    console.error('Lỗi khi thêm vào giỏ hàng :', error.response);
                });
        };
    }

    const handleAddToCartClick = (productId) => {
        addToCart1(productId);
    };
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={0}
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={1}
                        aria-label="Slide 2"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={2}
                        aria-label="Slide 3"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={3}
                        aria-label="Slide 4"
                    />
                </div>
                <div className="carousel-inner" >
                    <div className="carousel-item active">
                        <img src="https://glab.vn/storage/uploads/advert/6448f45698c3e.jpg"
                             className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://cdn-img.thethao247.vn/upload/thanhtung/2020/02/05/best-selling-shoes-2019-2.jpg"
                            className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://glab.vn/storage/uploads/advert/6448f45698c3e.jpg" className="d-block w-100"
                             alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn-img.thethao247.vn/upload/thanhtung/2020/02/05/best-selling-shoes-2019-2.jpg" className="d-block w-100"
                             alt="..."/>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"/>
                    <span className="visually-hidden">Trước</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"/>
                    <span className="visually-hidden">Sau</span>
                </button>
            </div>

            <div className="container-fluid pt-5">
                <div className="row px-xl-5 pb-3">
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div
                            className="d-flex align-items-center bg-light mb-4"
                            style={{padding: 30}}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                 className="bi bi-bookmark-check-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                      d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                            </svg>
                            <h1 className="fa fa-check text-primary m-0 mr-3"/>
                            <h5 className="font-weight-semi-bold m-0">Sản phẩm chất lượng</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div
                            className="d-flex align-items-center bg-light mb-4"
                            style={{padding: 30}}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                 className="bi bi-car-front-fill" viewBox="0 0 16 16">
                                <path
                                    d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17 1.247 0 3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z"/>
                            </svg>
                            <h1 className="fa fa-shipping-fast text-primary m-0 mr-2"/>
                            <h5 className="font-weight-semi-bold m-0">Miễn phí vận chuyển</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div
                            className="d-flex align-items-center bg-light mb-4"
                            style={{padding: 30}}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                 className="bi bi-arrow-left-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                      d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/>
                            </svg>
                            <h1 className="fas fa-exchange-alt text-primary m-0 mr-3"/>
                            <h5 className="font-weight-semi-bold m-0">Trả hàng trong 14 ngày</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div
                            className="d-flex align-items-center bg-light mb-4"
                            style={{padding: 30}}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                 className="bi bi-telephone-forward-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.761.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z"/>
                            </svg>
                            <h1 className="fa fa-phone-volume text-primary m-0 mr-3"/>
                            <h5 className="font-weight-semi-bold m-0">Hỗ trợ 24/7</h5>
                        </div>
                    </div>
                </div>
            </div>

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
                                        <a className="btn btn-outline-dark btn-square" onClick={() => handleAddToCartClick(value.productId)}>
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
            </div>
            <div className="container-fluid pt-5 pb-3">
                <div className="row px-xl-5">
                    <div className="col-md-6">
                        <div className="product-offer mb-30" style={{height: 300}}>
                            <img className="img-fluid"
                                 src="https://www.giaonhan247.com/wp-content/uploads/2022/07/thuong-hieu-Nike-min.jpg"
                                 alt=""/>
                            <div className="offer-text">
                                <h6 className="text-white text-uppercase">Tiết kiệm 20%</h6>
                                <h3 className="text-white mb-3">Khuyến mãi đặc biệt</h3>
                                <a href="" className="btn btn-primary">
                                    Mua ngay
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product-offer mb-30" style={{height: 300}}>
                            <img className="img-fluid"
                                 src="https://cdn3.dhht.vn/wp-content/uploads/2021/03/giai-ma-doi-giay-nike-air-force-1-huyen-thoai-40-nam-lich-su-nike.jpg"
                                 alt=""/>
                            <div className="offer-text">
                                <h6 className="text-white text-uppercase">Tiết kiệm 20%</h6>
                                <h3 className="text-white mb-3">Khuyến mãi đặc biệt</h3>
                                <a href="" className="btn btn-primary">
                                    Mua ngay
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}