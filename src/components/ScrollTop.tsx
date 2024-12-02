import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll ke atas setiap kali path berubah
        window.scrollTo(0, 0);
    }, [pathname]);

    return null; // Tidak merender elemen apa pun
};

export default ScrollTop;
