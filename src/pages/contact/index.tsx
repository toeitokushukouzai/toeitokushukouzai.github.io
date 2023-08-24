import Image from "next/image";
import { Header } from "../../components/Header";
import topImage from "../../public/top.jpg";
import { PRODUCTS } from "@/data/product";

export default function Contact() {
  const questionaireStyle = {
    border: "none",
    padding: "0",
  };
  return (
    <div className="container p-3">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdbX_flUQEwQJ0ZBsBIxZf-Wih9xnkK1nTyuqC_teTjYnZL0w/viewform?embedded=true"
        width="800"
        height="1500"
        style={questionaireStyle}
      >
        読み込んでいます…
      </iframe>
    </div>
  );
}
