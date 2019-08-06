import React from 'react';
import propTypes from 'prop-types';

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
    "http://recipe1.ezmember.co.kr/cache/recipe/2015/04/02/238f0a3e8b567db1229b0f27220033341.jpg",
    rating: 5.0

  },
  {
    id: 2,
    name: "Kimbob",
    image:
    "http://recipe1.ezmember.co.kr/cache/recipe/2016/04/08/1d26c0444e724bca8ed271b24da0057a1.jpg",
    rating: 4.6
  },
  {
    id: 3,
    name: "Ramen",
    image:
    "https://0.soompi.io/wp-content/uploads/2013/05/ramen-main.jpg?s=900x600&e=t",
    rating: 4.9
  },
  {
    id: 4,
    name: "Doncasu",
    image:
    "http://img.sbs.co.kr/newsnet/etv/upload/2014/01/10/30000347969_700.jpg",
    rating: 4.3
  }
];


function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I Like {name}</h2>
      <h4>rating is {rating}/5.0</h4>
      <img src={picture} alt={name} height="300px" />
    </div>
  );
}

Food.propTypes = {
  name: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
  rating: propTypes.number
};

function App() {
  return (
    <div className="App">
        <h1>Hello React</h1>
        {foodILike.map((dish) => (
          <Food 
          key={dish.id} 
          name={dish.name} 
          picture={dish.image} 
          rating={dish.rating}/>
        ))}
    </div>
  );
}

export default App;
