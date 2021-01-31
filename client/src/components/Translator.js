import React from "react";
import '../assets/css/Translator.css';
import GCP from '../config/google-cloud-translate';

export default class Translator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      output: '',
      target: 'hi'
    };
    this.onChange = this.onChange.bind(this);
    this.translate = this.translate.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  translate() {
    console.log(this.state.input);
    let url = `https://translation.googleapis.com/language/translate/v2?key=${GCP.KEY}`;
    url += '&q=' + encodeURI(this.state.input);
    url += `&target=${this.state.target}`;

    fetch(url, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => { this.setState({ output: data.data.translations[0].translatedText}); })
      .catch(error => { console.log(error) });
  }

  render() {
    return (<div>
      <textarea value={this.state.input} onChange={this.onChange} placeholder="Write in Roman Hindi" name="input"></textarea>
      <textarea value={this.state.output} placeholder="View in Devanagari Hindi"></textarea>
      <button onClick={this.translate}>Transform</button>
    </div>);
  }
}