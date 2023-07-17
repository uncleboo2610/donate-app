import axios from "axios";
import { httpClient } from "../../../core/http";
import { apiEndpoints } from "../../../shared/config/api.config";

class ProfileService {
    getProfile(token: any) {
        return httpClient.get(apiEndpoints.User.GetProfile, token);
    }
}

export const profileService = new ProfileService();