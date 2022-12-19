import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import {
  QuizCard,
  Tailwint,
  Subscribe,
  Article,
  Button,
  MdCheckCircle,
} from '../components'
import Academy from '../components/Academy/Academy'
import Misc from '../components/Misc/Misc'
import Modal from '../components/Modal/Modal'
import NewComp from '../components/NewComp/NewComp'
import Slider from '../components/Slider/Slider'
import SmallTags from '../components/SmallTag/SmallTags'
import { showNotification } from '@mantine/notifications'
import { NewMisc } from '../components/Misc/NewMisc'
import { Badge, Transition } from '@mantine/core'
import { FeaturesAsymmetrical } from '../components/Feature/Feature'
import OrgnMisc from '../components/Misc/OrgnMisc'

const Home: NextPage = () => {
  const [show, setShow] = useState<boolean>(false)
  const [transition, settransition] = useState<boolean>(false)

  useEffect(() => {
    // Modal
    setTimeout(() => {
      setShow(true)
    }, 15000)
  }, [])

  useEffect(() => {
    // Notification
    setTimeout(() => {
      showNotification({
        title: `Welcome Guest 👏`,
        message: 'This website is on production, working on it',
        icon: '😍',
      })
    }, 3000)
  }, [])

  const ShowNotfi = () => {
    showNotification({
      title: `Welcome Guest 👏 This website is on production`,
      message: undefined,
    })
  }

  return (
    <div className="dark:bg-zinc-800 bg-white">
      <Head>
        <title>Home | Coder</title>
        <meta name="description" content="read article and blogs" />
        <meta property="og:title" content="my blog website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full dark:bg-zinc-800 bg-white">
        <div className="">
          {/* <NewMisc /> */}
          <Misc />
          {/* <OrgnMisc /> */}
          {/* <Tailwint /> */}
          <div>
            {/* <div className="container_main flex justify-center text-yellow-400 font-bold text-4xl pb-7">
              <Button onClick={() => setShow(true)}>Modal</Button>
            </div> */}
            <div className="container_main flex justify-center pb-7">
              <Button onClick={() => ShowNotfi()} className="text-xl rounded">
                Click for Information
              </Button>
            </div>
          </div>
          <div className="py-20">
            <h1 className="container_main text-yellow-400 font-bold text-4xl pb-14">
              Our Features
            </h1>
            <FeaturesAsymmetrical />
          </div>
          <div className="py-20">
            <h1 className="container_main text-yellow-400 font-bold text-4xl pb-7">
              Start Quiz
            </h1>
            <QuizCard />
          </div>
          <Slider />
          <Article />
          <NewComp />
          <Subscribe />
        </div>
      </main>
      {show && <Modal setShow={setShow} />}
    </div>
  )
}

export default Home
