import Image from 'next/image'
import { Header } from '../../components/Header'
import topImage from "../../public/top.jpg"
import { PRODUCTS } from '@/data/product'

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
        </div>
    )
}
