import React from 'react';
import'./App.css';

class RandomQuote extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      qa: [["“The only way to do great work is to love what you do.", "J.R.R. Tolkien"], 
           ["“Success is not final, failure is not fatal: It is the courage to continue that counts”.", "Winston Churchill"], 
           ["“Believe you can and you're halfway there.”", " Theodore Roosevelt"], 
           ["“The future belongs to those who believe in the beauty of their dreams.”", "Eleanor Roosevelt"], 
           ["“To be or not to be, that is the question.”", "William Shakespeare"],
          ["“The discipline of desire is the background of character”", "John Locke"],
          ["“We both got a lot to say, speakin’ in codes ’cause they might listen to us”", "Nettspend"],
          ["“Life can only be understood backwards; but it must be lived forwards”", "Soren Kierkegaard"],
          ["“He who thinks great thoughts, often makes great errors.”", "Martin Heidegger"],
          ["“Happiness is not an ideal of reason but of imagination”", "Immanuel Kant"],
          ["“Science is what you know. Philosophy is what you don't know”", "Bertrand Russell"],
          ["“You can discover more about a person in an hour of play than in a year of conversation”", "Plato"],
          ["“Jealousy is just love and hate at the same time”", "Aubrey Graham"]
          ],
      quote: "",
      author: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  componentDidMount() {
    this.handleChange();
  }
  
  handleChange() {
    const randomIndex = Math.floor(Math.random() * this.state.qa.length);
   
    this.setState((state) => ({
      quote: state.qa[randomIndex][0],
      author: state.qa[randomIndex][1]
    }))
  }
  
  render() {
    return(
      <div id="quote-box">
        <div className="container1">
          <p id="text">{this.state.quote}</p>
          <p id="author">{this.state.author}</p>
        </div>
        <div className="container2">
          <button id="new-quote" class="" onClick={this.handleChange}>Change Quote</button>
          <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank">
            <img src="https://images.freeimages.com/image/large-previews/f35/x-twitter-logo-on-black-circle-5694247.png?h=350" alt="Tweet" width="30" />
          </a>
          <a id="post-quote" href="https://www.instagram.com/?__pwa=1#" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Tweet" width="30" />
          </a>
         </div>
      </div>
    )
  }
}
 
// ReactDOM.render(<RandomQuote />, document.getElementById("root"));
export default RandomQuote;
