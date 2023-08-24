import Image from "next/image";
import { Header } from "../../components/Header";
import aboutImage from "../../../public/about01.jpg";
import aboutImage2 from "../../../public/about02.jpg";

export default function About() {
  return (
    <>
      <div className="container p-3">
        <div className="bg-my-subbrand px-3 p-1 scroll-py-1 font-bold text-2xl">
          ご挨拶
        </div>
        <p>
          皆様、こんにちは。
          <br />
          昭和35年創業の東栄特殊鋼材と申します。
          <br />
          ハイス鋼をはじめとする特殊鋼からステンレス、普通鋼、非鉄、一般鋼材など様々な鋼種を扱っております。
          <br />
          <br />
          弊社は創業以来、一貫してハガネを生業として社歴を刻んで参りました。
          <br />
          <br />
          これも偏に、世界に誇る匠の技を持つ、
          <br />
          数多くのお客様から頂きましたご愛顧の賜物と深く感謝申し上げます。
          <br />
          <br />
          これからも、お客様にご満足、ご信頼頂ける様、培われたノウハウを活かし、幅広い分野で多様なニーズにお応えできる会社を目指して精進して参ります。
          <br />
          <br />
          今後とも、倍旧のご指導ご鞭撻を賜りますよう、お願い申し上げます。
          <br />
          <br />
          東栄特殊鋼材株式会社
          <br />
          代表取締役社長 原 照一郎
        </p>
        <Image
          src={aboutImage}
          alt="OfficeEntrance"
          className="rounded-lg w-fit mb-4"
        />
      </div>
      <div className="container p-3">
        <table className="table-fixed border-collapse">
          <thead>
            <tr>
              <th className="border bg-my-accent" colSpan={2}>
                会社情報
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border">社名</td>
              <td className="border">東栄特殊鋼材株式会社</td>
            </tr>
            <tr>
              <td className="border">代表取締役社長</td>
              <td className="border">原 照一郎</td>
            </tr>
            <tr>
              <td className="border">創業</td>
              <td className="border">昭和35年3月</td>
            </tr>
            <tr>
              <td className="border">本社</td>
              <td className="border">
                〒132-0022 東京都江戸川区大杉3丁目15番13号
              </td>
            </tr>
            <tr>
              <td className="border">電話</td>
              <td className="border">03-3654-2381</td>
            </tr>
            <tr>
              <td className="border">FAX</td>
              <td className="border">03-3674-5261</td>
            </tr>
            <tr>
              <td className="border">事業内容</td>
              <td className="border">特殊鋼販売</td>
            </tr>
            <tr>
              <td className="border">設備機械</td>
              <td className="border">
                バンドソー切断機
                <br />
                PCSAW430（アマダ）
                <br />
                UGA330（大東精機）
                <br />
                丸鋸切断機
                <br />
                TK5C-102GL（津根精機）
                <br />
                クレーン 2.8t 1台
                <br />
                クレーン 2t 1台
              </td>
            </tr>
            <tr>
              <td className="border">加入団体</td>
              <td className="border">
                <ul>
                  <li>一般社団法人 全日本特殊鋼流通協会</li>
                  <li>東京商工会議所</li>
                  <li>公益社団法人 東京青年会議所</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="container p-3">
        <Image
          src={aboutImage2}
          alt="OfficeEntrance"
          className="rounded-lg w-fit mb-4"
        />
      </div>
    </>
  );
}
