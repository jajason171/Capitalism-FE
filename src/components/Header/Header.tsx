import React, { useCallback, useEffect } from "react"
import Image from "next/image"
const Header = () => {
  return (
    <header className="sticky top-0 z-10 mx-[-10px] md:mb-5 xl:mx-0 xl:pt-2.5">
      <div className="flex ">
        <img
          src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Logo_Play_512px_clr_nGVTgYY.max-600x600.png"
          width={"25px"}
        ></img>
        <p>564</p>
      </div>
    </header>
  )
}

export default Header
