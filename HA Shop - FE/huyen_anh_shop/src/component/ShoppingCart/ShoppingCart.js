import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as Swal from "sweetalert2";
import {useNavigate, useParams} from "react-router";
import * as UserService from "../../service/userService";
import * as CartService from "../../service/cartService";
import * as productService from "../../service/productService";

export function ShoppingCart() {

    const [userId, setUserId] = useState(0);
    const [cart, setCart] = useState([]);
    const username = sessionStorage.getItem('USERNAME');
    const navigate = useNavigate();
    const param = useParams();
    const ship = 30; // Assuming it's a constant
    const [product, setProduct] = useState([]);
    const [productQuantities, setProductQuantities] = useState({});

    useEffect(() => {
        document.title = "Giỏ hàng"; // Thay đổi title
    }, []);

    useEffect(() => {
        const showList = async () => {
            const rs = await productService.findAllProduct();
            setProduct(rs)
        }
        showList()
    }, []);

    useEffect(() => {
        const getUserName = async () => {
            const rs = await UserService.findUserName(username);
            setUserId(rs)
        }
        getUserName();
    }, []);
    console.log(userId)

    const calculateTotalSum = () => {
        let totalSum = 0;
        for (const item of cart) {
            const productQuantity = productQuantities[item.productId] || item.amount;
            totalSum += item.price * productQuantity;
        }
        return totalSum;
    };

    const handleQuantityChange = (productId, newQuantity) => {
        setProductQuantities((prevQuantities) => ({
            ...prevQuantities,
            [productId]: newQuantity,
        }));
    };

    const increaseQuantity = (productId) => {
        const newQuantity = (productQuantities[productId] || 0) + 1;
        handleQuantityChange(productId, newQuantity);
    };

    const decreaseQuantity = (productId) => {
        if (productQuantities[productId] > 1) {
            const newQuantity = productQuantities[productId] - 1;
            handleQuantityChange(productId, newQuantity);
        }
    };

    useEffect(() => {
        const listCard = async () => {
            const rs = await CartService.getAllCart(username);
            setCart(rs)
        }
        listCard();
    }, []);
    console.log(cart);

    if (!sessionStorage.getItem("roles")) {

        Swal.fire({
            title: 'Thông báo!',
            text: `Bạn phải đăng nhập để xem giỏ hàng`,
            icon: 'error',
            confirmButtonText: 'OK',
        });
        navigate("/login")
        return null

    }

    const deleteCartDetail = (cartId, productId, productName, cartDetailId) => {
        // Call the API to delete the cart detail
        CartService.deleteCartDetail(cartId, productId).then(() => {
            // Update the cart state to remove the deleted item
            setCart((prevCart) => prevCart.filter((item) => item.cartDetailId !== cartDetailId));

            Swal.fire({
                title: 'Thông báo!',
                text: `Bạn vừa xoá mặt hàng ${productName}`,
                icon: 'success',
                confirmButtonText: 'OK',
            });
        });
    };
    return (
        <>
            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-lg-8 table-responsive mb-5">
                        {cart.length === 0 ? (
                            <div className="text-center m-5">

                                <img
                                    src="https://fansport.vn/default/template/img/cart-empty.png"
                                    alt="Empty Cart"
                                    height="210"
                                    width="300"
                                />
                                <h1 style={{textAlign: "center"}}>Giỏ hàng rỗng</h1>
                            </div>
                        ) : (
                            <table className="table table-light table-borderless table-hover text-center mb-0">
                                <thead className="thead-dark">
                                <tr>
                                    <th>Sản Phẩm</th>
                                    <th>Giá</th>
                                    <th>Số Lượng</th>
                                    <th>Tổng</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody className="align-middle">
                                {cart?.map((item , index) =>(
                                    <tr>
                                        <td className="align-middle" key={index}>
                                            {/*<img src="https://misskick.vn/wp-content/uploads/2023/02/x-dong-san-pham-giay-nike-duoc-ua-chuong-nhat-3.jpg" alt="" style={{ width: 50 }} />{" "}*/}
                                            {/*Giày Nike Air Max*/}
                                            <img style={{width: 50}} src={item?.image}/>
                                            {item.productName}
                                        </td>
                                        <div className="d-flex align-items-center justify-content-center mt-2">
                                            <h5>{(+item?.price).toLocaleString()} VND</h5>
                                            <h6 className="text-muted ml-2">
                                                <del>2.100.000 VND</del>
                                            </h6>
                                        </div>
                                        <td className="align-middle">
                                            <div
                                                className="input-group quantity mx-auto"
                                                style={{width: 100}}
                                            >
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-primary btn-minus" onClick={() => decreaseQuantity(item.productId)}>
                                                        <i className="bi bi-dash-lg pe-1 ps-1"></i>
                                                    </button>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="form-control form-control-sm bg-secondary border-0 text-center"
                                                    defaultValue={item.amount}
                                                    value={productQuantities[item.productId] || 1}
                                                />
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-primary btn-plus" onClick={() => increaseQuantity(item.productId)}>
                                                        <i className="bi bi-plus-lg text-white pe-1 ps-1"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="total">
                                            {Intl.NumberFormat().format(item.price * (productQuantities[item.productId] || item.amount))} VND
                                        </td>
                                        <td className="align-middle">
                                            <a onClick={() => deleteCartDetail(item.cartId, item.productId, item.productName, item.cartDetailId)} className="btn btn-sm btn-danger">
                                                <i className="bi bi-x-circle"></i>
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                    <div className="col-lg-4">
                        <h5 className="section-title position-relative text-uppercase mb-3">
                            <span className="bg-secondary pr-3">Tóm Tắt Giỏ Hàng</span>
                        </h5>
                        <div className="bg-light p-30 mb-5">
                            <div className="border-bottom pb-2">
                                <div className="d-flex justify-content-between mb-3">
                                    <h6>Khuyến Mãi</h6>
                                    <h6>Không Có</h6>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-medium">Phí Vận Chuyển</h6>
                                    <h6 className="font-weight-medium">Miễn Phí</h6>
                                </div>
                            </div>
                            <div className="pt-2">
                                <div className="d-flex justify-content-between mt-2">
                                    <h5>Tổng Tiền</h5>
                                    <h5>{calculateTotalSum().toLocaleString()} VND</h5>
                                </div>
                                <button className="btn btn-block btn-primary font-weight-bold my-3 py-3">
                                    Thanh Toán
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}