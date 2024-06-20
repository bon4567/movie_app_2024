import React from "react";
import { PropTypes } from "prop-types";


function Food({ name, picture, rating }) {
  return( 
    <div>
  <h3>I Love {name}</h3>
  <h4>{rating}/5.0</h4>
  <img src={picture} alt={name} />
    </div>
  )
}

const foodLike = [
  {
    id: 1,
    name:'Kimchi',
    image: 'https://i.namu.wiki/i/oqkbH6Ff5ehja1bgs6sQt8Hw7Sdt8SjjEm7vhwVoWbQt0NrTldI7UhPYXN8NCT1ZPX465nyzp_PYTwgSm6JdZMNMMzIV7qH28V596wW7hJfnzo9HSsyD9GPuIdYjPu9V4oMYCIxOTX6mtsPd6cOaFQ.webp',
    rating:5
  },
  {
    id: 2,
    name: 'ramen',
    image: 'https://i.namu.wiki/i/qgU8XxY2dRw4pOP3OPdXvbpCsmSLkQz-ZW2kFqS3i6w04Pkj6s6Np9CV3KauqwiHnj_uSJO3oSU81W__8kNqt8aciXsj_uFOfcX41WZNrp5e2FuSJenZEyb1YhFxP5tHXGRKYDl4Z3VSIgKp7rFoQg.webp',
    rating:2
  },
  {
    id: 3,
    name:'samgim',
    image: 'https://i.namu.wiki/i/U31T3YYPwyPlIqxaGwRXBinqxdjBxQEuQ4c_Fbx0gCCXjuMf3TOEXtIOqO5zo3DfmvkabrOJGvQqAZ9whP7II9Sh9kWw3GcgkhIRGKiWZhH1iPgevk0BTcOE52aG5lqAV7m0NV_qodVyMxC40Wkczw.webp',
    rating:3
  },
  {
    id: 4,
    name:'Chicken',
    image:'https://i.namu.wiki/i/hdQkCi-HdqnYi4OapN8VKe03HOlkad8X8R_XUYYrHxuazB2H-72-5rpYTbYeRdtV_Ii_hNdSQm1q_FyQVtWYcKCZUq3nn5aRe6NUtwMnBf-v4mG2lNOjmHFHXQyYvJLCCeHitUWTjlsDs-x_5-_Giw.webp',
    rating:4
  },
  {
    id: 5,
    name:'katsu',
    image:'https://i.namu.wiki/i/H26VUpYzDOjiqPfTOGCFW3yHKoBlGGDvMM9elVNv-4_PcmibamMFT6eiiCrxeFYtHRqJ_nNEnmv8T25a7l2udZkjGGGhgEqIalXCG6n_puVZ-nAIVazDK_WNKYYUajDTMSBbg1cYNJXbo-AVUljmYA.webp',
    rating:99999
  }
];

function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
};

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodLike.map(renderFood)}
    </div>
  );
};

Food.propTypes = {
  name:PropTypes.number.isRequired,
  picture:PropTypes.number.isRequired,
  rating:PropTypes.number.isRequired,
}

export default App;
