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
  const [sorted, setSorted] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const [average, setAverage] = useState(0);
  const [ratings, setRatings] = useState([]);
  const [ratingFilter, setRatingFilter] = useState({});
  const [sortedReviews, setSortedReviews] = useState([]);

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
  };

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

  const setRatingsFilter = (rating) => {
    const temp = ratingFilter;
    if (!temp[rating]) {
      temp[rating] = true;
    } else {
      temp[rating] = false;
    }
    // if there is not a single true in rating filter,
    // set filteredbyrating to false.
    if (Object.values(temp).indexOf(true) !== -1) {
      setFilteredByRating(true);
      setRatingFilter(temp);
    } else {
      setFilteredByRating(false);
      setRatingFilter(temp);
      setFiltered([]);
    }
  }

  const getByRating = () => {
    // set temp as current list of reviews,
    // filter temp to fit ratings filter,
    // set state reviews to be temp.
    const temp = reviews;
    const obj = ratingFilter;
    const filteredReviews = temp.filter((review) => {
      if (obj[`${review.rating}`]) {
        return review;
      }
    });
    setFiltered(filteredReviews);
  }

  useEffect(() => {
    //getByRating();
    console.log('snatchhhhh');
  }, [filteredByRating, ratingFilter]);

  const setSort = (sort_option) => {
    setSortOption(sort_option);
    console.log('sort option is', sort_option);
  }

  useEffect(() => {
    console.log('fetching by sort');
    //getReviews(); //should be sort
    sort();
  }, [sortOption])

  const sort = (new_option) => {
    axios.get(`${process.env.API_URL}/reviews?product_id=${productId}&sort=${new_option}&count=${page * 2}`, {
      headers: {
        Authorization: process.env.AUTH_KEY,
      },
    })
      .then((response) => {
        console.log('successfully fetched reviews');
        // this.setState({
        //   reviews: response.data.results,
        // });
        setReviews(response.data.results);
      })
      .catch((err) => console.log('error fetching reviews', err));
  }

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
          setRatingFilter={setRatingsFilter}
          setSortOption={setSortOption}
        />
        {(sorted) && (
          <Reviews
            productId={productId}
            totalRatings={totalRatings}
            reviews={sortedReviews}
            moreReviews={moreReviews}
          />
        )}
        {(!sorted) && (
          <Reviews
            productId={productId}
            totalRatings={totalRatings}
            reviews={reviews}
            moreReviews={moreReviews}
            setSortOption={setSort}
          />
        )}
      </StyledInner>
    </StyledMain>
  );
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
