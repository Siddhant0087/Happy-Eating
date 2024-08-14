import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

const Body = () => {
  const [listOfResturants, setListOfResturant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );

    const json = await data.json();
    console.log(json);
    setListOfResturant(
      json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  if (listOfResturants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className='body'>
      <div className='filter'>
        <button
          className='filter-btn'
          onClick={() => {
            const filteredList = listOfResturants.filter(
              (res) => res.info.avgRating > 4.0
            );
            setListOfResturant(filteredList);
            console.log(filteredList);
          }}
        >
          Top Reated Componenet
        </button>
      </div>
      <div className='res-container'>
        {listOfResturants.map((resturant) => (
          <RestaurantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
