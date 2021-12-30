import React from "react";
// import ShowRoomCard from "../components/ShowRoomCard";
import ShowroomGrid from "../components/ShowroomGrid";
import "../style/components/home.css"


const Home = (props) => {
    return (
        <main>
        <div className='container'>
            <h1>Show Rooms</h1>
            <ShowroomGrid showrooms = {props.showrooms} />
        </div>
        </main>
    );
};

export default Home;
