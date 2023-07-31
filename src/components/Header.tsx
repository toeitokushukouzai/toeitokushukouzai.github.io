import { Menu } from "./Header/Menu"

export type MenuItem = {
  id: string
  label: string
  path: string
}


export const Header = () => {

  const menuItems = [
    {id: "Home", label: "ホーム", path: "/"},
    {id: "About", label: "会社概要", path: "/about"},
    {id: "Product", label: "取り扱い製品", path: "/product"},
    {id: "Contact", label: "お問い合わせ", path: "/contact"},
    {id: "Access", label: "アクセス", path: "/access"}
  ]

    return <header className="bg-my-bg">
            <div className="flex flex-row">
                <div className="basis-3/5">
                  <h1 className="text-xl p-2 sm:text-3xl font-bold text-my-blue">東栄特殊鋼材株式会社</h1>
                </div>
                <div className="basis-2/5 text-right pt-1 pr-3">
                    TEL：<a href="tel:03-3654-2381">03-3654-2381</a><br /> FAX：03-3674-5261
                </div>
            </div>
            <div className="flex flex-row">
              <div className="basis-1/3">
                <h5 className="text-lg pl-4 sm:text-xl italic text-my-brand">ハガネ屋として半世紀</h5>
              </div>
              <div className="basis-2/3">
                <Menu menuItems={menuItems}/>
              </div>
            </div>
    </header>
}