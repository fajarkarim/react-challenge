import React, { Component } from 'react'

class GifContent extends Component {

  render () {
    var cardStyle = {
      width: '20rem'
    }
    return (
      <div className="col">
        <div className="card" style={cardStyle}>
          <iframe src={this.props.gif.embed_url} frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
          <div className="card-body">
            <h4 className="card-title">Card title</h4>          
          </div>
        </div>
      </div>
    )
  }
}

export default GifContent
