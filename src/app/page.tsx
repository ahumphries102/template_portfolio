import Body from "@/app/components/Body"
import BodyContent from "@/app/components/BodyContent"
import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"
import Navbar from "@/app/components/Navbar"
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
    <div>
      <Navbar />
      <Body
        BodyContent={<BodyContent content={bodyInformation.story} />}
        Hero={<Header image={bodyInformation.heroImage} />}
      />
      <Footer />
      <></>
    </div>
  )
}
