import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, discription, ImageUrl, NewsUrl, Author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              !ImageUrl
                ? "https://static.thenounproject.com/png/504708-200.png"
                : ImageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <span
              class="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
              style={{ left: "90%", zIndex: "1" }}
            >
              {source}
            </span>
            <p className="card-text">{discription}...</p>
            <p className="card-text">
              <small className="text-mute">
                Author: {Author ? "Unkown" : Author} At{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={NewsUrl} target="_blank " className="btn btn-dark btn-sm">
              read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
// https://newsapi.org/v2/top-headlines?country=us&apiKey=350213ba25da4a52a4be972fa300eab7
