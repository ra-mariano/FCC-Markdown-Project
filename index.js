let defaultText = `# Heading 

## SubHeading
    
Here's a [link](https://www.freecodecamp.org)
    
Dad: Why do big rocks not erode over time?
    
Son: Why?
    
Dad: Cause they're **Boulder**
    
    
\`<div>Backticks FTW!</div> code\`
    
    
\`\`\`
    // Multi-line code:
    
    function howCodingWorks(amountOfDaysFixingBug) {
      if (amountOfDaysFixingBug > 2) {
        return success;
      }
    }
\`\`\`
    
    
    
    
> Here's a Block Quote
    
    
- Here's a list:
  - Item 1
  - Item 2
  - Item 3
      
      
![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/350px-Markdown-mark.svg.png)`


class Editor extends React.Component {
  constructor(props) {
    super(props);



    this.state = {
      input: defaultText

    }
    this.handleChange=this.handleChange.bind(this)
    this.handleClick=this.handleClick.bind(this)
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  };

  
  handleClick() {
    this.setState({
      input: ''
    })
    document.getElementById("editor").innerHTML = "jhg"
  };



  render() {
 
    

    return (
      <div>
      <h1 id="header">MARKDOWN PREVIEWER</h1>

      <div id="container">
        
      
      <textarea id="editor"
      onChange={this.handleChange}>{this.state.input}</textarea> 
   
     
     <div id="preview" dangerouslySetInnerHTML={{
       __html: marked.parse(this.state.input)
     }}
     />
  
    </div>
    <button id="clearButton" onClick={this.handleClick}>CLEAR TEXT</button>
    </div>
  
      );
     
    }
  }


 








ReactDOM.render(<Editor />, document.getElementById("app"));