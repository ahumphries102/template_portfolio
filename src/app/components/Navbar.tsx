import Link from "next/link"

const routes: string[] = ["Home", "About", "Contact"]

export default function Navbar({}) {
  return (
    <div>
      <nav>
        <ul>
          {routes.map((text) => (
            <li key={text} style={{ display: "inline", "marginRight": "10px" }}>
              <Link href={text === "Home" ? "/" : `/${text.toLowerCase()}`}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
