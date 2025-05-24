import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const { id } = useParams();
  // console.log('Id ' + id);
  // console.log(params);

  const resInfo = useRestaurantMenu(id);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + id);
  //   const json = await data.json();

  //   console.log(json.data);
  //   setResInfo(json.data);
  // };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // const nonVegItems =
  //   resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
  //     .categories[0].itemCards;

  // const totalMenu = [...itemCards, ...nonVegItems];

  // totalMenu.sort((a, b) => a.card.info.name.localeCompare(b.card.info.name));

  // console.log(totalMenu);

  return (
    <div className='resMenu'>
      <h1>{name}</h1>
      <p>
        {cuisines.join(', ')} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        <h4>Recommended</h4>
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - {item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
