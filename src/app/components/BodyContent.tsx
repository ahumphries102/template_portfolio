import Image from "next/image"
export default function BodyContent({ content }) {
  return (
    <>
      <section className="p-6 w-1/2 mx-auto text-center">
        <h1 className="text-center">{content.header}</h1>
        <p className="text-center">{content.content}</p>
        <button>Discover More</button>
      </section>
      <div className="relative w-full h-screen mx-auto flex justify-center">
        <div className="bg-[url(https://www.thetopvillas.com/blog/wp-content/uploads/2018/07/wine-featured.jpg)] max-w-[80%] h-full">
          <p className="text-2xl text-justify bg-black w-1/5 pa-6 relative top-1/4 left-[2%] text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
            corporis mollitia quaerat! Tempora repellat repellendus a? Iure
            doloremque consequuntur quis ad maiores accusamus alias voluptates
            provident fugiat ipsam, reprehenderit deserunt.
          </p>
        </div>
      </div>
    </>
  )
}
