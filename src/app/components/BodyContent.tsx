import Image from "next/image"
export default function BodyContent({ content }) {
  return (
    <>
      <section className="p-6 w-1/2 mx-auto text-center">
        <h1 className="text-center">{content.header}</h1>
        <p className="text-center">{content.content}</p>
        <button>Discover More</button>
      </section>
      <section className="columns-2">
        <div className="aspect-square flex justify-center items-center p-4">
          <p className="text-2xl text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
            corporis mollitia quaerat! Tempora repellat repellendus a? Iure
            doloremque consequuntur quis ad maiores accusamus alias voluptates
            provident fugiat ipsam, reprehenderit deserunt.
          </p>
        </div>
        <div className="relative aspect-square">
          <Image
            className="object-cover"
            src="https://admin.sanfelice.com/app/uploads/2023/02/slider1.jpg"
            fill
            alt="Vineyard Image"
          />
        </div>
      </section>
    </>
  )
}
