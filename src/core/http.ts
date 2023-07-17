import axios from "axios";
import camelcaseKeys from "camelcase-keys";
import { authService } from "../modules/auth/service/auth.service";

export const httpClient = axios.create({
    transformResponse: [
        ...(axios.defaults.transformResponse as any[]),
        (data) =>
            camelcaseKeys(data, {
                deep: true,
            }),
    ],
    responseType: "json",
});

export function redirectToLoginWhenAuthFail(callback: () => void) {
    const id = httpClient.interceptors.response.use(
        (res) => res,
        (error) => {
            if (axios.isAxiosError(error)) {
                if (
                    error.response?.status === 403 ||
                    error.response?.status === 401
                ) {
                    callback();
                    authService.clearToken();
                }
            }
            console.error(error);
            throw error;
        },
    );
    return () => {
        httpClient.interceptors.response.eject(id);
    };
}