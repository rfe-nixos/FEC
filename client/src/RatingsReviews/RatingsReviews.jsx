import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { parseISO, compareAsc } from 'date-fns';
import Ratings from './Ratings/Ratings.jsx';
import Reviews from './Reviews/Reviews.jsx';
import getTotalRatings from './lib/getTotalRatings';
import { useCurrentProductContext } from '../context.jsx';

function RatingsReviews() {
  const [meta, setMeta] = useState({});
  const [totalRatings, setTotalRatings] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [filteredByRating, setFilteredByRating] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);
  const [filtered, setFiltered] = useState([]);
  const [average, setAverage] = useState(0);
  const [ratings, setRatings] = useState([]);
  const [ratingFilter, setRatingFilter] = useState([]);
  const [sortedReviews, setSortedReviews] = useState([]);
  const [sortOption, setSortOption] = useState('');
  const [sorted, setSorted] = useState(false);
  const [sortCount, setSortCount] = useState(0);

  const productId = useCurrentProductContext();

  const getReviews = () => {
    axios.get(`${process.env.API_URL}/reviews?product_id=${productId}&count=500`, {
      headers: {
        Authorization: process.env.AUTH_KEY,
      },
    })
      .then((response) => {
        console.log('successfully fetched reviews');
        setReviews(response.data.results);
      })
      .then(() => {
        if (sorted) {
          sort(sortOption);
        }
      })
      .catch((err) => console.log('error fetching reviews', err));
  };

  useEffect(() => {
    getRatings();
    getReviews();
  }, [productId]);

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
        setAverage((sum / totalRatings).toFixed(1));
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
    const index = ratingFilter.indexOf(rating);
    if (index === -1) {
      setRatingFilter((a) => [...a, rating]);
    } else {
      const temp = ratingFilter;
      temp.splice(index, 1);
      setRatingFilter(() => [...temp]);
    }
  };

  const getByRating = () => {
    // set temp as current list of reviews,
    // filter temp to fit ratings filter,
    // set state reviews to be temp.
    const temp = reviews;
    const arr = ratingFilter;
    const filteredReviews = temp.filter((review) => {
      // if review.rating is found in array, return that review.
      const index = arr.indexOf(`${review.rating}`);
      if (index !== -1) {
        return review;
      }
    });
    setFiltered(filteredReviews);
  };

  useEffect(() => {
    console.log('ratingfilter is changing');
    if (ratingFilter.length > 0) { // once ratingfilter updates, is longer than 0
      getByRating();
      setFilteredByRating(true);
      console.log('snatchhh filtered by ratings');
    } else { // if its not longer than 0, empty array, just get regular reviews.
      getReviews();
      setFilteredByRating(false);
      setFiltered([]);
      console.log('regular reviews');
    }
  }, [ratingFilter]);

  const sort = (sortMethod) => {
    // setSorted(false);
    const temp = reviews;
    console.log('sortmethod is,', sortMethod);
    if (sortMethod === 'helpful') {
      temp.sort((a, b) => b.helpfulness - a.helpfulness);
      console.log('sorted reviews by helpfulness,');
      setSortedReviews(() => temp);
      setSortOption(sortMethod);
      setSortCount(sortCount + 1); // trigger effect
      setSorted(true);
    }
    if (sortMethod === 'newest') {
      temp.sort((a, b) => compareAsc(parseISO(b.date), parseISO(a.date)));
      console.log('sorted reviews by newest,');
      setSortedReviews(() => temp);
      setSortOption(sortMethod);
      setSortCount(sortCount + 1); // trigger effect
      setSorted(true);
    }
    if (sortMethod === 'relevance') { // relevance, just reset sort and get og reviews
      setSorted(false);
      setSortedReviews([]);
      getReviews();
    }
  };

  useEffect(() => {
    // listen to sortoption, if sortoption changes, reset page to 1.
    setPage(1);
  }, [sortOption]);

  useEffect(() => {
    console.log('USE EFFECT reviews are now sorted');
    if (sorted) {
      console.log('setting reviews to sorted reviews');
      setReviews[sortedReviews];
    }
  }, [sortCount]);

  useEffect(() => {
    console.log('page changed!!!');
    getReviews();
  }, [page]);

  const moreReviews = () => {
    setPage(page + 1);
  };
  const scrollMore = () => { // only works when its not filtered by rating.
    // if (!filteredByRating) {
    setPage(page + 1);
    // }
  };

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
          setRatingFilter={setRatingsFilter} // diff name from hook
          setSortOption={setSortOption}
          ratingFilter={ratingFilter}
        />
        {(filteredByRating) && (
          <Reviews
            productId={productId}
            totalRatings={totalRatings}
            reviews={filtered}
            moreReviews={moreReviews}
            setSort={sort}
            getReviews={getReviews}
            scrollMore={scrollMore}
            page={page}
          />
        )}
        {(!filteredByRating) && (
          <Reviews
            productId={productId}
            totalRatings={totalRatings}
            reviews={reviews}
            moreReviews={moreReviews}
            setSort={sort}
            getReviews={getReviews}
            scrollMore={scrollMore}
            page={page}
          />
        )}
      </StyledInner>
    </StyledMain>
  );
}

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  color: #1c1c1c;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  border-bottom: .5px solid black;
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
