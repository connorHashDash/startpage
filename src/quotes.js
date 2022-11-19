import React from 'react'
import quotes from './quotes.json'

class QuoteCard extends React.Component {
  render(){
    let number = Math.floor(Math.random() * quotes.length)
    return(
        <div className="quotes">
          <p className="quoteContent">
            {quotes[number].quote}
          </p>
          <p className="source">
            {'~' + quotes[number].source}
          </p>
        </div>
    )
  }
}

export default QuoteCard
