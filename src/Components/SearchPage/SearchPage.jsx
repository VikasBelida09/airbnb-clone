import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "../SearchResult/SearchResult";
import { searchResults } from "../../data/searchPageData";
import { searchPageButtons } from "../../data/Searchbutton";
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays · 26 august to 30 august · 2 guest</p>
        <h1>Stays nearby</h1>
        {searchPageButtons.map((button) => (
          <Button key={button.id} variant={button.variant}>
            {button.name}
          </Button>
        ))}
      </div>
      {searchResults.map((result) => (
        <SearchResult
          key={result.id}
          img={result.img}
          location={result.location}
          title={result.title}
          description={result.description}
          star={result.star}
          price={result.price}
          total={result.total}
        />
      ))}
    </div>
  );
}

export default SearchPage;
