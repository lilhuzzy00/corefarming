import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div>
      <div className='headerbox'>
        <div style={{paddingLeft: "10px", fontWeight: "bold"}}>
          <Link href="/" className="headerboxLink">
              <span >Farming Spirit</span>
          </Link>
        </div>
        <div className="">
            {categories.map((category, index) => (
              <Link className="headerboxLink headerboxLink2" key={index} href={`/category/${category.slug}`}><span className="">{category.name}</span></Link>
            ))}
        </div>
      </div>
      <div className='bg'>
        <div className='bgc'>
          Farming Spirit
        </div>
      </div>
    </div>
  );
};

export default Header;
