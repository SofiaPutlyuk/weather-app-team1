import React, { useContext } from "react";
import SerhiiImage from "../../assets/images/Serhii.png";
import NazariImage from "../../assets/images/Nazar.png";
import SophiaImage from "../../assets/images/Sophia.png";
import { IoClose } from "react-icons/io5"
import { WhoWeAreContext } from "./WhoWeAreContext";
const WhoWeAre=()=>{
    const {WhoWeAreCloseModal}=useContext(WhoWeAreContext)
    return(
        <div className="Background">
            <ul className="List">
                <li>
                    <img src={SophiaImage} alt="Sophia" />
                    <h1>Sophia</h1>
                    <p>Teamlead,Frontand Developer</p>
                </li>
                <li>
                    <img src={SerhiiImage} alt="Serhii" />
                    <h1>Serhii</h1>
                    <p>Frontand Developer</p>
                </li>
                <li>
                    <img src={NazariImage} alt="Nazar" />
                    <h1>Nazar</h1>
                    <p>Scrum master,Frontand Developer</p>
                </li>
                <button className="List_close" onClick={WhoWeAreCloseModal}>
                <IoClose />
                </button>
            </ul>

        </div>
    )
}
export default WhoWeAre