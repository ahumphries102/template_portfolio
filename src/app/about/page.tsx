import React from "react"
import Image from "next/image"
export default function AboutContent() {
  return (
    <div className="pb-20">
      <section className="flex">
        <div className="w-1/2 leading-10 bg-white text-black p-20 flex items-center flex-col">
          <h1 className="text-5xl border-b w-1/3">About Us</h1>
          <div className="w-[75%]">
            <p className="mb-5">
              At Grape & Stone, we believe that the soul of a wine is found in
              the soil the terroir. Our journey began in 2007 when Jorval
              Stevenson envisioned a place where the unique climate and rich
              earth of Woodinville could be expressed through exceptional,
              handcrafted wines. Our Philosophy: Patience, Place, and Purity We
              are committed to a philosophy of minimal intervention and deep
              respect for the land.
            </p>

            <p className="mb-5">
              Estate Grown Excellence: Our vineyards, meticulously tended on
              volcanic clay slopes, are the heart of our operation. We grow only
              the varietals best suited to our site, primarily Pinot Noir and
              Chardonnay. Sustainable Stewardship: We practice certified
              organic, Biodynamic farming, sustainable water use to ensure the
              health of our vines and the land for generations to come.
              Handcrafted from Grape to Glass: In the cellar, tradition meets
              precision.
            </p>

            <p className="mb-5">
              We rely on native yeast fermentation, extended barrel aging in
              French oak to gently guide the wine, allowing the vintage and the
              fruit to speak for themselves. The Experience A visit to our
              tasting room is an invitation to step away from the everyday.
              Located atop a scenic hill, nestled in the valley, the Grape &
              Stone experience is defined by panoramic views, intimate seated
              tastings, cellar tours. We invite you to join us, taste the
              distinct character of Woodinville, and discover the passion in
              every bottle. Visit us, Grape & Stone, at 12345 Hope St. Tasting
              Hours: Thursday through Sunday from 2 to 9 We look forward to
              sharing our story with you.
            </p>
            <h6 className="text-right">-Grape & Stone</h6>
          </div>
        </div>
        <div className="h-[600px] w-[50%] relative">
          <Image
            src={
              "https://images.squarespace-cdn.com/content/v1/65087e66c8953c1689130ac3/6dd82458-dd17-4fcd-9c40-1e520b686bac/IMG_3905.jpeg"
            }
            alt="Vineyard Image"
            fill
          />
        </div>
      </section>
    </div>
  )
}
