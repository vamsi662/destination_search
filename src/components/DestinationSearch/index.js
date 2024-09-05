import './index.css'

import {Component} from 'react'

import DestinationItem from './DestinationItem'

class DestinationSearch extends Component {
  state = {searchvalue: ''}
  onChangeSearch = event => {
    this.setState({searchvalue: event.target.value})
  }
  render() {
    const {destinationsList} = this.props
    const {searchvalue} = this.state
    const searchDestinationList = destinationsList.filter(eachItem => {
      const eachName = eachItem.name.toLowerCase()
      return eachName.includes(searchvalue)
    })
    return (
      <div className="bg-con">
        <h1 className="heading">Destination Search</h1>
        <input type="search" onChange={this.onChangeSearch} />
        <ul className="items-con">
          {searchDestinationList.map(eachItem => (
            <DestinationItem key={eachItem.id} destinationitem={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
