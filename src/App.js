import React from 'react';
import Header from './components/Header';
import "./style/components/app.css"
import Home from './pages/Home';
import ShowroomPage from './pages/ShowroomPage';
import DetailsPage from './pages/DetailsPage';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import sr_data from "./data/showrooms"
import cars_data from "./data/cars"


class App extends React.Component {
  state={
    showrooms : sr_data,
    cars: cars_data
  }
  render() {
    return (
      <BrowserRouter>
          <div className="wrapper">
            <Header/>
            <Routes>
                <Route path="/" element={<Home showrooms = {this.state.showrooms}/>}/>
                <Route path="/show-room" element={<ShowroomPage cars={this.state.cars}/>}/>
                <Route path="/details/:id" element={<DetailsPage cars={this.state.cars}/>}/>
            </Routes>
          </div>
      </BrowserRouter>
    );
  }
}
export default App;
// Next steps:
/*
- create ShowRoomCard cmp
- create big cmp that contains the ShowRoomCard components
 */