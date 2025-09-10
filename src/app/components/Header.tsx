import Image from "next/image"
export default function Header({ image }) {
  return (
    <header className="relative w-full h-screen overflow-hidden">
      <Image
        src={image}
        alt="Hero Image"
        fill
        quality={100}
      />
    </header>
  )
}
