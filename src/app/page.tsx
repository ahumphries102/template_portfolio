import Image from "next/image"
import "@/app/styles/styling.css"
import Link from "next/link"
import Header from "@/app/home/header"
export default function HomeContent() {
  const bodyInformation = {
    heroImage:
      "https://www.coravin.com/cdn/shop/articles/AdobeStock_791180394.jpg?v=1749185161",
    story: {
      header: "Our Story",
      content:
        "Blackwood Vineyards is a family-owned estate dedicated to producing small-batch, handcrafted wines. Our vineyards are cultivated with sustainable practices, ensuring every bottle captures the unique character of our terroir. From the delicate notes of our Pinot Noir to the crisp finish of our Chardonnay, each wine tells a story of tradition, care, and the rich Oregon soil. Founded on a passion for the land and the art of winemaking.",
    },
  }
  const instagramImages = [
    "https://plus.unsplash.com/premium_photo-1681841594224-ad729a249113?q=80&w=754&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1534655882117-f9eff36a1574?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ]
  return (
    <>
      <section>
        <Header />
      </section>
      <section className="">
        <section className="h-[1500px]">
          <div className="flex relative">
            <div className="w-1/2 bg-white/100 mr-10 flex justify-center items-center h-300">
              <div>
                <h1 className="text-6xl relative mb-4 after:border-b after:w-[45%] after:left-0 after:top-18 after:absolute">
                  Quality
                </h1>
                <p className="mr-5 w-110 ">{bodyInformation.story.content}</p>
                <button className="underline mt-10">Read More</button>
              </div>
            </div>
            <div className="h-250 w-150 absolute left-200 top-40 [&::after]:content-[border-b]">
              <Image
                src={
                  "https://images.pexels.com/photos/2912108/pexels-photo-2912108.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                }
                alt="Vineyard Image"
                fill
              />
            </div>
          </div>
        </section>
        <section className="h-[1000px] relative flex justify-center items-center">
          <div className="w-full">
            <h1 className="text-9xl font-bold text-white mb-5">Instagram</h1>
            <div className="flex gap-5 overflow-hidden">
              {instagramImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[500px] h-[600] relative left-100"
                >
                  <Link href="https://www.instagram.com/">
                    <Image src={image} alt="Wine Image" fill />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="h-[1500px] flex justify-center items-center">
          <Link href="contact" className="text-7xl text-white">
            <h1>Schedule a tasting</h1>
          </Link>
        </section>
      </section>
    </>
  )
}
