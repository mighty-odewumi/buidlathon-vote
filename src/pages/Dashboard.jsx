import { Link } from "react-router-dom";
import menu from "../assets/menu.svg";
import profile from "../assets/profile.svg";
import background from "../assets/bg-img.svg";


export default function Dashboard() {
  return (
    <>
      <div className="">
        <header>
          <img 
            src={menu} 
            alt="Menu" 
          />

          <img 
            src={profile} 
            alt="Profile" 
          />
        </header>
        <h1>Welcome to UniPoll! Your voice counts here.</h1>
        <Link to=""></Link>
      </div>
    </>
  )
}
