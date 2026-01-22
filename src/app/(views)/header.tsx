export default function Header() {
  return (
    <header
      style={{ alignContent: "center" }}
      className="w-screen h-screen fixed bg-[url(https://images.squarespace-cdn.com/content/v1/5bcdf1475239581ca83c5afc/1715051639205-18YCXOASATER7FSQYE0L/Andante-Tasting-Room-and-Production-Building-2024.jpg)] bg-cover sepia-60"
    >
      <div className="flex flex-col items-center">
        <div className=" text-9xl">
          <h1 className="text-white">
            Grape <br />
            <span className="text-5xl">&</span> Stone
          </h1>
        </div>
      </div>
    </header>
  )
}
