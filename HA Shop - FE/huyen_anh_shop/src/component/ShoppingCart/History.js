import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import * as UserService from "../../service/userService";
import * as CartService from "../../service/cartService";
import * as Swal from "sweetalert2";

export function History() {
    const [userId, setUserId] = useState(0);
    const username = sessionStorage.getItem('USERNAME');
    const [history, setHistory] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Lịch sử"; // Thay đổi title
    }, []);

    useEffect(() => {
        const getUserName = async () => {
            const rs = await UserService.findUserName(username);
            setUserId(rs);
        };
        getUserName();
    }, [username]);

    useEffect(() => {
        const getHistory = async () => {
            try {
                const rs = await CartService.findAllHistory(userId);
                setHistory(rs);

            } catch (error) {
                console.log(error);
            }
        };

        getHistory();
    }, [userId]);
console.log(history)
    if (!sessionStorage.getItem("roles")) {

        Swal.fire({
            title: 'Thông báo!',
            text: `Bạn cần đăng nhập để xem giỏ hàng`,
            icon: 'error',
            confirmButtonText: 'OK',
        });
        navigate("/login")
        return null
    }
    return (
        <>
                <div className="container mt-5">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 text-center">
                            <h4
                                style={{
                                    paddingLeft: "28px",
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    fontSize: '4rem',
                                    width: "100%",
                                }}
                            >
                                Lịch Sử Thanh Toán
                            </h4>
                        </div>
                    </div>
                </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã Hợp Đồng</th>
                                <th>Tên Khách Hàng</th>
                                <th>Ngày Thanh Toán</th>
                                <th>Tổng Tiền</th>
                            </tr>
                            </thead>
                            <tbody>
                            {history?.map((order, index) => (
                                <tr key={index}>
                                    <td scope="row">{index + 1}</td>
                                    <td>{order.codeBill}</td>
                                    <td>{order.user.username}</td>
                                    <td>{order.orderDate}</td>
                                    <td style={{ fontFamily: "Cabin" }}>
                                        {new Intl.NumberFormat().format(order.total)}VNĐ
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}