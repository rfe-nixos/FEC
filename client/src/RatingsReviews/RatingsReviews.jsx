import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Ratings from './Ratings/Ratings.jsx';
import Reviews from './Reviews/Reviews.jsx';
import getTotalRatings from './lib/getTotalRatings';
import { useCurrentProductUpdate, useCurrentProductContext } from '../context.jsx';

function RatingsReviews({ productId }) {
  const [meta, setMeta] = useState({});
  const [totalRatings, setTotalRatings] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [filteredByRating, setFilteredByRating] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);
  const [sortOption, setSortOption] = useState('');
  const [sorted, setSorted] = useState('false');
  const [filtered, setFiltered] = useState([]);
  const [average, setAverage] = useState(0);
  const [ratings, setRatings] = useState([]);

  const getReviews = () => {
    axios.get(`${process.env.API_URL}/reviews?product_id=${productId}&count=${page * 2}`, {
      headers: {
        Authorization: process.env.AUTH_KEY,
      },
    })
      .then((response) => {
        console.log('successfully fetched reviews');
        setReviews(response.data.results);
        // this.setState({ reviews: response.data.results });
      })
      .catch((err) => console.log('error fetching reviews', err));
  };

  const moreReviews = () => {
    setPage(page + 1);
  }

  useEffect(() => {
    console.log('page changed!!!')
    getReviews();
  }, [page]);

  const getRatings = () => {
    axios.get(`${process.env.API_URL}/reviews/meta?product_id=${productId}`, {
      headers: {
        Authorization: process.env.AUTH_KEY,
      },
    })
      .then((response) => {
        const sum = getTotalRatings(response.data.ratings)[0];
        const totalRatings = getTotalRatings(response.data.ratings)[1];
        setMeta(response.data);
        setAverage((sum / totalRatings).toFixed(2));
        setRatings(response.data.ratings);
        setTotalRatings(totalRatings);
        setIsLoaded(true);
      })
      .catch((err) => console.log('error fetching ratings', err));
  };

  useEffect(() => {
    getReviews();
    getRatings();
  }, []);

  return (
    <StyledMain id="ratings-reviews">
      <StyledTitle id="inner-title">
        <div>
          RATINGS & REVIEWS
        </div>
      </StyledTitle>
      <StyledInner id="inner-main">
        <Ratings
          meta={meta}
          isLoaded={isLoaded}
          average={average}
          totalRatings={totalRatings}
        />
        <Reviews
          productId={productId}
          totalRatings={totalRatings}
          reviews={reviews}
          moreReviews={moreReviews}
        />
      </StyledInner>
    </StyledMain>
  );
}

//   getReviews() {
//     if (!this.state.sorted) {
//       axios.get(`${process.env.API_URL}/reviews?product_id=${this.props.productId}&count=${this.state.page * 2}`, {
//         headers: {
//           Authorization: process.env.AUTH_KEY,
//         },
//       })
//         .then((response) => {
//           // console.log('successfully fetched reviews');
//           this.setState({ reviews: response.data.results });
//         })
//         .catch((err) => console.log('error fetching reviews', err));
//     } else {
//       this.sort(this.state.sort_option);
//     }
//   }

//   moreReviews() {
//     let { page } = this.state;
//     page += 1;
//     this.setState({
//       page, filteredByRating: false, filtered: [], ratingFilter: {},
//     }, () => {
//       console.log(page, 'page of more results');
//       this.getReviews();
//     });
//   }

//   scrollMore() { // only works when its not filtered by rating.
//     if (!this.state.filteredByRating) {
//       let { page } = this.state;
//       page += 1;
//       this.setState({ page }, () => {
//         console.log(page, 'page of more results');
//         this.getReviews();
//       });
//     }
//   }

//   setSortOption(new_option) {
//     if (new_option !== this.state.sort_option) {
//       console.log('sorting by', new_option);
//       this.setState({
//         page: 1,
//         sort_option: new_option,
//         sorted: true,
//         filteredByRating: false,
//         filtered: [],
//         ratingFilter: {},
//       }, () => {
//         this.sort(new_option);
//       });
//     }
//   }

