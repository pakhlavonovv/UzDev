'use client'
import '../components/style.css'
import Image from 'next/image'
import { useState } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

const Page = () => {
    const [name, setName] = useState('')
    const [question, setQuestion] = useState('')
    const [phone, setPhone] = useState('')
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [errorModal, setErrorModal] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        const botToken = process.env.NEXT_PUBLIC_BOT_TOKEN
        const chatId = process.env.NEXT_PUBLIC_TELEGRAM_USER_ID

        const message = `
📩 *Yangi Konsultatsiya So'rovi* 

👤 *Ism:* ${name}
❓ *Savol/muammo:* ${question}
📞 *Telefon:* +998${phone}
`

        const url = `https://api.telegram.org/bot${botToken}/sendMessage`

        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message,
                    parse_mode: 'Markdown',
                }),
            })

            if (res.ok) {
                setSuccess(true)
                setName('')
                setQuestion('')
                setPhone('')
            } else {
                setErrorMessage("Telegramga yuborishda xatolik yuz berdi. Iltimos, keyinroq urinib ko‘ring.")
                setErrorModal(true)
            }
        } catch (err) {
            setErrorMessage("Internet yoki server bilan bog‘liq muammo yuz berdi. Iltimos, qaytadan urinib ko‘ring.")
            setErrorModal(true)
        }

        setLoading(false)
    }

    return (
        <div className='flex flex-col justify-between min-h-screen'>
            <div className="mb-9">
                <Header />
            </div>
            <div className='container flex flex-col gap-4 items-center'>
                <div className='px-6 py-4 md:px-10 xl:py-12 bg-[#F3F8FF] rounded-xl w-full h-full flex flex-col gap-1 md:gap-4 max-w-[600px]'>
                    <h1 className='font-bold text-[25px] md:text-[30px] lg:text-[35px] text-center'>Savol va muammolaringizni yozib qoldiring</h1>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-2 md:gap-4'>
                        <input
                            type='text'
                            className='w-full p-3 rounded-xl outline-[#F5613F]'
                            placeholder='Ismingiz'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            type='text'
                            className='w-full p-3 rounded-xl outline-[#F5613F]'
                            placeholder='Savol yoki muammoyingiz'
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            required
                        />
                        <div className='flex'>
                            <span className='bg-white p-3 px-4 rounded-l-xl border border-r-0 border-gray-300 text-gray-600 select-none'>
                                +998
                            </span>
                            <input
                                type='tel'
                                className='w-full p-3 rounded-r-xl border border-gray-300 outline-[#F5613F]'
                                placeholder='Telefon raqamingiz'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>

                        <button
                            type='submit'
                            className='bg-[#F5613F] text-white py-4 px-4 rounded-lg text-[16px] font-bold transition-all hover:bg-[#f5603f9d]'
                            disabled={loading}
                        >
                            {loading ? 'Yuborilmoqda...' : 'Yuborish'}
                        </button>
                        {success && <p className='text-green-600 text-center font-medium'>Maʼlumot yuborildi. Tez orada siz bilan bog'lanamiz!</p>}
                    </form>
                    {errorModal && (
                        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
                            <div className='bg-white p-6 rounded-lg shadow-md max-w-sm w-full'>
                                <h2 className='text-xl font-bold mb-2 text-red-600 text-center'>Xatolik</h2>
                                <p className='mb-4 text-center'>{errorMessage}</p>
                                <div className="flex justify-center">
                                    <button
                                        onClick={() => setErrorModal(false)}
                                        className='bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition'
                                    >
                                        Yopish
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
            <div className="mt-9">
                <Footer />
            </div>
        </div>
    )
}

export default Page
