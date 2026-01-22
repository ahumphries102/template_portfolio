"use client"
import Image from "next/image"
import whiteWine from "@/app/images/white_wine.png"
import redWine from "@/app/images/red_wine.png"
import chardonay from "@/app/images/chardonay.png"

export default function BodyContent() {
  const wines = [
    {
      name: "2019 Bower Vineyards Chardonnay  750 ml",
      image: whiteWine,
    },
    {
      name: "2011 Bucephalus Red Blend",
      image: redWine,
    },
    {
      name: "2023 Bower Sauvignon Blanc 750 ml",
      image: chardonay,
    },
  ]

  return (
    <>
      <section className="relative bg-white flex gap-6 h-screen p-5">
        {wines.map((wine, index) => {
          return (
            <div
              key={index}
              className="card shadow-md shadow-black/30 relative flex flex-col items-center text-center p-2 w-1/2"
            >
              <div className="cardBody flex flex-col items-center w-full">
                <Image
                  src={wine.image}
                  alt="Winery Map"
                  width={150}
                  height={150}
                  className="rounded-lg"
                />
              </div>
              <hr className="w-3/4 border-0 border-t-[3px] border-green-900 my-4" />
              <div className="cardBody h-20 w-1/2">
                <h2 className="card-title text-2xl ">{wine.name}</h2>
              </div>
              <div className="card-actions justify-end w-full">
                <button className="btn btn-outline w-full">Buy Now</button>
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}
