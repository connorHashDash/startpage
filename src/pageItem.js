import React from 'react'
import './pageItems.css'
import QuoteCard from './quotes.js'
import Weather from './weather.js';

class PageItem extends React.Component{
  render(){
    let domItems = this.props.items.map((thing, index) => {
      return(
        <a key={index} href={thing.url}>
          <div  className='item'>
              <div className="iconDiv">
                <img className='itemIcon' src={'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=' + thing.url} alt={thing.name + ' icon'}></img>
              </div>
              <div className="itemName">
                <p>{thing.name}</p>
              </div>
          </div>
        </a>
      )
    })
    return(
      <div className="blackBox">
        <div className='list'>
          {domItems}
        </div>
        <div className="widgets">
          <Weather />
          <QuoteCard />
        </div>
      </div>
    )
  }
}

export default PageItem
