import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_SUBS } from '../utils/queries';

const Menu = () => {
  // Use the useQuery hook to fetch data and handle errors
  const { data, loading, error } = useQuery(QUERY_SUBS);

  if (loading) {
    return <p>Loading...</p>;
  }

  // Handle GraphQL query errors
  if (error) {
    console.error('GraphQL Error:', error);
    return (
      <div className="error-message">
        <p>Error: {error.message}</p>
      </div>
    );
  }

  // Assuming your GraphQL query returns an array of menu items
  const menuItems = data.subs;

  const midpoint = Math.ceil(menuItems.length / 2);

  // Split the menuItems array into two separate arrays
  const firstHalf = menuItems.slice(0, midpoint);
  const secondHalf = menuItems.slice(midpoint);

  const renderFirstMenuItems = () => {
    return firstHalf.map((item) => (
      <li key={item._id} className='mb-4'>
        <div className='bg-gray-100 rounded-lg p-4 text-amber-800'>
          <strong className='text-lg md:text-xl lg:text-2xl text-amber-950'>{item.subName}</strong>
          <p className='mt-2'>
            {item.ingredients}<br />
            <em className='italic'>${parseFloat(item.price).toFixed(2)}</em>
          </p>
        </div>
      </li>
    ));
  };

  const renderSecondMenuItems = () => {
    return secondHalf.map((item) => (
      <li key={item._id} className='mb-4'>
        <div className='bg-gray-100 rounded-lg p-4'>
          <strong className='text-lg md:text-xl lg:text-2xl text-amber-950'>{item.subName}</strong>
          <p className='mt-2'>
            {item.ingredients}<br />
            <em className='italic'>${parseFloat(item.price).toFixed(2)}</em>
          </p>
        </div>
      </li>
    ));
  };

  return (
    <div name='menu' className='bg-white rounded-xl items-center min-h-screen max-h-3/4 relative mb-4 p-4 sm:mt-[13rem] px-4 max-w-[1500px] mx-auto text-amber-950'>
      {/* Add a small top border */}
      <div className='w-full md:w-px bg-gray-300 h-1 mt-4'></div>
      <div className='text-3xl md:text-5xl lg:text-6xl text-center mb-6 relative'>
        <span className='border-b-4 border-sgreen w-1/3 inline-block'></span>
        <span className='border-b-4 border-white w-1/3 inline-block'></span>
        <span className='border-b-4 border-sred w-1/3 inline-block'></span>
        <span className='relative z-1 px-2 md:px-4'>Our Menu</span>
        <br />
        <span className="text-[30px] text-amber-800 opacity-50">Sandwiches / Desserts / Delicacies</span> {/* Smaller and light grey */}
      </div>
      <div className='flex flex-col md:flex-row w-full'>
        <div className='w-full md:w-[750px] p-10'>
          <div className='flex flex-col items-center'>
            <ul className='text-gray-600'>
              {renderFirstMenuItems()}
              {/* Add more menu items here */}
            </ul>
          </div>
        </div>
        <div className='w-full md:w-px bg-gray-300 md:h-[80vh]'></div>
        <div className='w-full md:w-[750px] p-10'>
          <div className='flex flex-col items-center'>
            <ul className='text-amber-800'>
              {renderSecondMenuItems()}
              {/* Add more menu items here */}
            </ul>
          </div>
        </div>
      </div>
      {/* Add a small bottom border */}
      <div className='w-full md:w-px bg-gray-300 h-1'></div>
    </div>
  );
};

export default Menu;
