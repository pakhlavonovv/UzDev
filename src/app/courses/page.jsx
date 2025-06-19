import Header from "../components/header"
import Image from "next/image"
import '../components/style.css'
import Footer from "../components/footer"
import Link from "next/link"
const Page = () => {
    return (
        <>
            <div className="mb-9">
                <Header />
            </div>
            <div className="mb-[100px]">
            <div className="container flex items-center justify-between gap-2">
                <Image src={'/images/frontend.png'} className="rounded-xl" alt="Frontend rasmi" width={600} height={600} />
                <Image src={'/images/frontend-logo.png'} className="rounded-xl hidden lg:flex" alt="Frontend rasmi" width={300} height={300} />
            </div>
            <div className="container flex flex-col gap-2">
                <h1 className="text-[25px] font-bold">0 dan Frontend kursi</h1>
                <p>Frontend kursni siz bizda 8 oyda eng kamida 15 dan ko'p loyihalar ustida ishlagan holda tugatasiz. Kursda sanab o'tilgandek Html, Css, Sass, Bootstrap, Tailwind css, Ant design, Material ui, Javascript, Firebase, Next.js kabi texnologiyalar o'rganasiz. Kurs ohirida esa sizga Amaliy va nazariy bilimlaringiz kuchaytirish uchun sizga xar-hil loyiha va savol-javoblar bo'lib o'tadi! Muammolarni o'zingiz topishni va tuzatish ni o'rganasiz va Ish topish haqidaxam darslar bo'ladi, juda tushunarli qilgan holda bizning ustozlar sizlarga tushuntirib beradilar. Kurs yakunida sizga muvaffaqiyatli kursni bitirganingiz uchun Sertifikat beriladi va shu bilan kursni tamomlaysiz.</p>
                <strong>Kurs davomida Ish uchun juda muhim bo'lgan Portfolio va Rezyume to'ldirib borasiz!</strong>
                <strong>Kurs yakunida Sertifikatdan tashqari yana bir muhim narsa qoladi va beriladi. Bular video darsliklar, sertifikat va Notion. Notion da ish ga topshirishda so'raladigon 50% dan 100% gacha savol-javoblar mavjud bo'ladi. </strong>
                <Link className="bg-[#7C67FE] w-full h-[40px] text-[16px] font-bold flex items-center justify-center text-white rounded-sm" href={'https://t.me/UzDev_Education'}>Kursni o'qishni boshlash</Link>
            </div>
            </div>
             <div>
            <div className="container flex items-center justify-between gap-2">
                <Image src={'/images/frontend2.png'} className="rounded-xl" alt="Frontend rasmi" width={600} height={600} />
                <Image src={'/images/frontend-logo.png'} className="rounded-xl hidden lg:flex" alt="Frontend rasmi" width={300} height={300} />
            </div>
            <div className="container flex flex-col gap-2">
                <h1 className="text-[25px] font-bold">Kerakli darslarni o'qish</h1>
                <p>Bu kurs davomida siz quydagi mavzularda: Html, Css, Sass, Bootstap, Tailwind css, Ant design, Material ui, Javascript, React.js va Next.js dan xohlagan darsni sotib olishingiz mumkin. Kurs davomiyligi: 1 ta to'liq tushuntirilgan video darslik. Video darslik ko'rib bo'lgandan keyin ustoz bilan suhbat bo'ladi va bunda siz ustozga tushunmagan savolingizga javob topasiz!</p>
                <Link className="bg-[#7C67FE] w-full h-[40px] text-[16px] font-bold flex items-center justify-center text-white rounded-sm" href={'https://t.me/UzDev_Education'}>Kursni o'qishni boshlash</Link>
            </div>
            </div>
            <div className="mt-9">
            <Footer/>
            </div>
        </>
    )
}

export default Page