import axios from "axios";
import { httpClient } from "../../../core/http";
import { apiEndpoints } from "../../../shared/config/api.config";

class DonationService {
    getAllDonations() {
        return httpClient.get(apiEndpoints.Donation.GetDonations);
    }

    addDonation(data: any) {
        return httpClient.post(
            apiEndpoints.Donation.AddDonation,
            data,
        );
    }
}

export const donationService = new DonationService();