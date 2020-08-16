import React, { Component } from "react";

export class Wallpapers extends Component {
  render() {
    return (
      <div>
        <div className="sample-wallpaper">
          <article className="wallpaper">
            <img src="./venom-1.jpg" alt="Wallpaper #1" className="wallpaper" />
          </article>

          <article className="wallpaper">
            <img src="./hulk-1.jpg" alt="Wallpaper #1" className="wallpaper" />
          </article>

          <article className="wallpaper">
            <img src="./venom-2.jpg" alt="Wallpaper #1" className="wallpaper" />
          </article>
        </div>
      </div>
    );
  }
}

export default Wallpapers;
