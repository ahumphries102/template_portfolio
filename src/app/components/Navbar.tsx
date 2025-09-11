import Link from "next/link"
import Image from "next/image"

const routes: string[] = ["Home", "About", "Contact"]
export default function Navbar({}) {
  return (
    <nav className="flex justify-between items-center py-3 px-5 sticky top-0 z-2">
      <div>
        <Image
          src="https://images.vexels.com/media/users/3/321843/isolated/preview/842d2927d935f3a487e612b126ac1893-drawing-of-a-glass-of-wine.png"
          alt="My Winery Logo"
          width="50"
          height="50"
        />
      </div>
      <ul className="flex list-none">
        {routes.map((text) => (
          <li key={text} style={{ marginRight: "50px" }}>
            <Link href={text === "Home" ? "/" : `/${text.toLowerCase()}`}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
      <div></div> {/* spacer */}
    </nav>
  )
}
