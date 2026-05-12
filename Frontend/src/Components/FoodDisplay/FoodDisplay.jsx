import React, { useContext } from 'react';
import './Fooddisplay.css';
import { StoreContext } from '../../Context/StoreContext';
import Fooditem from '../Fooditem/Fooditem';

function FoodDisplay({ category }) {

    const { food_list } = useContext(StoreContext);

    return (
        <div className='food-display'>
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {food_list.map((item, index) => {
                    return (
                         item.category === category || category === "All" ? (
                            <Fooditem key={index} id={item._id} description={item.description} name={item.name} price={item.price} image={item.image} />
                        )  : null
                    )
                })}
            </div>
        </div>
    )
}

export default FoodDisplay