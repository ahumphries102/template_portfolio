"use client"
import Link from "next/link"
const routes: string[] = ["Home", "About", "Contact"]
export default function Navbar({}) {
  const closeDrawer = () => {
    const drawerCheckbox = document.getElementById("my-drawer-1") as HTMLInputElement;
    if (drawerCheckbox) {
      drawerCheckbox.checked = false;
    }
  };
  return (
    <nav className="menu bg-success-content min-h-full w-[5%]">
      <div className=" relative top-20">
        <ul>
          {routes.map((text) => (
            <li onClick={closeDrawer} key={text}>
              <Link href={text === "Home" ? "/" : `/${text.toLowerCase()}`} className="p-1 mt-1 text-white">
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
