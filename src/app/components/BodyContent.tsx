import Image from "next/image"
export default function BodyContent({ content }) {
  return (
    <>
      <section className="p-5">
        <section className="h-150 my-20 relative flex w-full">
          <div className="w-1/2">
            <p className="text-4xl">{content.content}</p>
            <button className="underline mt-10">Read More</button>
          </div>
        </section>
        <section className="relative w-full h-screen mx-auto flex justify-center">
          <div className="bg-[url(https://www.thetopvillas.com/blog/wp-content/uploads/2018/07/wine-featured.jpg)] max-w-[80%] h-full">
            <p className="text-2xl text-justify bg-black w-[25%] p-6 relative top-[20%] left-[-1%] text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
              corporis mollitia quaerat! Tempora repellat repellendus a? Iure
              doloremque consequuntur quis ad maiores accusamus alias voluptates
              provident fugiat ipsam, reprehenderit deserunt.
            </p>
          </div>
        </section>
        <span className="h-150 block" />
        <section>
          <div className="relative left-90 top-8 z-2">
            <h1 className="text-7xl font-bold">Instagram</h1>
          </div>
          <a
            href="https://www.instagram.com/"
            className="flex flex-row-reverse gap-5 px-5"
          >
            <div className="aspect-square relative columns-30">
              <Image
                src="https://www.wollersheim.com/wp-content/uploads/GrapeVarietals2021_lo-res.jpg"
                fill
                alt="Wine Image"
              />
            </div>
            <div className="aspect-square relative columns-30">
              <Image
                src="https://www.jordanwinery.com/wp-content/uploads/2024/03/2023-Jordan-Winery-Earth-Day-Vineyard-Hikes-Web-Size-37.jpg"
                fill
                alt="Wine Image"
              />
            </div>
            <div className="aspect-square relative columns-30 overflow-hidden">
              <Image
                src="https://apolloni.com/wp-content/uploads/2022/02/caveopen-.jpg"
                fill
                alt="Wine Image"
              />
            </div>
          </a>
          <section className="my-120">
            <div className="relative w-[50%] overflow-hidden left-[25%]">
              <div className="absolute z-1 left-[2%] bottom-0">
                <p className="text-2xl text-justify bg-black p-6 text-white">
                  Schedule a tour or tasting
                </p>
              </div>
              <Image
                src="https://winecountry-media.s3.amazonaws.com/wp-content/uploads/sites/4/2022/05/18134430/Sterling-1880x880-1.jpg"
                alt="Wine Bottle"
                layout="responsive"
                width={1}
                height={1}
              />
            </div>
          </section>
        </section>
      </section>
    </>
  )
}
