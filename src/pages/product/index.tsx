import Image from 'next/image'
import { Header } from '../../components/Header'
import topImage from "../../public/top.jpg"
import { PRODUCTS } from '@/data/product'
import Link from 'next/link'

export default function Product() {
    const trs = PRODUCTS.map((product, index) => {
        return <tr key={index}>
            <td className='border'>{product[0]}</td>
            <td className='border'>{product[1].split("\n").map((line,index, array) => {
                return index === array.length - 1 ? <>{line}</> : <>{line}<br/></>
            })}</td>
        </tr>
    })
    return (
        <div className="container p-3">
            <table className='table-fixed border-collapse'>
                <thead>
                    <tr>
                        <td className="border bg-my-subbrand" colSpan={2}>取り扱い製品</td>
                    </tr>
                </thead>
                <tbody>
                    {trs}
                </tbody>
            </table>
    <div className='bg-my-subaccent px-3 p-1 scroll-py-1 font-bold'>
    その他在庫ございます。
        </div>
            <p>
お気軽にお問合せください。→<Link className="underline text-blue" href="/contact">お問合せ</Link><br />
電話番号 <a href="tel:03-3654-2381">03-3654-2381</a> 担当：原達德
            </p>
        </div>
    )
}
