import Card from "./Card";
import Video from "./Video";
import $ from "jquery";
import axios from "axios";
import { useState } from "react";

function Pokemon(props) {
  const [cardRes, setCardRes] = useState();
  const [videoRes, setVideoRes] = useState();
  var fetchPokemonInfo = function () {
    const searchInput = $("#searchInput").val();
    //TODO: if searchInput === "", alert "Please enter pokemon name."
    console.log(searchInput);
    const APIURL = `https://pokeapi.co/api/v2/pokemon/${searchInput}`;
    axios
      .get(APIURL)
      .then(function (response) {
        // handle success
        console.log(response);
        setCardRes(response.data);
        fetchYoutubeVideos("pokemon " + response.data.species.name);
      })
      .catch(function (error) {
        // handle error
        console.log("error: ", error);
      });
  };

  var fetchYoutubeVideos = function (searchInput) {
    const youtubeKey = "AIzaSyDZydKsrsx6X3k5coX1yjxwzupOmTEanDY";
    const YOUTUBEURL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchInput}&key=${youtubeKey}&maxResults=5`;
    axios
      .get(YOUTUBEURL)
      .then((response) => {
        console.log("video:", response);
        setVideoRes(response.data);
      })
      .catch((err) => console.error("error: ", err));
  };

  return (
    <main>
      <section>
        {/* <!-- search input and search button --> */}
        <div id="name-input">
          <input
            type="text"
            placeholder=" Enter a pokemon name here"
            className="input-box-style"
            id="searchInput"
          />
          <button id="searchBtn" onClick={fetchPokemonInfo}>
            Search
          </button>
        </div>
      </section>
      {/* <div id="myModal" className="modal">
        <!-- Modal content --> 
        <div className="modal-content">
          <span className="close">&times;</span>
          <p>That is not a pokemon!</p>
        </div>
      </div> */}
      {/* <!-- pokemon card area--> */}
      <div className="content">
        <div className="container">
          <div id="history-section">
            {/* <!-- add history buttons here in js--> */}
          </div>
          {cardRes && <Card cardRes={cardRes} />}
        </div>
        {/* <!-- add pokemon videos here --> */}
        {videoRes && <Video videoRes={videoRes} />}
      </div>
    </main>
  );
}

export default Pokemon;
