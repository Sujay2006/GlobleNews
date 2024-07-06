import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    PageSize: 6,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    PageSize: PropTypes.number,
    category: PropTypes.string,
  };
  CapFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    //document.title = `${this.CapFirstLetter(this.props.category)}--MarketNews`;
  }

  async componentDidMount() {
    console.log("cmd");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0e30555a5d664d6eba13a6d67bcec8d1&page=${this.state.page}&pagesize=${this.props.PageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    this.setState({
      articles: parseddata.articles,
      totalResults: parseddata.totalResults,
      loading: false,
    });
  }
  handleprevpage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=0e30555a5d664d6eba13a6d67bcec8d1&page=${
      this.state.page - 1
    }&pagesize=${this.props.PageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    this.setState({
      articles: parseddata.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };
  handlenextpage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=0e30555a5d664d6eba13a6d67bcec8d1&page=${
      this.state.page + 1
    }&pagesize=${this.props.PageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    this.setState({
      articles: parseddata.articles,
      page: this.state.page + 1,
      loading: false,
    });
  };
  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=0e30555a5d664d6eba13a6d67bcec8d1&page=${
      this.state.page + 1
    }&pagesize=${this.props.PageSize}`;
    this.setState({ page: this.state.page + 1 });
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    this.setState({
      articles: this.state.articles.concat(parseddata.articles),
      totalResults: parseddata.totalResults,
    });
  };

  render() {
    console.log("render");
    console.log(this.articles);
    return (
      <div style={{ marginTop: "70px" }} className="container">
        <h1 className="text-center my-3">
          MarketNews---Top {this.CapFirstLetter(this.props.category)} Headline
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles?.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles?.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container my-3 text-center">
            <div className="row text-center">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    {/* <Newsitem
                      title={element.title ? element.title.slice(0, 40) : ""}
                      discription={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      ImageUrl={element.urlToImage}
                      NewsUrl={element.url}
                      Author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    /> */}
                    <Newsitem
                      title={element.title}
                      discription={element.description}
                      ImageUrl={element.urlToImage}
                      NewsUrl={element.url}
                      Author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className='container d-flex justify-content-between my-3'>
            <button disabled={this.state.page<=1} type='button' className = "btn btn-dark" onClick={this.handleprevpage}>&larr; Previous</button>
             <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.PageSize)} type='button' className = "btn btn-dark " onClick={this.handlenextpage}>next &rarr;</button>
          </div> */}
      </div>
    );
  }
}

export default News;
