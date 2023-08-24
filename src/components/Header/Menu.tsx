import { FC } from "react";
import { MenuItem } from "../Header";
import { useRouter } from "next/router";
import Link from "next/link";

export const Menu: FC<{ menuItems: MenuItem[] }> = ({ menuItems }) => {
  const router = useRouter();

  const activeTabClass =
    "inline-block p-4 text-black bg-my-subbrand rounded-t-lg active";
  const nonActiveTabClass =
    "inline-block p-4 rounded-t-lg hover:text-my-text hover:bg-my-subaccent";

  const ListItems = menuItems.map((item) => {
    return (
      <li className="mr-2" key={"MI-" + item.id}>
        <Link
          href={item.path}
          className={
            router.pathname === item.path ? activeTabClass : nonActiveTabClass
          }
        >
          {item.label}
        </Link>
      </li>
    );
  });

  return (
    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
      {ListItems}
    </ul>
  );
};
