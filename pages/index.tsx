import type { NextPage } from "next"
import { useState, useEffect } from "react"
import { BusinessCard } from "../src/components/BusinessCard"
import Header from "../src/components/Header/Header"
import { Platform } from "../src/interfaces"

const Home: NextPage = () => {
  return (
    <div className=" h-screen ">
      <Header />
      <div>
        <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
      </div>
      <BusinessCard visible />
    </div>
  )
}

export default Home
