import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Ratings from './Ratings/Ratings.jsx';
import Reviews from './Reviews/Reviews.jsx';
import getTotalRatings from './lib/getTotalRatings';

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meta: {},
      ratings: {},
      totalRatings: 0,
      isLoaded: false,
      products: [],
      product: '37316',
      ratingFilter: {},
      filteredByRating: false,
      reviews: [],
      page: 1,
      sort_option: '',
      sorted: false,
      filtered: [],

    };
    this.getRatings = this.getRatings.bind(this);
    this.setRatingFilter = this.setRatingFilter.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.moreReviews = this.moreReviews.bind(this);
    this.sort = this.sort.bind(this);
    this.scrollMore = this.scrollMore.bind(this);
    this.setSortOption = this.setSortOption.bind(this);
  }

  componentDidMount() {
    this.getRatings();
    this.getReviews();
  }

  getReviews() {
    if (!this.state.sorted) {
      axios.get(`${process.env.API_URL}/reviews?product_id=${this.props.product_id}&count=${this.state.page * 2}`, {
      headers: {
        Authorization: process.env.AUTH_KEY,
      },
    })
      .then((response) => {
        console.log('successfully fetched reviews');
        this.setState({ reviews: response.data.results });
      })
      .catch((err) => console.log('error fetching reviews', err));
    } else {
      this.sort(this.state.sort_option);
    }
  }

  moreReviews() {
    let page = this.state.page;
    page += 1;
    this.setState({ page, filteredByRating: false, filtered: [], ratingFilter: {} }, () => {
        console.log(page, 'page of more results')
        this.getReviews();
    });
  };

  scrollMore() { //only works when its not filtered by rating.
    if(!this.state.filteredByRating) {
      let page = this.state.page;
      page += 1;
      this.setState({ page }, () => {
      console.log(page, 'page of more results');
      this.getReviews();
    });
    }
  };

  setSortOption (new_option) {
    if (new_option !== this.state.sort_option) {
      console.log('sorting by', new_option);
      this.setState({
        page: 1,
        sort_option: new_option,
        sorted: true,
        filteredByRating: false,
        filtered: [],
        ratingFilter: {},
      }, () => {
        this.sort(new_option);
      });
    }
  }

  sort(new_option) {
    axios.get(`${process.env.API_URL}/reviews?product_id=${this.props.product_id}&sort=${this.state.sort_option}&count=${this.state.page * 2}`, {
      headers: {
        Authorization: process.env.AUTH_KEY,
      },
    })
      .then((response) => {
        console.log('successfully fetched reviews');
        this.setState({
          reviews: response.data.results,
        });
      })
      .catch((err) => console.log('error fetching reviews', err));
  }

  getRatings() {
    axios.get(`${process.env.API_URL}/reviews/meta?product_id=${this.props.product_id}`, {
      headers: {
        Authorization: process.env.AUTH_KEY,
      },
    })
      .then((response) => {
        console.log('successfully fetched ratings');
        console.log(response.data);
        let sum = getTotalRatings(response.data.ratings)[0];
        let totalRatings = getTotalRatings(response.data.ratings)[1];
        this.setState(
          {
            meta: response.data,
            average: (sum / totalRatings).toFixed(2),
            ratings: response.data.ratings,
            totalRatings,
            isLoaded: true,
          },
        );
      })
      .catch((err) => console.log('error fetching ratings', err));
  }

  setRatingFilter(rating) {
    let temp = this.state.ratingFilter;
    if (!temp[rating]) {
      temp[rating] = true;
    } else {
      temp[rating] = false;
    }
    //if there is not a single true in rating filter,
    //set filteredbyrating to false.
    if (Object.values(temp).indexOf(true) !== -1) {
      this.setState({ filteredByRating: true, ratingFilter: temp }, () => {
        this.getByRating();
      });
    } else {
      this.setState({ filteredByRating: false, ratingFilter: temp, filtered: [] }, () => {
      });
    }
  }

  getByRating() {
    //set temp as current list of reviews,
    //filter temp to fit ratings filter,
    //set state reviews to be temp.
    let temp = this.state.reviews;
    let obj = this.state.ratingFilter;
    let filtered = temp.filter((review) => {
      if (obj[review.rating+""]) {
        return review;
      }
    });
    this.setState({ filtered });
  }

  render() {
    return (
      <StyledMain>
        <StyledTitle>
          <div>
            RATINGS & REVIEWS
          </div>
        </StyledTitle>
        <StyledInner>
          <Ratings
            meta={this.state.meta}
            isLoaded={this.state.isLoaded}
            average={this.state.average}
            totalRatings={this.state.totalRatings}
            setRatingFilter={this.setRatingFilter}
            ratingFilter={this.state.ratingFilter}
          />
          {!this.state.filteredByRating && (
            <Reviews
            product_id={this.props.product_id}
            totalRatings={this.state.totalRatings}
            ratingFilter={this.state.ratingFilter}
            filteredByRating={this.state.filteredByRating}
            moreReviews={this.moreReviews}
            reviews={this.state.reviews}
            sort={this.sort}
            getReviews={this.getReviews}
            scrollMore={this.scrollMore}
            setSortOption={this.setSortOption}
            />
          )}
          {this.state.filteredByRating && (
            <Reviews
            totalRatings={this.state.totalRatings}
            ratingFilter={this.state.ratingFilter}
            filteredByRating={this.state.filteredByRating}
            moreReviews={this.moreReviews}
            reviews={this.state.filtered}
            sort={this.sort}
            getReviews={this.getReviews}
            scrollMore={this.scrollMore}
            setSortOption={this.setSortOption}
            />
          )}
        </StyledInner>
      </StyledMain>
    );
  }
}

const StyledButton = styled.button`
  width: auto;
  font-size: small;
  margin: 1%;
  margin-right: 3%;
  padding: 0.25em 1em;
  border-radius: 3px;
  background: white;
  color: black;
  border: 1px solid black;
  &:hover {
    cursor: pointer;
    opacity: 60%;
  }
`;

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  height: 90%;
  color: #1c1c1c;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
`;
const StyledInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: top;
  min-width: 700px;
  width: 90%;
  border-top: 1px solid black;
  padding-top: 1%;
  height: 100%
`;

const StyledTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 2%;
  font-size: small;
  font-weight: 400;
  margin-bottom: 1%;

`;

export default RatingsReviews;
