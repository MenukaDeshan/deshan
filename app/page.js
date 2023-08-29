import Head from 'next/head';
import Image from 'next/image'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {
  AiFillGithub, 
  AiFillLinkedin , 
  AiFillYoutube
} from 'react-icons/ai';
import deved from '../public/profile-pic.png';

export default function Home() {
  return (
    <div>
      <head>
        <title>DESHAN</title>
        <link rel='icon' href='/favicon.ico/'/>
      </head>
    <main>
      <section className='min-h-screen'>
        <nav className='p-10 mb-1 flex justify-between'>
          <h1 className='text-xl font-burtons'>Developed By Deshan</h1>
          <ul className='flex items-center'>
            <li><a className='bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-md ml-8' href='#'>Resume</a></li>
          </ul>
        </nav>
        <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-1 overflow-hidden'>
          <Image src={deved} layout='fill' objectFit='cover'/>
        </div>
        <div className='text-center p-10 py-10'>
          <h2 className='text-5xl py-2 text-orange-600 font-medium'>Menuka Deshan</h2>
          <h3 className='text-2xl py-2 text-orange-400'>Developer and Designer</h3>
          <p className='text-md py-5 leading-8 text-white'>I am a versatility and easily adapt to different hats (Beginner level Designer 🎨 and a Developer) . I love exploring new tech stacks.</p>
        </div>
        <div className='text-5xl flex justify-center gap-16 py-3 text-yellow-400'>
          <a href='https://github.com/MenukaDeshan'><AiFillGithub/></a>
          <AiFillLinkedin />
          <AiFillYoutube />
        </div>
        
      </section>
{/*
      <section>
        <div>
          <h3 className='text-3xl py-1'>Services</h3>
          <p className='text-md py-2 leading-8 text-gray-800'>
            Sinece the Begijnggoasdbgkna akbosah svhas savoas <span className='text-teal-500'>gsitgfah</span> vaobvobak dvoabv avb oabv avboa voabvk a voaj
          </p>
        </div>
        <div>
          <div className='text-center shadow-lg p-10 rounded-xl my-10 Class object-center'>
            <Image src={design} width={100} height={100}/>
            <h3 className='text-lg font-medium pt-8 pb-2'>designs</h3>
            <p className='py-2'>
              Creating elegant designs suited for your needs.
            </p>
            <h4 className='py-4 text-teal-600'>Design Tools I use</h4>
            <p className='text-gray-800 py-1 '>Photoshop</p>
            <p className='text-gray-800 py-1 '>Illustrator</p>
            <p className='text-gray-800 py-1 '>Figma</p>
          </div>
          <div className='text-center shadow-lg p-10 rounded-xl my-10 Class object-center'>
            <Image src={code} width={100} height={100}/>
            <h3 className='text-lg font-medium pt-8 pb-2'>designs</h3>
            <p className='py-2'>
              Creating elegant designs suited for your needs.
            </p>
            <h4 className='py-4 text-teal-600'>Design Tools I use</h4>
            <p className='text-gray-800 py-1 '>Photoshop</p>
            <p className='text-gray-800 py-1 '>Illustrator</p>
            <p className='text-gray-800 py-1 '>Figma</p>
          </div>
          <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <Image src={design} width={100} height={100} alignItems='center'/>
            <h3 className='text-lg font-medium pt-8 pb-2'>designs</h3>
            <p className='py-2'>
              Creating elegant designs suited for your needs.
            </p>
            <h4 className='py-4 text-teal-600'>Design Tools I use</h4>
            <p className='text-gray-800 py-1 '>Photoshop</p>
            <p className='text-gray-800 py-1 '>Illustrator</p>
            <p className='text-gray-800 py-1 '>Figma</p>
          </div>
        </div>
      </section>
      <section>
        <h3 className='text-3xl py-1'>Portofolio</h3>

      </section>
      */ }
    </main>
    </div>
  )
}
