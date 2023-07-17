export interface IDonation {
    id: string;
    userId: number;
    donateUserName: string;
    donateMoney: number;
    donateMessage: string;
    donateDate: Date;
}

export interface ITopDonation {
    key: React.Key;
    id: string;
    userId: number;
    donateUserName: string;
    donateMoney: number;
}