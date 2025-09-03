import Image from "next/image"
export default function Header({ image }) {
  return (
    <header
      style={{ position: "relative", height: "500px", overflow: "hidden" }}
    >
      <Image
        src={image}
        alt="Hero Image"
        width={2000}
        height={500}
        quality={80}
      />
    </header>
  )
}
