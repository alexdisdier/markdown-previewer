import React, { Component } from 'react';

import './github-markdown.min.css';
import './bootstrap-grid.min.css';
import './normalize.min.css';
import  './utils/_helpers.scss';
import './App.scss';

import Header from './components/Header/Header';

var marked = window.marked;
// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
  breaks: true,
  pedantic: false,
  gfm: true,
  tables: true,
  sanitize: true,
  smartLists: true,
  smartypants: false,
  xhtml: true
});

// const renderer = new marked.Renderer();
// renderer.link = function (href, title, text) {
//   return `<a target="_blank" href="${href}">${text}` + '</a>';
// }

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      textarea: "# Welcome to my Github Markdown Previewer!\n\n## This is a sub-heading...\n\n### Here's some code, `<div></div>`, between 2 backticks.\n\n```\n// Multi-line code:\n function anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n   return multiLineCode;\n }\n}```\n\n You can also make text **bold**...\n\n Or _italic_.\n\nOr...**_both!_**\n\nAnd ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd even tables:\n\nHeader 1 | Header 2 | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n - Some are bulleted.\n   - With different indentation levels.\n       - That look like this.\n1. And there are numbererd lists too.\n1. Use just 1s if you want!\n1. But the list goes on...\n- Even if you use dashes or asterisks.\n\nAnd last but not least, let's not forget embedded images:\n\n![React & Github](https://cdn-images-1.medium.com/max/1200/1*4u4uD5FiSkWdBNkRO6lVtQ.jpeg)"
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
        <Header/>

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
