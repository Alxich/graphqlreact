import React from "react";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

import withHocs from "./MoviesSearchHoc";

class MoviesSearch extends React.Component {
  render() {
    const { classes, name, handelChange, handleSearch } = this.props;

    return (
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          onChange={handelChange("name")}
          onKeyPress={(e) => handleSearch(e)}
          value={name}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
        />
      </div>
    );
  }
}

export default withHocs(MoviesSearch);
