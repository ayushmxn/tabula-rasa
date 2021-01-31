import React from "react";
// import Menu from './Menu';
import Author from './Author';
// import Story from './Story';
// import Menu from './Menu';
import '../assets/css/App.css';

export default class App extends React.Component {
  render() {
    return <div className="project">
      {/* <Menu/> */}
      {/* <Story/> */}
      <Author/>
    </div>;
  }
}