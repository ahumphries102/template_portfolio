import Image from "next/image"
import "@/app/styles/styling.css"
import Link from "next/link"
import Header from "@/app/Home/header"
export default function BodyContent({ content }) {
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
    "https://images.unsplash.com/photo-1598306442928-4d90f32c6866?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735",
    "https://images.unsplash.com/photo-1658994067420-d0236fe04482?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
  ]
  return (
    <>
    <section>
      <Header />
    </section>
      <section className="">
        <section className="h-[1500px] relative flex justify-center items-center">
          <div className="p-20">
            <p className="text-6xl leading-20">
              {bodyInformation.story.content}
            </p>
            <button className="underline mt-10">Read More</button>
          </div>
        </section>
        <section className="h-[1500px] relative flex justify-center items-center">
          <div className="w-full">
            <div className="relative z-2 top-4">
              <h1 className="text-7xl font-bold">Instagram</h1>
            </div>
            <div className="overflow-x-scroll fancy-h-scrollbar">
              <div className="flex flex-nowrap w-max gap-5">
                {instagramImages.map((image, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[700px] h-[700px] rounded-lg overflow-hidden"
                  >
                    <a
                      href="https://www.instagram.com/"
                      className="block h-full w-full"
                    >
                      <Image
                        src={image}
                        alt="Wine Image"
                        width={700}
                        height={700}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="h-[1500px] flex justify-center items-center">
          <Link href="/contact" className="text-7xl">
            Schedule a tour or tasting
          </Link>
        </section>
      </section>
    </>
  )
}
