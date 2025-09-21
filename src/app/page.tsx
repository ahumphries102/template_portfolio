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
    <div className="bg-[url('https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-black/50 bg-blend-multiply">
      <Navbar />
      <Body
        BodyContent={<BodyContent content={bodyInformation.story} />}
        Hero={<Header/>}
      />
      <Footer />
      <></>
    </div>
  )
}
