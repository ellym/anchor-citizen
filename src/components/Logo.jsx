import Image from 'next/future/image'

import logo from '@/images/logos/anchor-citizen.png'

export function Logo(props) {
  return (
    <Image width={200} style={{ marginLeft: 'auto', marginRight: 'auto' }} src={logo} alt='Anchor Citizen' unoptimized />
  )
}
