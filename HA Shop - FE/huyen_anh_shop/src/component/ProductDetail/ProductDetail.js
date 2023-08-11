import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as productService from "../../service/productService";
import {useParams} from "react-router";
import {useDispatch} from "react-redux";
import { Provider } from 'react-redux';

export function ProductDetail() {
    const [product1, setProduct1] = useState([]);
    const [itemsToShow, setItemsToShow] = useState(8);
    const [itemsPerLoad, setItemsPerLoad] = useState(4);
    const [product, setProduct] = useState({});
    const param = useParams();

    useEffect(() => {
        document.title = "Chi tiết sản phẩm"; // Thay đổi title
    }, []);

    useEffect(() => {
        const showList = async () => {
            const rs = await productService.findAllProduct();
            setProduct1(rs)
        }
        showList()
    }, []);

    useEffect(() => {
        const fetchApi = async () => {
            const result1 = await productService.findProductById(param.id)
            setProduct(result1)
        }
        fetchApi()
    }, [param.id])

    const handleLoadMore = () => {
        setItemsToShow(prevItems => prevItems + itemsPerLoad);
    };

    return (
        <>
            <div className="site mb-5 mt-5" id="page">
                <div className="container">
                    <div className="row">
                        <div className="col-6 p-0">
                            <div className="">
                                <img src={product?.image} style={{width: "100%", height: "100%"}}/>

                            </div>
                        </div>
                        <div className="col-6">
                            <h1 style={{fontSize: "24px", color: "#12ac4c"}}>
                                {product?.productName}
                            </h1>
                            <p className="price fs-3">
                                <b>
                                    {(+product?.price).toLocaleString()} VND
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
                                <div
                                    dangerouslySetInnerHTML={{ __html: product?.description }}
                                ></div>
                                <div className="d-flex align-items-center mb-3 gap-2 mt-4">
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
                                    <Link to="/"
                                        className="btn btn-success rounded-pill">
                                        Quay lại
                                    </Link>
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
            <div>
                <div className="row px-xl-5">
                    <h4 className="section-title position-relative  mx-xl-5 mb-4">
                        <span className="bg-secondary pr-3">Sản phẩm liên quan</span>
                    </h4>
                    {product1?.slice(0, itemsToShow)?.map((value, index) => (
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

                {itemsToShow < product1.length && (
                    <div className="text-center mt-1 mb-5">
                        <button style={{ width: "200px" ,backgroundColor: "#faebd7"}}  onClick={handleLoadMore}>
                            Xem thêm
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}