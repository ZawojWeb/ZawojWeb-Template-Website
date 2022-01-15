import { FramerTest } from "./FramerTest"
import NextTest from "./NextTest"
import axios from "axios"

const Home = ({ info, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>
  }
  return (
    <div>
      <NextTest info={info} />
      <FramerTest />
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  try {
    const res = await axios.get("http://localhost:1337/api/home-page?populate=*")
    const info = res.data.data.attributes
    return { info }
  } catch (error) {
    return { error }
  }
}

export default Home
