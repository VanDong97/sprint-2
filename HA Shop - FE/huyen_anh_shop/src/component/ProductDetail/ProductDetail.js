import {Link} from "react-router-dom";
import React from "react";

export function ProductDetail() {
    return (
        <>
            <div className="site mb-5 mt-5" id="page">
                <div className="container">
                    <div className="row">
                        <div className="col-6 p-0">
                            <div className="">
                                <img src="https://giaysihcm.com/wp-content/uploads/2016/12/af1-trang.jpg"
                                     style={{width: "100%", height: "100%"}}/>
                                {/*<SimpleSlider imgList={product?.productImgDTOS} />*/}
                            </div>
                        </div>
                        <div className="col-6">
                            <h1 style={{fontSize: "24px", color: "#12ac4c"}}>
                                Giày Nike Air TR
                                {/*{product?.name}*/}
                            </h1>
                            <p className="price fs-3">
                                <b>
                                    1.200.000 VND
                                    {/*{product?.price.toLocaleString("vi-VN", {*/}
                                    {/*    style: "currency",*/}
                                    {/*    currency: "VND",*/}
                                    {/*})}*/}
                                    <b className="text-muted ml-2">
                                        <del>2.100.000 VND</del>
                                    </b>
                                </b>
                            </p>
                            <div className="description" style={{textAlign: "justify"}}>
                                <p className="m-0">
                                    <b>Thương hiệu :</b> Nike Air
                                </p>
                                <p>
                                    <b>Kho hàng :</b> Còn hàng
                                </p>
                                <hr/>
                                <div className="form-group required product-option-radio push-option">
                                    <label className="control-label">
                                        Chọn size
                                    </label>
                                    <div id="input-option3451" className="radio-horizontal"
                                         style={{display: "flex", flexDirection: "row"}}>
                                        <div className="radio">
                                            <label style={{marginRight: "20px"}}>
                                                <input type="radio" name="radio"/>
                                                <span className="option-value">40</span>
                                            </label>
                                        </div>
                                        <div className="radio">
                                            <label style={{marginRight: "20px"}}>
                                                <input type="radio" name="radio"/>
                                                <span className="option-value">41</span>
                                            </label>
                                        </div>
                                        <div className="radio">
                                            <label style={{marginRight: "20px"}}>
                                                <input type="radio" name="radio"/>
                                                <span className="option-value">42</span>
                                            </label>
                                        </div>
                                        <div className="radio">
                                            <label style={{marginRight: "20px"}}>
                                                <input type="radio" name="radio"/>
                                                <span className="option-value">42.5</span>
                                            </label>
                                        </div>
                                        <div className="radio ">
                                            <label style={{marginRight: "20px"}}>
                                                <input type="radio" name="radio"/>
                                                <span className="option-value ">43</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    // dangerouslySetInnerHTML={{ __html: product?.description }}
                                ></div>
                                <div className="d-flex align-items-center mb-3 gap-2">
                                    <input
                                        type="number"
                                        className="form-control"
                                        style={{width: 70}}
                                        min={0}
                                        // value={quantity}
                                        // onChange={(e) => handleChangeQuantity(e)}
                                    />
                                    <button
                                        className="btn btn-success rounded-pill"
                                        // onClick={() =>
                                        //     handleAddCartDetail(product?.id, product?.price)
                                        // }
                                    >
                                        Thêm vào giỏ hàng
                                    </button>
                                    <button
                                        className="btn btn-danger rounded-pill">
                                        Mua ngay
                                    </button>
                                </div>
                                <div
                                    className="d-flex align-items-center bg-light mb-4"
                                    style={{padding: 30}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                         className="bi bi-car-front-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17 1.247 0 3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z"/>
                                    </svg>
                                    <h1 className="fa fa-shipping-fast text-primary m-0 mr-2"/>
                                    <h5 className="font-weight-semi-bold m-0 m-auto">Miễn phí vận chuyển</h5>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                         className="bi bi-arrow-left-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                              d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/>
                                    </svg>
                                    <h1 className="fas fa-exchange-alt text-primary m-0 mr-3"/>
                                    <h5 className="font-weight-semi-bold m-0">Trả hàng trong 14 ngày</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}