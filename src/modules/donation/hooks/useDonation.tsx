import React, { useEffect, useState } from 'react'
import { IDonation } from '../models';
import { donationService } from '../service/donation.service';

export default function useDonation() {
    const [data, setData] = useState<IDonation[]>([]);

    useEffect(() => {
        donationService.getAllDonations()
            .then((res) => {
                setData(res.data)
            })
            .catch((error) => console.log(error))
    }, [])

    return [data] as const;
}
