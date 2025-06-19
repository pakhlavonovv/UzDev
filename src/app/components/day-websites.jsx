import './style.css'
import Image from 'next/image'
const DayWebsite = () => {
  return (
    <section className='border-t-2 border-[#7C67FE] mt-[50px] md:mt-[100px]'>
        <div className="container">
            <div className='mt-[50px] rounded-md p-4 pt-5 bg-gray-200 flex flex-col gap-2 lg:flex-row items-center sm:gap-6 justify-center'>
                <div>
                    <span className='text-[30px] font-bold sm:text-[40px]'>Dunyo bo'ylab kuniga taxminan</span>
                <h1 className='font-bold text-[40px] sm:text-[50px] text-[#7C67FE] lg:text-[60px]'>252 000</h1>
                <p className='font-bold text-[30px] sm:text-[40px]'>Vebsaytlar yaratiladi</p>
                </div>
                <div>
                    <Image src='/images/worldmap.webp' width={500} height={500} alt='World map image'/>
                </div>
            </div>
        </div>
    </section> 
  )
}

export default DayWebsite