import React from "react";

export default class Header extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <a
          title="The Walt Disney Company - Rian Hughes, Public domain, via Wikimedia Commons"
          href="https://commons.wikimedia.org/wiki/File:Marvel_Logo.svg"
        >
          <img
            width="512"
            alt="Marvel Logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/512px-Marvel_Logo.svg.png"
          ></img>
        </a>
      </div>
    );
  }
}
