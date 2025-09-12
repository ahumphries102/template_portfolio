import Image from "next/image"
export default function Header({ image }) {
  return (
    <header className="relative">
      <Image
        src={image}
        alt="Hero Image"
        layout="responsive"
        width={1}
        height={1}
        quality={100}
      />
    </header>
  )
}
