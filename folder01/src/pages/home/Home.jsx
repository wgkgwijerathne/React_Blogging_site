import Header from "../../header/Header"
import "./home.css"
import Posts from "../../componets/posts/Posts"
import Sidebar from "../../componets/sidebar/Sidebar"

export default function Home() {
  return (
    <>
    <Header />
    <div className="home">
      
    <Posts />
    <Sidebar />

    </div>
    </>
  )
}
