'use client'

import React from 'react'
import { ProfileForm } from '../forms/profile-form'
import { AvatarForm } from '../forms/avatar-form'

const ProfileSettings = () => {
  return (
    <>
    <div className="space-y-4">
      <AvatarForm />
      <ProfileForm />
    </div>
    </>
  )
}

export default ProfileSettings