import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'

// Replace your code here
class App extends Component {
  state = {words: [], presentWord: ''}

  onTextInput = e => {
    this.setState({presentWord: e.target.value})
  }

  onSubmittingWord = e => {
    e.preventDefault()
    const {presentWord, words} = this.state
    const wordInfo = {id: uuidv4(), word: presentWord}
    this.setState({words: [...words, wordInfo], presentWord: ''})
  }

  getNoWordsView = () => (
    <div className="image-container">
      <img
        className="no-user-inputs-image"
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
      />
    </div>
  )

  getWordsView = () => {
    const {words} = this.state
    return (
      <ul className="words-and-count-container">
        {words.map(eachItem => (
          <li key={eachItem.id}>
            <p className="word-and-count-text">
              {eachItem.word} :
              <span className="word-count">{eachItem.word.length}</span>
            </p>
          </li>
        ))}
      </ul>
    )
  }

  render() {
    const {presentWord, words} = this.state
    console.log(presentWord)
    console.log(words)
    return (
      <div className="page-main-container">
        <div className="two-containers-container">
          <div className="left-container">
            <h1 className="title-heading">
              Count the characters like a Boss...
            </h1>
            {words.length === 0 ? this.getNoWordsView() : this.getWordsView()}
          </div>
          <form onSubmit={this.onSubmittingWord} className="right-container">
            <h1 className="character-count-heading">Character Counter</h1>
            <div className="input-add-button-container">
              <input
                onChange={this.onTextInput}
                value={presentWord}
                type="text"
                className="text-input"
                placeholder="Enter the Characters here"
              />
              <button type="submit" className="add-button">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default App
