import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <>
            <main>
                <div className='flex items-center justify-between px-[6.25rem] py-[8rem] mt-[0.1rem] gap-x-4 w-[100%] bg-white '>
                    <div className='max-w-[45%] mr-4'>
                        <div className='space-y-6'>
                            <h1 className='text-[#141414] font-Sora text-[3.7rem] font-bold leading-[100%] pr-[3rem] '>Show Them Don't Just tell</h1>
                            <p className='text-[#000000bf] font-Inter text-xl font-normal '>Help your friends and loved ones by creating and sending videos on how to get things done on a website.</p>
                        </div>
                        <div className='mt-[1.7rem]'>
                            <Link href={"/"} className='inline-flex justify-center items-center bg-[#120B48] hover:bg-[#09032b] gap-[0.75rem] rounded-lg font-Worksans font-[500] px-6 py-4 text-white text-lg ' > 
                                <span>Install HelpMeOut</span> 
                                <span> <Image src={'/arrow-right.svg'} width={100} height={100} className='w-[1.25rem] h-[1.25rem] '/> </span>
                            </Link>
                        </div>
                    </div>

                    <div className='flex relative gap-x-2 max-w-[50%]  '>
                        <Image src={"/grid.136a9256d16888900db0.svg.svg"} width={100} height={100} className='absolute bottom-0 left-0 w-[15rem] translate-y-1/4 -translate-x-[13%] z-10 ' />
                        <Image src={"/grid.136a9256d16888900db0.svg (1).svg"} width={100} height={100} className='absolute top-0 right-0 w-[15rem] -translate-y-1/4 translate-x-[16%] z-10 ' />
                        <div className='flex flex-col justify-between z-20 '>
                            <Image src="/AdobeStock_400053098 1 (1).svg" width={1000} height={1000} className='w-[38.8rem] rounded-md  ' />
                            <Image src={"/AdobeStock_362497671 1.svg"} width={1000} height={1000} className='w-[38.8rem] rounded-md  ' />
                        </div>
                        <div className='z-20'>
                            <Image src={"/woman-using-smartphone-technology 2.svg"} width={1000} height={1000} className=' w-[37rem] rounded-md  ' />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Header
