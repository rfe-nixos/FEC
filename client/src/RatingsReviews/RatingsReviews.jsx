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
  const [ratingFilter, setRatingFilter] = useState([]);
  const [sortedReviews, setSortedReviews] = useState([]);

  //const productId = useCurrentProductContext();

  const getReviews = () => {
    axios.get(`${process.env.API_URL}/reviews?product_id=${productId}&count=500`, {
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
    // const temp = ratingFilter;
    // let index = temp.indexOf(rating); //get index
    // if (index === -1) {//if rating clicked doesnt exist in array,
    //   temp.push(rating);
    // } else {
    //   //if it exists, splice it out
    //   temp.splice(index, 1);
    // }
    // console.log('clicked, heres the updated filter', temp);
    let index = ratingFilter.indexOf(rating);
    if (index === -1) {
      setRatingFilter((a) => [...a, rating]);
    } else {
      let temp = ratingFilter;
      temp.splice(index, 1);
      setRatingFilter((a) => [...temp]);
    }
    // if there is not a single true in rating filter,
    // set filteredbyrating to false.
    // cant have this here because setratingffilter takes time! ----- ***
    // if (ratingFilter.length > 0) {
    //   console.log('filtered by rating true')
    //   setFilteredByRating(true);
    // } else {
    //   console.log('NOT filtered by rating')
    //   setFilteredByRating(false);
    //   setFiltered([]);
    // }
  }

  const getByRating = () => {
    // set temp as current list of reviews,
    // filter temp to fit ratings filter,
    // set state reviews to be temp.
    const temp = reviews;
    const arr = ratingFilter;
    const filteredReviews = temp.filter((review) => {
      //if review.rating is found in array, return that review.
      let index = arr.indexOf(review.rating+'');
      console.log(index);
      if(index !== -1) {
        console.log('review found!');
        return review;
      }
    });
    setFiltered(filteredReviews);
  };

  useEffect(() => {
    console.log('ratingfilter is changing');
    if(ratingFilter.length > 0) { //once ratingfilter updates, is longer than 0
      getByRating();
      setFilteredByRating(true);
      console.log('snatchhh filtered by ratings');
    } else {  //if its not longer than 0, empty array, just get regular reviews.
      getReviews();
      setFilteredByRating(false);
      setFiltered([]);
      console.log('regular reviews');
    }
  }, [ratingFilter]);

  const setSort = (sort_option) => {
    setSorted(true); //set sorted to true.
    setSortOption(sort_option); //set the sort option
    console.log('sort option is', sort_option);
  }

  const sort = (sortMethod) => {
    const temp = reviews;
    let sorted = temp.filter((review) => {
      if (review.rating === 1) {
        console.log(review);
        return review;
      }
    });
    console.log('sorted reviews,', sorted);
    setSortedReviews(sorted);
  }

  useEffect(() => {
    console.log('fetching by sort');
    //getReviews(); //should be sort
    sort();
  }, [sortOption])

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
        />
        {(filteredByRating) && (
          <Reviews
            productId={productId}
            totalRatings={totalRatings}
            reviews={filtered}
            moreReviews={moreReviews}
            setSort={setSort}
          />
        )}
        {(sorted) && (
          <Reviews
            productId={productId}
            totalRatings={totalRatings}
            reviews={sortedReviews}
            moreReviews={moreReviews}
            setSort={setSort}
          />
        )}
        {(!filteredByRating && !sorted) && (
          <Reviews
            productId={productId}
            totalRatings={totalRatings}
            reviews={reviews}
            moreReviews={moreReviews}
            setSort={setSort}
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
