import React from 'react';
import './Exploremenu.css';
import { menu_list } from '../../assets/assets.js';

function Exploremenu({ category, setCategory }) {
    return (
        <div className='explore-menu' id='menu'>
            <h1>Explore our menu</h1>
            <p className='explore-menu-text'>Choose from a diverse range of delicious dishes crafted with the freshest ingredients. From comforting classics to exciting new flavors, there's something for every palate.</p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className="explore-menu-list-item">
                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt={item.menu_name} />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default Exploremenu