import Link from "next/link"
import Image from "next/image"

const routes: string[] = ["Home", "About", "Contact"]
export default function Navbar({}) {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between", // Changed from "center"
          alignItems: "center",
          borderBottom: "1px solid #ccc",
          padding: "10px 20px", // Added padding for better spacing
        }}
      >
        <div style={{ flexShrink: 0 }}> {/* Logo Container */}
          <Image
            src="https://images.vexels.com/media/users/3/321843/isolated/preview/842d2927d935f3a487e612b126ac1893-drawing-of-a-glass-of-wine.png"
            alt="My Winery Logo"
            width="50"
            height="50"
          />
        </div>

        <ul
          style={{
            display: "flex",
            listStyleType: "none", // Remove bullet points
            margin: 0, // Remove default ul margins
            padding: 0, // Remove default ul padding
            justifyContent: "center", // Center the links
            alignItems: "center",
          }}
        >
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
    </div>
  )
}