import Image from "next/image"
export default function Header({ hotdog }) {
  return (
    <header>
      <Image src={hotdog.catdog} alt="" width={800} height={800} />
    </header>
  )
}
