import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import { FramerTest } from "./FramerTest"
import NextTest from "./NextTest"

export default function Home() {
  return (
    <div>
      <NextTest />
      <FramerTest />
    </div>
  )
}
