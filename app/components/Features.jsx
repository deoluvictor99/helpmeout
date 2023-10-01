import React from 'react'
import Image from 'next/image'

const Features = () => {
    return (
        <>
            <main className='bg-white mt-8 py-16'>
                <div className='text-center  '>
                    <h1 className=' text-[#141414] font-Sora text-[2.5rem] font-bold '>Features</h1>
                    <p className=' text-[#616163] font-Worksans text-xl leading-[151.3%] self-stretch '>Key Highlights of Our Extension</p>
                </div>
                <div className='flex items-center w-[100%] px-[6.25rem] gap-x-[3.5rem] justify-between mt-16'>
                    <div className='max-w-[43%] space-y-[3rem] '>
                        <div className=' flex justify-between gap-2 '>
                            <div>
                                <Image src="/Icon placeholder.svg" width={100} height={100} className="w-[3.5rem] pt-1" />
                            </div>
                            <div>
                                <p className='text-[#1B233D] font-Inter text-[1.7rem] font-semibold' >Simple Screen Recording</p>
                                <p className=' text-[#616163] font-Worksans text-xl leading-[151.3%] font-normal ' >Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
                            </div>
                        </div>
                        <div className=' flex justify-between gap-2 '>
                            <div>
                                <Image src="/Icon placeholder (1).svg" width={100} height={100} className="w-[3.5rem] pt-1" />
                            </div>
                            <div>
                                <p className='text-[#1B233D] font-Inter text-[1.7rem] font-semibold ' >Easy-to-Share URL</p>
                                <p className=' text-[#616163] font-Worksans text-xl leading-[151.3%] font-normal ' >Share your recordings instantly with a single link. No attachments, no downloads.</p>
                            </div>
                        </div>
                        <div className=' flex justify-between gap-2 '>
                            <div>
                                <Image src="/Icon placeholder (2).svg" width={100} height={100} className="w-[3.5rem] pt-1" />
                            </div>
                            <div>
                                <p className='text-[#1B233D] font-Inter text-[1.7rem] font-semibold ' >Revisit Recordings</p>
                                <p className=' text-[#616163] font-Worksans text-xl leading-[151.3%] font-normal ' >Access and review your past content effortlessly. Your recordings, always at your fingertips </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image src="/Video Repository.svg" width={1000} height={1000} />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Features
