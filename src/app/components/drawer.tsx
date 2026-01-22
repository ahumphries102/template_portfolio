import Image from "next/image"
import logo from "@/app/images/logo.png"
import Navbar from "@/app/components/navbar"

export default function Drawer({}) {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
        <div className="fixed top-4 left-4 z-[11]">
          <label className="drawer-button" htmlFor="my-drawer-1">
            <Image src={logo} alt="My Winery Logo" width="25" height="25" />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-1"
            aria-label="close sidebar"
            className="drawer-overlay"
          />
          <Navbar />
        </div>
      </div>
    </>
  )
}
