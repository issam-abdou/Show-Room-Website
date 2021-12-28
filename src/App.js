import React from 'react';
// import "/home/issam/Desktop/WebDev/Practice/React js Projects/Cars-website/my-app/src/style/components/app.css"
import Header from './components/Header';
import "./style/components/app.css"
// import Home from './pages/Home';
import ShowroomPage from './pages/ShowroomPage';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header/>
        {/* <Home/> */}
        <ShowroomPage/>
      </div>
    );
  }
}

export default App;
// Next steps:
/*
- create ShowRoomCard cmp
- create big cmp that contains the ShowRoomCard components
 */