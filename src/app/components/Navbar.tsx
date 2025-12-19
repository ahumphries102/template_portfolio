import Link from "next/link"
const routes: string[] = ["Home", "About", "Contact"]
export default function Navbar({}) {
  return (
    <nav className="menu bg-success-content min-h-full w-[5%]">
      <div className=" relative top-20">
        <ul>
          {routes.map((text) => (
            <li key={text}>
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
