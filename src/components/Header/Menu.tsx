import { FC } from "react"
import { MenuItem } from "../Header"
import { useRouter } from "next/router"
import Link from "next/link"


export const Menu: FC<{menuItems: MenuItem[]}> = ({menuItems}) => {

    const router = useRouter()

    const activeTabClass = "inline-block p-4 text-blue-600 bg-blue-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
    const nonActiveTabClass = "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
    console.log("Path = " + router.pathname)
    const ListItems = menuItems.map(item => {
        return <li className="mr-2"
        key={"MI-" + item.id}>
            <Link href={item.path} 
              className={router.pathname === item.path ? activeTabClass : nonActiveTabClass}>{item.label}</Link>
        </li>
    })

    return <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        {ListItems}
    </ul>
    
}