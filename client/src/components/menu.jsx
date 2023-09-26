import React from 'react';

const Menu = () => {
  return (
    <div name='menu' className='flex flex-col items-center min-h-screen max-h-3/4 relative px-4 max-w-[900px] mx-auto'>
      {/* Add a small top border */}
      <div className='w-full md:w-px bg-gray-300 h-1 mt-4'></div>
      <div className='text-3xl md:text-4xl lg:text-5xl text-center mb-6 relative'>
        <span className='border-b-4 border-green-500 w-1/3 inline-block'></span>
        <span className='border-b-4 border-white w-1/3 inline-block'></span>
        <span className='border-b-4 border-red-500 w-1/3 inline-block'></span>
        <span className='relative z-10 bg-white px-2 md:px-4'>Our Menu</span>
        <div>
        <span className="text-sm text-gray-400">Sandwiches / Desserts / Delicacies</span> {/* Smaller and light grey */}
        </div>
      </div>
      <div className='flex flex-col md:flex-row w-full'>
        <div className='w-full md:w-1/2 p-6'>
          <ul className='text-gray-600'>
            <li className='mb-4'>
              <div className='bg-gray-100 rounded-lg p-4'>
                <strong className='text-lg md:text-xl lg:text-2xl'>Prosciutto Panini</strong>
                <p className='mt-2'>
                  A classic Italian sandwich with thinly sliced prosciutto, fresh mozzarella, and arugula. <br />
                  <em className='italic'>$9.99</em>
                </p>
              </div>
            </li>
            <li className='mb-4'>
              <div className='bg-gray-100 rounded-lg p-4'>
                <strong className='text-lg md:text-xl lg:text-2xl'>Caprese Salad</strong>
                <p className='mt-2'>
                  A refreshing salad made with tomatoes, fresh mozzarella, basil, and balsamic glaze. <br />
                  <em className='italic'>$8.49</em>
                </p>
              </div>
            </li>
            <li className='mb-4'>
              <div className='bg-gray-100 rounded-lg p-4'>
                <strong className='text-lg md:text-xl lg:text-2xl'>Lasagna</strong>
                <p className='mt-2'>
                  Layers of pasta, rich meat sauce, creamy béchamel, and melted cheese. <br />
                  <em className='italic'>$12.99</em>
                </p>
              </div>
            </li>
            <li className='mb-4'>
              <div className='bg-gray-100 rounded-lg p-4'>
                <strong className='text-lg md:text-xl lg:text-2xl'>Margherita Pizza</strong>
                <p className='mt-2'>
                  A classic pizza with tomato sauce, fresh mozzarella, basil, and olive oil. <br />
                  <em className='italic'>$10.99</em>
                </p>
              </div>
            </li>
            {/* Add more menu items here */}
          </ul>
        </div>
        <div className='w-full md:w-px bg-gray-300 md:h-[80vh]'></div>
        <div className='w-full md:w-1/2 p-6'>
          <ul className='text-gray-600'>
            <li className='mb-4'>
              <div className='bg-gray-100 rounded-lg p-4'>
                <strong className='text-lg md:text-xl lg:text-2xl'>Tiramisu</strong>
                <p className='mt-2'>
                  An Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese. <br />
                  <em className='italic'>$6.99</em>
                </p>
              </div>
            </li>
            <li className='mb-4'>
              <div className='bg-gray-100 rounded-lg p-4'>
                <strong className='text-lg md:text-xl lg:text-2xl'>Ravioli al Pomodoro</strong>
                <p className='mt-2'>
                  Homemade ravioli stuffed with ricotta cheese, served in a tomato and basil sauce. <br />
                  <em className='italic'>$11.49</em>
                </p>
              </div>
            </li>
            <li className='mb-4'>
              <div className='bg-gray-100 rounded-lg p-4'>
                <strong className='text-lg md:text-xl lg:text-2xl'>Chicken Alfredo</strong>
                <p className='mt-2'>
                  Fettuccine pasta with creamy Alfredo sauce and grilled chicken. <br />
                  <em className='italic'>$13.99</em>
                </p>
              </div>
            </li>
            <li className='mb-4'>
              <div className='bg-gray-100 rounded-lg p-4'>
                <strong className='text-lg md:text-xl lg:text-2xl'>Minestrone Soup</strong>
                <p className='mt-2'>
                  A hearty Italian vegetable soup with pasta and beans. <br />
                  <em className='italic'>$6.49</em>
                </p>
              </div>
            </li>
            {/* Add more menu items here */}
          </ul>
        </div>
      </div>
      {/* Add a small bottom border */}
      <div className='w-full md:w-px bg-gray-300 h-1'></div>
    </div>
  );
};

export default Menu;
