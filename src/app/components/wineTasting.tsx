"use client"
import Image from "next/image"
import mapImage from "@/app/images/wine_bottles.png"

export default function BodyContent() {
  return (
    <>
      <section>
        <div className="flex">
          <div className="w-[100%] h-200 relative">
            <Image
              src={
                "https://chaumette.com/wp-content/uploads/2021/11/wine-tasting-1-900x600.jpeg"
              }
              alt="Winery Map"
              fill
              className="object-cover"
            />
            <div className="flex card-body absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 rounded-lg text-center --glass-text-shadow-opacity bg-black/50">
              <p className="text-4xl text-white">Schedule a Wine Tasting</p>
              <div className="card-actions text-white justify-center">
                <button className="btn btn-outline">Experience Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
