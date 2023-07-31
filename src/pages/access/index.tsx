import Image from 'next/image'
import { Header } from '../../components/Header'
import accessImage from "../../../public/access01.jpg"
import { PRODUCTS } from '@/data/product'

export default function Product() {
    return (
        <div className="container p-3">
    <div className='bg-my-subbrand px-3 p-1 scroll-py-1 font-bold text-2xl'>
        アクセス
    </div>
            <div className='m-2'><iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.9239851196494!2d139.8804782943925!3d35.70348816401153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018864f08e2168b%3A0xe9c0edb8a445deb3!2z5p2x5qCE54m55q6K6Yu85p2Q77yI5qCq77yJ!5e0!3m2!1sja!2sjp!4v1534131934013" 
              width="641" 
              height="350" 
              frameBorder={0} 
              style={({border:0})} 
              allowFullScreen></iframe></div>
        <div>
            <div className="bg-my-subaccent p-1 font-bold">バスでお越しの方</div>
<div className="font-semibold text-lg">全路線「大杉第二小学校前」バス停下車、徒歩5分。</div>
<div className=" text-my-brand">都営新宿線 一之江駅（約7分）</div>
<ul className="list-disc list-inside">
    <li>一之江駅前 京成バス「シャトルセブン環07（急行）」小岩駅行</li>
    <li>一之江駅前 京成バス「シャトルセブン環08（急行）」亀有駅行</li>
    <li>一之江駅前 都営バス「新小20」東新小岩四丁目行</li>
</ul>
<div className="text-my-brand">JR 小岩駅（約15分）</div>
<ul className="list-disc list-inside">
    <li>小岩駅南口 京成バス「シャトルセブン環07（急行）」ディズニーリゾート行</li>
</ul>

<div className=" text-my-brand">JR 新小岩駅（約15分）</div>
<ul className="list-disc list-inside">
    <li>新小岩駅北口 都営バス「新小20」ー之江駅前行</li>
</ul>

<div className="bg-my-subaccent p-1 font-bold">お車でお越しの方</div>
京葉陸橋と環状7号線の交差点よりすぐ<br />
</div>
<div>
<Image src={accessImage} 
          alt="Outlook"
          className='rounded-lg w-fit mb-4 p-2'
        />
</div>
        </div>
    )
}
