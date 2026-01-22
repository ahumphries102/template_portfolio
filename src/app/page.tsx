import Body from "@/app/(views)/body"
import History from "@/app/(views)/history"
import WineCards from "@/app/(views)/wineCards"
import WineTasting from "@/app/(views)/wineTasting"
import Header from "@/app/(views)/header"

export default function Page({}) {
  return (
    <>
      <Body
        Hero={<Header />}
        History={
          <History
            content={
              "Grape & Stone is a family-owned estate dedicated to producing small-batch, handcrafted wines. Our vineyards are cultivated with sustainable practices, ensuring every bottle captures the unique character of our terroir. From the delicate notes of our Pinot Noir to the crisp finish of our Chardonnay, each wine tells a story of tradition, care, and the rich Oregon soil. Founded on a passion for the land and the art of winemaking."
            }
          />
        }
        WineCards={<WineCards />}
        WineTasting={<WineTasting />}
      />
    </>
  )
}
