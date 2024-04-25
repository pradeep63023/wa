import {Component} from 'react'

import HistoryItem from '../HistoryItem'
import './index.css'

const initialHistoryList = []

class History extends Component {
  state = {searchInput: '', isShow: false, HistoryList: initialHistoryList}

  updateSearch = value => {
      this.setSate({
        searchInput: value,
      })
    }

    onchangeSearchInput = event => {
      this.setState({searchInput: event.target.value,
      })
    }

    deleteHistory = id => {
      const {HistoryList} = this.state
      const filteredUserData = HistoryList.filter(each => each.id !== id)
      this.setSate({
        HistoryList: filteredUserData,
      })
      console.log(HistoryList.length)
      if (HistoryList.length === 1) {
        this.setSate({isShow: true})
      }
    }
  render() {
    const {searchInput, HistoryList, isShow} = this.state
    const searchResults = HistoryList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    
    return (
      <div className="deletecontainer">
        <div className="his">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="image"
          />
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            alt="search-icon"
          />
          <input
            type="search"
            placeholder="Search history"
            className="hdh"
            onChange={this.onchangeSearchInput}
            value={searchInput}
          />
        </div>
        <div>
          <ul className="underpart">
            {searchResults.length === 0 ? (
              <P className="err">There is no history to show</P>
            ) : (
              searchResults.map(eachHistory => (
                <HistoryItem
                  key={eachHistory.id}
                  historyDetails={eachHistory}
                  updateSearch={this.updateSearch}
                  deleteHistory={this.deleteHistory}
                />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}
export default History
