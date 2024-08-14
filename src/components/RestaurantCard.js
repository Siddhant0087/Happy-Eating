import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo } = resData.info;
  const { deliveryTime } = resData.info.sla;
  // console.log(props);
  return (
    <div className='res-card' style={{ backgroundColor: '#f0f0f0' }}>
      <img
        className='res-logo'
        src={CDN_URL + resData.info.cloudinaryImageId}
        alt='res-logo'
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo} </h4>
      <h4>{deliveryTime} min</h4>
    </div>
  );
};
export default RestaurantCard;
