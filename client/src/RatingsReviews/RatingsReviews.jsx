import React from 'react';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';

const RatingsReviews = () => {
  return (
    <div>
         Ratings and Reviews here.
         <div>
           <Ratings />
         </div>
          <div>
           <Reviews />
         </div>
       </div>
  );
}
// class RatingsReviews extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       reviews: []
//     }
//   }



//   render() {
//     return (
//       <div>
//         Ratings and Reviews here.
//         <div>
//           <Ratings />
//         </div>
//         <div>
//           <Reviews />
//         </div>
//       </div>
//     )
//   }

// }

export default RatingsReviews;

//renders
// ratings component on the left
// reviewslist component on the right