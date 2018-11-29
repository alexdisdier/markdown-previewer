import React, { Component } from 'react';
import './github-markdown.min.css';
import './bootstrap-grid.min.css';
import './App.scss';

var marked = window.marked;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      textarea: '# New Github README.md'
    }

    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(event){

    this.setState({
      textarea: event.target.value
    })
  };

  render() {

    return (
      <div className="App">
        <header>
          <h1>A github markdown previewer</h1>
        </header>

        <div className="row">

          <div className="col-sm-12 col-md-6 left">
            <textarea id="editor" onChange={this.handleChange} value={this.state.textarea} autoFocus rows="4" cols="50"></textarea>
          </div>

          <div className="col-sm-12 col-md-6 right">
            <div id="preview" className="">{marked(this.state.textarea)}</div>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
