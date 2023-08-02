import {Link} from "react-router-dom";
import React from "react";

export function ShoppingCart() {
    return (
        <>
            <section className="h-100 h-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12">
                            <div
                                className="card card-registration card-registration-2"
                                style={{ borderRadius: 15 }}
                            >
                                <div
                                    className="card-body p-0"
                                    style={{ boxShadow: "8px 8px 16px 8px rgba(0, 0, 0, 0.2)" }}
                                >
                                    <div className="row g-0">
                                        <div className="col-lg-8">
                                            <div className="p-5">
                                                <div className="pb-3">
                                                    <h6 className="mb-0">
                                                        <Link to={"/"} className="text-body">
                                                            <i className="bi bi-arrow-left me-2" />
                                                            Tiếp tục mua sắm
                                                        </Link>
                                                    </h6>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center mb-5">
                                                    <h1 className="fw-bold mb-0 text-black">
                                                        Giỏ hàng của bạn
                                                    </h1>
                                                    <h6 className="mb-0 text-muted">
                                                        {/*{cartDetails ? cartDetails.length : 0} sản phẩm*/}
                                                    </h6>
                                                </div>
                                                <hr className="my-4" />
                                                {/*{cartDetails.length === 0 ? (*/}
                                                    <div className="row mb-4 d-flex justify-content-between align-items-center">
                                                        <img
                                                            src="https://misskick.vn/wp-content/uploads/2023/02/x-dong-san-pham-giay-nike-duoc-ua-chuong-nhat-1.jpg" style={{width: "200px",height:"100px"}}/>
                                                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex justify-content-around">
                                                            <button
                                                                style={{
                                                                    border: "1px solid #12ac4c",
                                                                    background: "none",
                                                                }}
                                                                // onClick={() =>
                                                                //     dispatch(
                                                                //         decreaseQuantityCartAction(
                                                                //             cartDetail.id
                                                                //         )
                                                                //     )
                                                                // }
                                                            >
                                                                <i className="bi bi-dash-lg pe-1 ps-1"></i>
                                                            </button>
                                                            {/*<span id={`quantity${cartDetail.id}`}>{cartDetail.quantity}</span>*/}
                                                            <button
                                                                style={{
                                                                    border: "1px solid rgba(0, 0, 0, 0.5)",
                                                                    background: "#12ac4c",
                                                                }}
                                                                // onClick={() =>
                                                                //     dispatch(
                                                                //         increaseQuantityCartAction(
                                                                //             cartDetail.id
                                                                //         )
                                                                //     )
                                                                // }
                                                            >
                                                                <i className="bi bi-plus-lg text-white pe-1 ps-1"></i>
                                                            </button>
                                                        </div>
                                                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                            <button
                                                                className="btn btn-outline-danger"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal"
                                                                // onClick={() =>
                                                                //     handleTransferInfo({
                                                                //         deletedId: cartDetail.id,
                                                                //         deletedName:
                                                                //         cartDetail.productDTO.name,
                                                                //     })
                                                                // }
                                                            >
                                                                <i className="bi bi-trash" />
                                                            </button>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 bg-grey">
                                            <div className="p-5">
                                                <h3
                                                    className="fw-bold mb-5 pt-1"
                                                    style={{ marginTop: "45px" }}
                                                >
                                                    Tóm tắt giỏ hàng
                                                </h3>
                                                <hr className="my-4" />
                                                <div className="d-flex justify-content-between mb-4">
                                                    <h5 className="text-uppercase">
                                                        {/*{cartDetails ? cartDetails.length : 0} sản phẩm*/}
                                                    </h5>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <h5 className="text-uppercase mb-3">Khách hàng: </h5>
                                                    {/*<h5 className="mb-4 pb-2">{name}</h5>*/}
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <h5 className="text-uppercase mb-3">
                                                        Phí giao hàng:
                                                    </h5>
                                                    <h5 className="mb-4 pb-2">Miễn phí</h5>
                                                </div>
                                                <hr className="my-4" />
                                                <div className="d-flex justify-content-between mb-5">
                                                    <h5 className="text-uppercase">Tổng tiền</h5>
                                                    {/*<h5>*/}
                                                    {/*    {total.toLocaleString("vi-VN", {*/}
                                                    {/*        style: "currency",*/}
                                                    {/*        currency: "VND",*/}
                                                    {/*    })}*/}
                                                    {/*</h5>*/}
                                                </div>
                                                <button
                                                    type="button"
                                                    className="btn btn-dark btn-block btn-lg w-100"
                                                    data-mdb-ripple-color="dark"
                                                    // onClick={() => handlePayment()}
                                                >
                                                    Thanh toán
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}