import { GetServerSideProps } from 'next'
import Image from 'next/image'
import React from 'react'
import bgimage from '../../public/hero-bg.jpg'
import ownerimage from '../../public/imranbaitham.jpg'
import { Button } from '../Button/Button'
import { ReactIcon } from '../ReactIcon/ReactIcon'

// https://api.github.com/users/imran-baitham
const social = [
  'RiFacebookBoxFill',
  'RiTwitterFill',
  'RiInstagramFill',
  'RiLinkedinBoxFill',
  'RiYoutubeFill',
]

const linksButton = [
  { id: 1, name: 'Full Stack', link: '/' },
  { id: 1, name: 'JavaScript', link: '/' },
  { id: 1, name: 'React Js', link: '/' },
]

function Misc() {
  return (
    <div className="w-full bg-gray-100 dark:bg-zinc-900 py-20 mb-8">
      <div className="container_main w-full md:flex flex-col-reverse md:flex-row justify-center items-center">
        <div>imran</div>
        <div>baitham</div>
      </div>
    </div>
  )
}

export default Misc