//   sort(new_option) {
//     axios.get(`${process.env.API_URL}/reviews?product_id=${this.props.productId}&sort=${this.state.sort_option}&count=${this.state.page * 2}`, {
//       headers: {
//         Authorization: process.env.AUTH_KEY,
//       },
//     })
//       .then((response) => {
//         console.log('successfully fetched reviews');
//         this.setState({
//           reviews: response.data.results,
//         });
//       })
//       .catch((err) => console.log('error fetching reviews', err));
//   }

//   getRatings() {
//     axios.get(`${process.env.API_URL}/reviews/meta?product_id=${this.props.productId}`, {
//       headers: {
//         Authorization: process.env.AUTH_KEY,
//       },
//     })
//       .then((response) => {
//         const sum = getTotalRatings(response.data.ratings)[0];
//         const totalRatings = getTotalRatings(response.data.ratings)[1];
//         this.setState(
//           {
//             meta: response.data,
//             average: (sum / totalRatings).toFixed(2),
//             ratings: response.data.ratings,
//             totalRatings,
//             isLoaded: true,
//           },
//         );
//       })
//       .catch((err) => console.log('error fetching ratings', err));
//   }

//   setRatingFilter(rating) {
//     const temp = this.state.ratingFilter;
//     if (!temp[rating]) {
//       temp[rating] = true;
//     } else {
//       temp[rating] = false;
//     }
//     // if there is not a single true in rating filter,
//     // set filteredbyrating to false.
//     if (Object.values(temp).indexOf(true) !== -1) {
//       this.setState({ filteredByRating: true, ratingFilter: temp }, () => {
//         this.getByRating();
//       });
//     } else {
//       this.setState({ filteredByRating: false, ratingFilter: temp, filtered: [] }, () => {
//       });
//     }
//   }

//   getByRating() {
//     // set temp as current list of reviews,
//     // filter temp to fit ratings filter,
//     // set state reviews to be temp.
//     const temp = this.state.reviews;
//     const obj = this.state.ratingFilter;
//     const filtered = temp.filter((review) => {
//       if (obj[`${review.rating}`]) {
//         return review;
//       }
//     });
//     this.setState({ filtered });
//   }

//   render() {
//     return (
//       <StyledMain id="ratings-reviews">
//         <StyledTitle id="inner-title">
//           <div>
//             RATINGS & REVIEWS
//           </div>
//         </StyledTitle>
//         <StyledInner id="inner-main">
//           <Ratings
//             meta={this.state.meta}
//             isLoaded={this.state.isLoaded}
//             average={this.state.average}
//             totalRatings={this.state.totalRatings}
//             setRatingFilter={this.setRatingFilter}
//             ratingFilter={this.state.ratingFilter}
//           />
//           {!this.state.filteredByRating && (
//             <Reviews
//               productId={this.props.productId}
//               totalRatings={this.state.totalRatings}
//               ratingFilter={this.state.ratingFilter}
//               filteredByRating={this.state.filteredByRating}
//               moreReviews={this.moreReviews}
//               reviews={this.state.reviews}
//               sort={this.sort}
//               getReviews={this.getReviews}
//               scrollMore={this.scrollMore}
//               setSortOption={this.setSortOption}
//             />
//           )}
//           {this.state.filteredByRating && (
//             <Reviews
//               totalRatings={this.state.totalRatings}
//               ratingFilter={this.state.ratingFilter}
//               filteredByRating={this.state.filteredByRating}
//               moreReviews={this.moreReviews}
//               reviews={this.state.filtered}
//               sort={this.sort}
//               getReviews={this.getReviews}
//               scrollMore={this.scrollMore}
//               setSortOption={this.setSortOption}
//             />
//           )}
//         </StyledInner>
//       </StyledMain>
//     );
//   }
// }

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
  width: 70%;
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
  width: 100%;
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
