'use client'

import React, { useCallback, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Camera } from 'lucide-react'

const defaultAvatar = 'https://github.com/rifkiahmadfahrezi.png'
const AvatarForm = () => {
   const [avatar, setAvatar] = useState<string>(defaultAvatar)

   const handleChangeImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
         setAvatar(URL.createObjectURL(e.target.files[0]));
       }
   }, [setAvatar])

  return (
   <>
   <form className='flex flex-col justify-center gap-3 w-fit'>
      <label htmlFor="avatar">
         <figure
            className='rounded-full overflow-hidden aspect-square size-20 group relative cursor-pointer'
         >
         <Image 
            className='w-full h-full object-cover object-center'
            width={100}
            height={100}
            alt='avatar'
            src={avatar}
            />
            <span className='absolute h-full w-full grid place-items-center bottom-0 bg-secondary/75 text-center text-sm opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out'>
               <Camera />
               <span className="sr-only">Change avatar</span>
            </span>
         </figure>
         <input 
            onChange={handleChangeImage}
            type="file" 
            name="avatar" 
            id="avatar" 
            accept="image/*" 
            hidden />
      </label>

      {avatar !== defaultAvatar && (
         <div className="flex items-center gap-2">
            <Button
               type='submit'
               size={'sm'}
               >Upload profile</Button>
            <Button
               onClick={() => setAvatar(defaultAvatar)}
               variant={'secondary'}
               size={'sm'}
               >Cancel</Button>
         </div>
      )}
   </form>
   </>
  )
}

export { AvatarForm }