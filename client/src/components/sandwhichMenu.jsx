import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_SUBS } from '../utils/queries';

const SandwichMenu = () => {
  const { data, loading, error } = useQuery(QUERY_SUBS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.error('GraphQL Error:', error);
    return (
      <div className="error-message">
        <p>Error: {error.message}</p>
      </div>
    );
  }

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
    <div className='flex flex-col md:flex-row w-full'>
        <div className='w-full md:w-[750px] p-10'>
        <ul className='text-amber-800'>
            {renderFirstMenuItems()}
        </ul>
        </div>
        <div className='w-full md:w-px bg-gray-300 md:h-[80vh]'></div>
        <div className='w-full md:w-[750px] p-10'>
          <div className='flex flex-col items-center'>
            <ul className='text-amber-800'>
            {renderSecondMenuItems()}
            </ul>
          </div>
        </div>
      </div>
  )};

export default SandwichMenu;