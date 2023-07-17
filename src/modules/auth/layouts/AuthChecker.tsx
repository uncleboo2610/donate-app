import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { redirectToLoginWhenAuthFail } from "../../../core/http";

export function AuthChecker() {
    const navigate = useNavigate();

    useEffect(() => {
        const removeInterceptors = redirectToLoginWhenAuthFail(() => {
            navigate("/login");
        });
        return () => {
            removeInterceptors();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // if (!user) {
    //     return <Navigate to="/login" />;
    // }

    return <Outlet />;
}