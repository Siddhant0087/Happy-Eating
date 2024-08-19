import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

const Body = () => {
  const [listOfResturants, setListOfResturant] = useState([]);

  const [filteredRes, newFilteredRes] = useState([]);

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );

    const json = await data.json();
    // console.log(json);
    setListOfResturant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    newFilteredRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //Condition rendering
  // if (listOfResturants.length === 0) {
  //   return <Shimmer />;
  // return <div>Loading...</div>;
  // }

  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='body'>
      <div className='filter'>
        <div className='search'>
          <input
            className='input-search'
            type='text'
            placeholder='Search'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className='search-btn'
            onClick={() => {
              const searchResturant = listOfResturants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              newFilteredRes(searchResturant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className='filter-btn'
          onClick={() => {
            const filteredList = listOfResturants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfResturant(filteredList);
            // console.log(filteredList);
          }}
        >
          Top Reated Componenet
        </button>
      </div>
      <div className='res-container'>
        {filteredRes.map((resturant) => (
          <RestaurantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
