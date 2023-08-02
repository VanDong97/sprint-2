import {Link} from "react-router-dom";
import React from "react";

export function ShoppingCart() {
    return (
        <>
            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-lg-8 table-responsive mb-5">
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
                            <tr>
                                <td className="align-middle">
                                    <img src="https://misskick.vn/wp-content/uploads/2023/02/x-dong-san-pham-giay-nike-duoc-ua-chuong-nhat-3.jpg" alt="" style={{ width: 50 }} />{" "}
                                    Giày Nike Air Max
                                </td>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>1.200.000 VND</h5>
                                    <h6 className="text-muted ml-2">
                                        <del>1.600.000 VND</del>
                                    </h6>
                                </div>
                                <td className="align-middle">
                                    <div
                                        className="input-group quantity mx-auto"
                                        style={{ width: 100 }}
                                    >
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-primary btn-minus">
                                                <i className="bi bi-dash-lg pe-1 ps-1"></i>
                                            </button>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control form-control-sm bg-secondary border-0 text-center"
                                            defaultValue={1}
                                        />
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-primary btn-plus">
                                                <i className="bi bi-plus-lg text-white pe-1 ps-1"></i>
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle">1.600.000 VND</td>
                                <td className="align-middle">
                                    <button className="btn btn-sm btn-danger">
                                        <i className="bi bi-x-circle"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">
                                    <img src="https://misskick.vn/wp-content/uploads/2023/02/x-dong-san-pham-giay-nike-duoc-ua-chuong-nhat-4.jpg" alt="" style={{ width: 50 }} />{" "}
                                    Giày Nike Air Force
                                </td>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>1.200.000 VND</h5>
                                    <h6 className="text-muted ml-2">
                                        <del>1.600.000 VND</del>
                                    </h6>
                                </div>
                                <td className="align-middle">
                                    <div
                                        className="input-group quantity mx-auto"
                                        style={{ width: 100 }}
                                    >
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-primary btn-minus">
                                                <i className="bi bi-dash-lg pe-1 ps-1"></i>
                                            </button>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control form-control-sm bg-secondary border-0 text-center"
                                            defaultValue={1}
                                        />
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-primary btn-plus">
                                                <i className="bi bi-plus-lg text-white pe-1 ps-1"></i>
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle">1.600.000 VND</td>
                                <td className="align-middle">
                                    <button className="btn btn-sm btn-danger">
                                        <i className="bi bi-x-circle"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">
                                    <img src="https://misskick.vn/wp-content/uploads/2023/02/x-dong-san-pham-giay-nike-duoc-ua-chuong-nhat-4.jpg" alt="" style={{ width: 50 }} />{" "}
                                    Giày Nike Air Max
                                </td>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>1.200.000 VND</h5>
                                    <h6 className="text-muted ml-2">
                                        <del>1.600.000 VND</del>
                                    </h6>
                                </div>
                                <td className="align-middle">
                                    <div
                                        className="input-group quantity mx-auto"
                                        style={{ width: 100 }}
                                    >
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-primary btn-minus">
                                                <i className="bi bi-dash-lg pe-1 ps-1"></i>
                                            </button>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control form-control-sm bg-secondary border-0 text-center"
                                            defaultValue={1}
                                        />
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-primary btn-plus">
                                                <i className="bi bi-plus-lg text-white pe-1 ps-1"></i>
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle">1.400.000 VND</td>
                                <td className="align-middle">
                                    <button className="btn btn-sm btn-danger">
                                        <i className="bi bi-x-circle"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">
                                    <img src="https://misskick.vn/wp-content/uploads/2023/02/x-dong-san-pham-giay-nike-duoc-ua-chuong-nhat-4.jpg" alt="" style={{ width: 50 }} />{" "}
                                    Giày Nike Air Max
                                </td>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>1.200.000 VND</h5>
                                    <h6 className="text-muted ml-2">
                                        <del>1.600.000 VND</del>
                                    </h6>
                                </div>
                                <td className="align-middle">
                                    <div
                                        className="input-group quantity mx-auto"
                                        style={{ width: 100 }}
                                    >
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-primary btn-minus">
                                                <i className="bi bi-dash-lg pe-1 ps-1"></i>
                                            </button>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control form-control-sm bg-secondary border-0 text-center"
                                            defaultValue={1}
                                        />
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-primary btn-plus">
                                                <i className="bi bi-plus-lg text-white pe-1 ps-1"></i>
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle">1.200.000 VND</td>
                                <td className="align-middle">
                                    <button className="btn btn-sm btn-danger">
                                        <i className="bi bi-x-circle"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">
                                    <img src="https://misskick.vn/wp-content/uploads/2023/02/x-dong-san-pham-giay-nike-duoc-ua-chuong-nhat-4.jpg" alt="" style={{ width: 50 }} />{" "}
                                    Giày Nike Air Max
                                </td>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>1.200.000 VND</h5>
                                    <h6 className="text-muted ml-2">
                                        <del>1.600.000 VND</del>
                                    </h6>
                                </div>
                                <td className="align-middle">
                                    <div
                                        className="input-group quantity mx-auto"
                                        style={{ width: 100 }}
                                    >
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-primary btn-minus">
                                                <i className="bi bi-dash-lg pe-1 ps-1"></i>
                                            </button>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control form-control-sm bg-secondary border-0 text-center"
                                            defaultValue={1}
                                        />
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-primary btn-plus">
                                                <i className="bi bi-plus-lg text-white pe-1 ps-1"></i>
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle">1.100.000 VND</td>
                                <td className="align-middle">
                                    <button className="btn btn-sm btn-danger">
                                        <i className="bi bi-x-circle"></i>
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
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
                                    <h5>5.000.000 VND</h5>
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