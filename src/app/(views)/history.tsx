"use client"
import Image from "next/image"
import WineBottle from "@/app/images/wine_drawing.png"
export default function BodyContent(content) {
  return (
    <>
      <section
        className="relative bg-white h-screen"
        style={{ alignContent: "center" }}
      >
        <div className="w-1/4 mx-auto">
          <h2 className="text-6xl text-center">History</h2>
          <div className="border-t border-b border-[#C5A059] h-1 w-100 mx-auto my-10"/>
        </div>
        <div className="text-center w-1/2 mx-auto text-justify">
          <p className="text-3xl">{content.content}</p>
        </div>
        
      </section>
    </>
  )
}
