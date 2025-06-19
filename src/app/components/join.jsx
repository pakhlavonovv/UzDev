import './style.css'
import Image from 'next/image'
import Link from 'next/link'
import JoinImage from '../../../public/images/join.webp'
const Join = () => {
  return (
    <section className='bg-[#7C67FE] pb-6 mt-[-50px]'>
        <div className='container flex flex-col items-center gap-1 text-white'>
            <div className="flex flex-col gap-2 justify-center items-center lg:flex-row-reverse">
                <h1 className='text-[35px] w-[90%] md:w-full md:text-[30px] lg:text-[45px] text-center font-bold order-2'>Raqamli Dunyoning Yuzi Bo'ling</h1>
                <Image src={JoinImage} className='order-1 w-[100%] min:[700px]:max-w-[300px] xl:max-w-[480px]' alt='Join image'/>
            </div>
            <div className="w-[80%] flex flex-col items-center justify-center gap-2">
                <p className='text-center sm:text-[18px] md:text-[20px] font-bold sm:font-normal'>Hech qanday oldingi bilimlarsiz 8 oyda frontend texnologiyalarini mukammal o‘zlashtiring va raqamli olamda yorqin iz qoldiring.</p>
                  <Link
              href="/course-category"
              className="bg-[#F5613F] px-6 py-2 rounded-md border-[1px] border-[#F5613F] transition-colors hover:bg-transparent"
            >
              O'qishni xohlayman
            </Link>
            </div>
        </div>
    </section>
  )
}

export default Join