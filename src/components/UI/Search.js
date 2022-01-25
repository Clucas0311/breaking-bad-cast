import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
    getQuery(event.target.value);
  };
  return (
    <section className="search">
      <form action="">
        <input
          className="form-control"
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Search Characters"
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
