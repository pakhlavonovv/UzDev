import Link from "next/link"
const UnderFooter = () => {
  return (
    <section className='bg-[#FAFAFA] w-full h-[300px] flex flex-col items-center justify-center'>
        <h1 className="font-bold text-[30px] text-center">Kurslarimizni o'qishda tayyormisiz?</h1>
        <p className="text-center">Kodlar orqali fikr aytiladi, dizayn orqali his etiladi — bu yerda ikkalasi birlashadi</p>
        <Link href='courses' className="bg-[#755EFD] border-[1px] border-[#755EFD] py-2 px-6 md:py-4 md:px-6 text-white rounded-md mt-2 transition-all hover:bg-transparent hover:text-[#755EFD]">O'qishni xohlayman</Link>
    </section>
  )
}

export default UnderFooter