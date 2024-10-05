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
    <div className='headerbox'>
      <div>
        <Link href="/" className="headerboxLink">
            <span className="">Graph CMS</span>
        </Link>
      </div>
      <div className="">
          {categories.map((category, index) => (
             <Link className="headerboxLink headerboxLink2" key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
           ))}
      </div>
    </div>
  );
};

export default Header;
