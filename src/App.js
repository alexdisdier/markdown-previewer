import React, { Component } from 'react';
import './github-markdown.min.css';
import './bootstrap-grid.min.css';
import './App.scss';

var marked = window.marked;
// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
  breaks: true,
  pedantic: false,
  gfm: true,
  tables: true,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: true
});

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      textarea: "# Welcome to my React Markdown Previewer!\n## This is a sub-heading...\n### And here's some other cool stuff: Heres some code, `<div></div>`, between 2 backticks.\n```\n// this is multi-line code:\n function anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n   return multiLineCode;\n }\n}```\n You can also make text **bold**... whoa!\n\n Or _italic_.\n\nOr... wait for it... **_both!_**\n\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n - Some are bulleted.\n   - With different indentation levels.\n       - That look like this.\n1. And there are numbererd lists too.\n1. Use just 1s if you want!\n1. But the list goes on...\n- Even if you use dashes or asterisks.\n\n* And last but not least, let's not forget embedded images:\n![React Logo w/ Text](https://goo.gl/Umyytc)"
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
            <div id="preview" className="markdown-body" dangerouslySetInnerHTML={{__html: marked(this.state.textarea)}}></div>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
