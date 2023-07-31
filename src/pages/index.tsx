import Image from 'next/image'
import { Header } from '../components/Header'
import topImage from "../../public/top.jpg"

export default function Home() {

  return (
    <>
      <div className="container py-1 px-3">
        <Image src={topImage} 
          alt="OfficeEntrance"
          className='rounded-lg w-fit mb-4'
        />
        <div className='bg-my-subbrand px-3 p-1 scroll-py-1 font-bold text-2xl'>
          ホーム
        </div>
        
        <div className="flex flex-row">
          <div className="basis-full bg-my-accent font-bold p-2 m-3 text-white">
          はい、東栄です。毎度ありがとうございます！
          </div>
        </div>
        
        <div className="flex flex-row">
          <div className="basis-full">
          東栄特殊鋼材株式会社は、<br />
特殊鋼を中心に非鉄、一般鋼材など、様々なブランドの、多様な鋼種を取り扱っております。<br />
<br />
中でも、機械工業用刃物などに使用される、<br />
<span className="text-red">SKH51、SUS440C、SKS2、SKD11、SUJ2、SUS420J2</span> <br />
の薄板を常に在庫しております。<br />
切断販売もおこなっております。<br />
<br />
<div className='text-my-accent'>
弊社の目指すところは、様々なご要望に、柔軟に対応できるハガネ屋です。<br />
<ul className="list-disc list-inside">
  <li>特定の材質の平角材が欲しいのに、丸材しかないと言われた事はございませんか？</li>
  <li>材料が素早く手に入らず、お困りではございませんか？</li>
  <li>個人のお客様で、少量の鋼材が必要な際、購入に関してお困りの事はございませんか？</li>
</ul>
</div>
<br />
価格、納期、鋼種、寸法など、<br />
どんなことでもお気軽にご相談ください。<br />
<br />
社員ー同ご連絡心よりお待ちしております。
          </div>
        </div>
      </div>
    </>
  )
}
