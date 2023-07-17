import React, { useEffect } from 'react'
import { profileService } from '../service/profile.service'

const ProfilePage = () => {
    useEffect(() => {
        const token = ``;

        profileService.getProfile({ headers: {"Authorization" : `Bearer ${token}`} })
    }, [])
  return (
    <div>ProfilePage</div>
  )
}

export default ProfilePage