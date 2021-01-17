import React from "react";
import Page from './Page';
import '../assets/css/App.css';

export default class Project extends React.Component {
  render() {
    return <div className="project">
      <header>Tabula Rasa</header>
      <Page />
    </div>;
  }
}