"use client"

export default function BodyContent(content) {
  return (
    <>
      <section
        className="relative h-150 bg-white p-5"
        style={{ alignContent: "center" }}
      >
        <div className="w-1/4 mx-auto">
          <h2 className="text-6xl text-center">History</h2>
          <hr className="my-4"/>
        </div>
        <div className="text-center w-1/2 mx-auto text-justify">
          <p className="text-3xl">{content.content}</p>
        </div>
      </section>
    </>
  )
}
