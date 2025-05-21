import React, { useState } from "react";
import{useNavigate} from 'react-router-dom'
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { FaGolang } from "react-icons/fa6";
import { RiQrScan2Line } from "react-icons/ri";
import { GoPerson } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";

const Home = (props) => {
    const [summa, setSumma] = useState("3000 000");
    //  const [cardList, setCardList] = useState([]);


console.log(props);


    
    const navigate = useNavigate()

    const handleClick =() => {
        navigate('/addCard')
    }
    return (
        <div className="home">

            <header>
                <GoPerson/>
                <nav className="navTop">
                    <IoSearch/>
                    <IoMdNotificationsOutline/>

                </nav>
            </header>

            <div className="balans">
                <p>Umumiy balans</p>
                <h1>
                    {summa} <sub>so'm</sub>
                </h1>
            </div>

            <div className="mycard">
                <div onClick={handleClick} className="mycards">
                    <div className="myCardIconsBack">
                        <MdOutlineAccountBalanceWallet />
                    </div>
                    <p>My Card</p>
                </div>
                <div className="mycards paymeGo">
                    <div className="myCardIconsBack">
                        <FaGolang />
                    </div>
                    <p>My Card</p>
                </div>
                <div className="mycards qrPayment">
                    <div className="myCardIconsBack">
                        <RiQrScan2Line />
                    </div>
                    <p>My Card</p>
                </div>
            </div>

            <aside>
                <div className="advertising">
                    <p>
                    Siz bu yerda o'z reklamangizni 
                    qo'yishingiz mumkin😉😉😉
                    </p>
                </div>
            </aside>

            <div className="brendImg">
                <img src="/images/payme-01.png" alt="payme icon" />
            </div>
        </div>
    );
};

export default Home;
