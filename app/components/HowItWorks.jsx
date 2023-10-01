import Image from 'next/image'
import React from 'react'

const HowItWorks = () => {
    return (
        <>
            <main className='px-[6.25rem] bg-white mt-8 py-[4.5rem]'>
                <p className='text-center text-[#141414] font-Sora text-[2.5rem] font-bold leading-normal '>How it works</p>
                <div className='flex justify-between mt-[3.2rem] gap-[5.5rem] '>
                    <div className='text-center space-y-[2rem] px-1 '>
                        <div className='flex justify-center'>
                            <Image src={'/Icon.svg'} width={100} height={100} className='w-[4rem]' />
                        </div>
                        <div className='space-y-2' >
                            <p className='text-[#1b233D] font-Inter text-[1.75rem] leading-normal font-semibold ' >Record Screen</p>
                            <p className=' text-[#616163] font-Worksans text-[1.25rem] font-normal leading-[151.3%] '>Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.</p>
                        </div>
                        <div className='mt-6'>
                            <Image src={"/rec-1.cb7888a47e24214aeb105805426a8300.svg.svg"} width={500} height={500}/>
                        </div>
                    </div>

                    <div className='text-center space-y-[2rem] px-1'>
                        <div className='flex justify-center'>
                            <Image src={'/Icon (1).svg'} width={100} height={100} className='w-[4rem]' />

                        </div>
                        <div className='space-y-2'>
                            <p className='text-[#1b233D] font-Inter text-[1.75rem] font-semibold leading-normal ' >Share Your Recording</p>
                            <p className=' text-[#616163] font-Worksans text-[1.25rem] font-normal leading-[151.3%] '>We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.</p>
                        </div>
                        <div className='mt-6'>
                            <Image src={"/rec-1.cb7888a47e24214aeb105805426a8300.svg.svg"} width={500} height={500}/>
                        </div>
                    </div>

                    <div className='text-center space-y-[2rem] px-1'>
                        <div className='flex justify-center'>
                            <Image src={'/Icon (2).svg'} width={100} height={100} className='w-[4rem]' />
                        </div>
                        <div className='space-y-2'>
                            <p className='text-[#1b233D] font-Inter text-[1.75rem] font-semibold leading-normal ' >Learn Effortlessly</p>
                            <p className=' text-[#616163] font-Worksans text-[1.25rem] font-normal leading-[151.3%] '>Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.</p>
                        </div>
                        <div className='mt-6'>
                            <Image src={"/rec-1.cb7888a47e24214aeb105805426a8300.svg.svg"} width={500} height={500}/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default HowItWorks
