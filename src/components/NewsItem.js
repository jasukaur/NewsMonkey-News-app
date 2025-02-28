import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div>
        <div
          className="card"
          style={{
            width: "18rem",
            height: "400px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img
            src={imageUrl}
            className="card-img-top"
            alt="News"
            style={{ width: "100%", height: "150px", objectFit: "cover" }}
          />
          <div
            className="card-body"
            style={{
              flex: "1",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h5
              className="card-title"
              style={{
                fontSize: "1rem",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {title}
            </h5>
            <p
              className="card-text"
              style={{
                fontSize: "0.9rem",
                flexGrow: "1",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {description}
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark mt-auto"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
