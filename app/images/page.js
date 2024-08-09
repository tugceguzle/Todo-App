import React from 'react'
import gorsel from '../../assets/images.jpeg'
import Image from  "next/image"

export default function page() {
  return (
    <div>
      <Image src={gorsel} alt='gorsel' width={500} height={400}/>
    </div>
  )
}
