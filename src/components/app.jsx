import React, { Component } from "react";
import giphy from "giphy-api";
import Gif from "./gif";
import GifList from "./gif_list";
import SearchBar from "./search_bar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "SVYrs1hU0SiAf1nw1n"
    };
  }

  search = (query) => {
    // API call
    giphy('xRLv6IWGOpo2NQ8tQPQPY2TazkQl6rr0').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      // Res contains gif data!
      this.setState({
        gifs: result.data
      });
    });
  }

  render() {

    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
