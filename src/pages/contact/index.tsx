import Image from 'next/image'
import { Header } from '../../components/Header'
import topImage from "../../public/top.jpg"
import { PRODUCTS } from '@/data/product'

export default function Contact() {

    const questionaireStyle = {
        border: 'none',
        padding: '0',
    }
    return (
        <div className="container p-3">
            <div>お問い合わせ</div>
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSexTxirmUDbag0oySua2TyUODYAwdtPvTa7z2-TZ8j4MTCbhQ/viewform?embedded=true" 
              width="640" height="800" 
              style={questionaireStyle}>読み込んでいます…</iframe>
        </div>
    )
}
