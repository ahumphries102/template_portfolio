import Body from "@/app/components/Body"
import BodyContent from "@/app/components/BodyContent"
import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"
import Navbar from "@/app/components/Navbar"
import Image from "next/image"
import logo from "@/app/images/logo.png"
export default function Page({}) {
  const bodyInformation = {
    heroImage:
      "https://www.coravin.com/cdn/shop/articles/AdobeStock_791180394.jpg?v=1749185161",
    story: {
      header: "Our Story",
      content:
        "Blackwood Vineyards is a family-owned estate dedicated to producing small-batch, handcrafted wines. Our vineyards are cultivated with sustainable practices, ensuring every bottle captures the unique character of our terroir. From the delicate notes of our Pinot Noir to the crisp finish of our Chardonnay, each wine tells a story of tradition, care, and the rich Oregon soil. Founded on a passion for the land and the art of winemaking.",
    },
  }
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
        <div className="fixed top-4 left-4 z-[11]">
          <label className="drawer-button" htmlFor="my-drawer-1">
            <Image src={logo} alt="My Winery Logo" width="25" height="25" />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-1"
            aria-label="close sidebar"
            className="drawer-overlay"
          />
          <Navbar />
        </div>
      </div>
      <Body
        BodyContent={<BodyContent content={bodyInformation.story} />}
        Hero={<Header />}
      />
      <Footer />
    </>
  )
}
