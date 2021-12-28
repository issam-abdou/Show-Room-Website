import React from "react";
import ShowRoomCard from "../components/ShowRoomCard";
import Showrooms from "../components/Showrooms";
import "../style/components/home.css"


const Home = () => {
    return (
        <main>
        <div className='container'>
            <h1>Show Rooms</h1>
            <Showrooms />
        </div>
        </main>
    );
};

export default Home;
