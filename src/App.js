import React from 'react';
import CharacterList from './components/CharacterList';
import './App.css';
import {connect} from "react-redux";
import {updateFavChar} from "./redux/reducers/showReducer";
import {getStarWarsCharacters} from "./redux/reducers/starWarsReducer"


class App extends React.Component {

  handleCharChange = e => {
    this.props.updateFavChar(e.target.value);
  }

  render() {
    return (
      <div>
        <div className="App">
          <input placeholder="Favorite Character" onChange/>
          <h1>{ this.props.favChar } </h1>
        </div>
        <CharacterList />
      </div>
    )
  }
}

function mapStateToProps(reduxState) {
  return {
    favChar: reduxState.favChar
  }
}

export default connect(mapStateToProps, {
  updateFavChar,
  getStarWarsCharacters
})(App);