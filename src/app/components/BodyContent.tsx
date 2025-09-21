import Image from "next/image"
export default function BodyContent({ content }) {
  const instagramImages = [
    "https://plus.unsplash.com/premium_photo-1681841594224-ad729a249113?q=80&w=754&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1534655882117-f9eff36a1574?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ]
  return (
    <>
      <section className="p-5">
        <section className="my-20 relative flex w-full">
          <div className="w-1/2">
            <p className="text-4xl">{content.content}</p>
            <button className="underline mt-10">Read More</button>
          </div>
        </section>
        <section>
          <div className="relative left-20 z-2 w-[30%] top-8">
            <h1 className="text-7xl font-bold">Instagram</h1>
          </div>
          <a
            href="https://www.instagram.com/"
            className="flex flex-row-reverse gap-5 px-5"
          >
            {instagramImages.map((image, index) => (
              <div
                key={index}
                className="h-[700px] w-[30%] relative columns-30"
              >
                <Image src={image} fill alt="Wine Image" />
              </div>
            ))}
          </a>
          <section className="p-20">
            <p className="text-7xl text-center">Schedule a tour or tasting</p>
          </section>
        </section>
      </section>
    </>
  )
}
