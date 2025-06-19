import './style.css'
import Image from 'next/image'
const Why = () => {
  return (
    <section className='container'>
        <h1 className='font-bold text-[30px]'>Nima uchun "UzDev" da o'qish kerak?</h1>
        <div className='grid grid-cols-1 gap-3 mt-5 md:grid-cols-2'>
            <div className='w-100% bg-[#F3F8FF] flex flex-col gap-1 px-6 rounded-xl p-4'>
                <Image src='/images/chat.png' alt='Conversation image' width={30} height={30}/>
                <h2 className='font-bold text-[22px]'>Har hafta ustoz bilan onlayn suhbat</h2>
                <p className='text-gray-600'>Har dushanba va chorshanba kunlari onlayn tarzda ustoz bilan suhbat.</p>
            </div>
            <div className='w-100% bg-[#F3F8FF] flex flex-col gap-1 px-6 rounded-xl p-4'>
                <Image src='/images/brain.webp' alt='Conversation image' width={30} height={30}/>
                <h2 className='font-bold text-[22px]'>Sifatli ta'lim</h2>
                <p className='text-gray-600'>Doimiy yangilanib boradigan kurslar va katta tajribaga ega ustozlar.</p>
            </div>
            <div className='w-100% bg-[#F3F8FF] flex flex-col gap-1 px-6 rounded-xl p-4'>
                <Image src='/images/service.png' alt='Conversation image' width={30} height={30}/>
                <h2 className='font-bold text-[22px]'>Doimo ishlaydigon ustozlar</h2>
                <p className='text-gray-600'>Dushanbadan-shanbagacha ishlaydigon ustozlar sizning muammolaringiz ustida ishlash uchun doimo yordamda!</p>
            </div>
            <div className='w-100% bg-[#F3F8FF] flex flex-col gap-1 px-6 rounded-xl p-4'>
                <Image src='/images/work.webp' alt='Conversation image' width={30} height={30}/>
                <h2 className='font-bold text-[22px]'>Suhbatga tayyorlash</h2>
                <p className='text-gray-600'>Oyda bir marotaba xar bir o'quvchi bilan nazariy va amaliy onlayn kichik imtihon bo'lib o'tadi.</p>
            </div>
            <div className='w-100% bg-[#F3F8FF] flex flex-col gap-1 px-6 rounded-xl p-4'>
                <Image src='/images/search.png' alt='Conversation image' width={30} height={30}/>
                <h2 className='font-bold text-[22px]'>Ish topish</h2>
                <p className='text-gray-600'>Kurs yakunida qanday qilib va qayerdan ish topish haqida ma'lumotlar beriladi.</p>
            </div>
            <div className='w-100% bg-[#F3F8FF] flex flex-col gap-1 px-6 rounded-xl p-4'>
                <Image src='/images/sertifikat.png' alt='Conversation image' width={30} height={30}/>
                <h2 className='font-bold text-[22px]'>Sertifikat</h2>
                <p className='text-gray-600'>Kursni muvaffaqiyatli tamomlagan o‘quvchilar “UzDev”ning sertifikatiga ega bo‘ladi.</p>
            </div>
        </div>
        <div className='mt-10'>
                 <h1 className='font-bold text-[30px]'>Faqat Kerakli kurslarda o'qimoqchi bo'lganlar uchun kurs ma'lumoti</h1>
                     <div className='grid grid-cols-1 gap-3 mt-5 md:grid-cols-2'>
            <div className='w-100% bg-[#F3F8FF] flex flex-col gap-1 px-6 rounded-xl p-4'>
                <Image src='/images/video.png' alt='Conversation image' width={30} height={30}/>
                <h2 className='font-bold text-[22px]'>Video dars</h2>
                <p className='text-gray-600'>Mavzuni to'liq tushuntiruvchi video darslik.</p>
            </div>
            <div className='w-100% bg-[#F3F8FF] flex flex-col gap-1 px-6 rounded-xl p-4'>
                <Image src='/images/education.webp' alt='Conversation image' width={30} height={30}/>
                <h2 className='font-bold text-[22px]'>Suhbat</h2>
                <p className='text-gray-600'>Ustoz bilan bir martalik suhbat va muhim savollaringiz javob olish imkoniyati.</p>
            </div>
        </div>
        </div>
        
    </section>
  )
}

export default Why