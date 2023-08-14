import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import * as Swal from "sweetalert2";
import React from "react";

export function Employee() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        document.title = "Nhân viên"; // Thay đổi title
    }, []);

    useEffect(() => {
        if (!sessionStorage.getItem("TOKEN")) {
            Swal.fire({
                title: 'Notification!',
                text: `You must login to see your cart`,
                icon: 'error',
                confirmButtonText: 'OK',
            });
            navigate("/login");
        } else {
            setIsLoggedIn(true);
        }
    }, [navigate]);

    if (!isLoggedIn) {
        return null;
    }
    return (
        <>
            <img style={{height: 700, width: "100%"}} src="https://d34zoy7mey8f6f.cloudfront.net/article_avatar/1577441826.jpg" alt=""/>
        </>
    )
}