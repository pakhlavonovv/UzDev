import './style.css'
import Link from 'next/link'
const CourseCategory = () => {
    return (
        <div className='w-full container flex flex-col gap-2 lg:gap-4 items-center justify-center sm:flex-row'>
            <div className='rounded-lg border-[1px] sm:h-[700px] flex flex-col items-center justify-center border-[#F5613F] w-[90%] min:[1600px]:max-w-[600px] p-4'>
                <h1 className='text-[20px] sm:text-[25px] min-[800px]:text-[30px] text-center font-bold'>Kursni 0 dan boshlab o'rganish</h1>
                <p className='text-center'>8 oy ichida nima qila olaman va nima o'rganaman?</p>
                <ol className='lg:text-[20px]'>HTML</ol>
                <ol className='lg:text-[20px]'>CSS</ol>
                <ol className='lg:text-[20px]'>Bootstrap</ol>
                <ol className='lg:text-[20px]'>Tailwind css</ol>
                <ol className='lg:text-[20px]'>Materila Ui</ol>
                <ol className='lg:text-[20px]'>Ant design</ol>
                <ol className='lg:text-[20px]'>SASS</ol>
                <ol className='lg:text-[20px]'>Javascript</ol>
                <ol className='lg:text-[20px]'>Firebase</ol>
                <ol className='lg:text-[20px]'>React.js</ol>
                <ol className='lg:text-[20px]'>Next.js</ol>
                <br />
                <ol className='text-center font-bold md:text-[17px]'>10 haqiqiy loyihalar</ol>
                <ol className='text-center font-bold md:text-[17px]'>Ish topishda qanday topish va qanday to'g'ri topish sirlari</ol>
                <ol className='text-center font-bold md:text-[17px]'>Ishga topishirishda qanday 100% tayyor bo'lish</ol>
                <ol className='text-center font-bold md:text-[17px]'>Muammoni qanday qilib hal qilish va tez hal qilish</ol>
                <Link
                    href="/"
                    className="bg-[#F5613F] mt-[20px] px-6 py-2  text-white rounded-md border-[1px] border-[#F5613F] transition-colors hover:text-black hover:bg-transparent"
                >
                    0 dan o'rganish
                </Link>
            </div>
            <div className='rounded-lg border-[1px] sm:h-[700px] flex flex-col items-center justify-center border-[#F5613F] w-[90%] min:[1600px]:max-w-[600px] p-4'>
                <h1 className='text-[20px] sm:text-[25px] min-[800px]:text-[30px] text-center font-bold'>Kerakli darslarni o'rganish</h1>
                <Link className='hover:bg-gray-300 p-3 underline lg:text-[18px]' href='/'>HTML o'rganish</Link>
                <Link className='hover:bg-gray-300 p-3 underline lg:text-[18px]' href='/'>CSS o'rganish</Link>
                <Link className='hover:bg-gray-300 p-3 underline lg:text-[18px]' href='/'>Bootstrap o'rganish</Link>
                <Link className='hover:bg-gray-300 p-3 underline lg:text-[18px]' href='/'>Tailwind css o'rganish</Link>
                <Link className='hover:bg-gray-300 p-3 underline lg:text-[18px]' href='/'>Materila Ui o'rganish</Link>
                <Link className='hover:bg-gray-300 p-3 underline lg:text-[18px]' href='/'>Ant design o'rganish</Link>
                <Link className='hover:bg-gray-300 p-3 underline lg:text-[18px]' href='/'>SASS o'rganish</Link>
                <Link className='hover:bg-gray-300 p-3 underline lg:text-[18px]' href='/'>Javascript o'rganish</Link>
                <Link className='hover:bg-gray-300 p-3 underline lg:text-[18px]' href='/'>Firebase o'rganish</Link>
                <Link className='hover:bg-gray-300 p-3 underline lg:text-[18px]' href='/'>React.js o'rganish</Link>
                <Link className='hover:bg-gray-300 p-3 underline lg:text-[18px]' href='/'>Next.js o'rganish</Link>
            </div>
        </div>
    )
}

export default CourseCategory