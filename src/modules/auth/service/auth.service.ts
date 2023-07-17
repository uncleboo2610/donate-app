import axios from "axios";
import { ILoginRequest, ILoginResponse } from "../types";
import { httpClient } from "../../../core/http";
import { apiEndpoints } from "../../../shared/config/api.config";

class AuthService {
    private static readonly TOKEN_KEY = "token";

    get store() {
        return window.localStorage;
    };

    saveToken(token: string) {
        this.store.setItem(AuthService.TOKEN_KEY, token);
    };

    getToken(): string | null {
        return this.store.getItem(AuthService.TOKEN_KEY) ?? null;
    };

    clearToken() {
        this.store.removeItem(AuthService.TOKEN_KEY);
    }

    logIn({email, password}: ILoginRequest): Promise<ILoginResponse> {
        return httpClient
            .post<ILoginResponse>(apiEndpoints.Auth.LogIn, {
                email,
                password,
            })
            .then((res) => res.data)
            .catch((err) => {
                if (axios.isAxiosError(err) && err?.response?.status === 401) {
                    throw new Error(
                        (err?.response?.data ?? err?.message ?? "") + "",
                    );
                }
                throw err;
            })
    }
}

export const authService = new AuthService();