import React, {useEffect} from "react";

export function Promotion() {
    useEffect(() => {
        document.title = "Khuyễn mãi"; // Thay đổi title
    }, []);
    return (
        <>
            <img style={{height: 700, width: "100%"}} src="https://d34zoy7mey8f6f.cloudfront.net/article_avatar/1577441826.jpg" alt=""/>
        </>
    )

}