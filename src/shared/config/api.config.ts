const apiBaseUrl = `https://localhost:7151`;

export const apiEndpoints = {
    Auth: {
        LogIn: `${apiBaseUrl}/User/login`,
    },
    User: {
        GetUsers: `${apiBaseUrl}/User/get-users`,
        GetProfile: `${apiBaseUrl}/User/get-user/`,
        AddUsers: `${apiBaseUrl}/User/add-user/`,
        UpdateUser: `${apiBaseUrl}/User/update-user/`,
        DeleteUser: `${apiBaseUrl}/User/delete-user/`,
    },
    Donation: {
        GetDonations: `${apiBaseUrl}/Donation/get-donations`,
        AddDonation: `${apiBaseUrl}/Donation/add-donation`,
    },
}