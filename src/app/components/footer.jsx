import Link from "next/link"
import './style.css'
const Footer = () => {
  return (
    <footer className="bg-black text-white p-4 py-6">
        <div className="container flex items-center justify-between">
        <Link className="font-bold text-[30px]" href='/'>UzDev</Link>
        <div className=" flex gap-3 items-center">
            <Link href={'/courses'}>Kurslar</Link>
            <Link href={'/contact'}>Kurslar</Link>
            <Link href={'/category'}>Kategorya</Link>
        </div>
        </div>

    </footer>
  )
}

export default Footer