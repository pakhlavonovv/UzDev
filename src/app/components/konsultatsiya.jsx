'use client'
import './style.css'
import Image from 'next/image'
import { useState } from 'react'

const Konsultatsiya = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        const botToken = process.env.NEXT_PUBLIC_BOT_TOKEN
        const chatId = process.env.NEXT_PUBLIC_TELEGRAM_USER_ID

        const message = `📩 *Yangi Konsultatsiya So'rovi* \n\n👤 Ism: ${name}\n📞 Telefon: ${phone}`

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
                setPhone('')
            } else {
                console.error('Telegramga yuborishda xatolik.')
            }
        } catch (err) {
            console.error('Xatolik:', err)
        }

        setLoading(false)
    }

    return (
        <section className='container flex flex-col gap-4 lg:gap-6 lg:flex-row items-center'>
            <div className='flex items-center justify-center'>
                <Image
                    src='/images/konsultatsiya.avif'
                    alt='Konsultatsiya rasmi'
                    className='md:w-[500px] lg:w-[800px] xl:w-[600px]'
                    width={300}
                    height={300}
                />
            </div>
            <div className='px-6 py-4 md:px-10 xl:py-12 bg-[#F3F8FF] rounded-xl w-full h-full flex flex-col gap-1 md:gap-4 max-w-[600px]'>
                <h1 className='font-bold text-[25px] md:text-[30px] lg:text-[35px]'>Bepul Konsultatsiya</h1>
                <p className='md:text-[16px]'>
                    Telefon raqamingizni yozib qoldiring, biz sizga qoʻngʻiroq qilamiz va birorta ham savolingiz javobsiz qolmasligiga harakat qilamiz
                </p>
                <form onSubmit={handleSubmit} className='flex flex-col gap-2 md:gap-4'>
                    <input
                        type='text'
                        className='w-full p-3 rounded-xl outline-[#F5613F]'
                        placeholder='Ismingiz'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
            </div>
        </section>
    )
}

export default Konsultatsiya
