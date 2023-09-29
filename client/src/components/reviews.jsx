import React from 'react';
import { BiSolidStar } from 'react-icons/bi';

const Reviews = () => {
    return (
        <div className="flex flex-col items-center gap-3 mt-14 mb-10 px-9">
        <div className="flex gap-4">
  
          {/* First Review */}
          <div className="flex flex-col gap-4 bg-yellow-950 p-4 w-1/2 rounded-2xl opacity-90">
            <div className="flex justify-between">
              <div className="flex gap-2">
                <div className="w-7 h-7 text-center text-white rounded-full bg-sred">J</div>
                <span className='text-white text-xl'>Jess Hopkins</span>
              </div>
              <div className="flex p-1 gap-1 text-orange-300">
                <BiSolidStar />
                <BiSolidStar />
                <BiSolidStar />
                <BiSolidStar />
                <BiSolidStar />
              </div>
            </div>
            <div className='text-white'>
            In the world of breakfast sandwiches, the BEC aka bacon egg and cheese always holds a special place in my heart. The Stasio's bacon, egg, and cheese is absolutely delicious. A perfectly cooked egg- one that isn't too runny but gives you a big of soft yolk, crisp bacon, cheese and soft bread.
            </div>
            <div className="flex justify-between text-white">
              <span>Sept 27th, 2023</span>
            </div>
          </div>
  
          {/* Second Review */}
          <div className="flex flex-col gap-4 bg-yellow-950 p-4 w-1/2 rounded-2xl opacity-90">
            <div className="flex justify-between">
              <div className="flex gap-2">
                <div className="w-7 h-7 text-center text-white rounded-full bg-sred">T</div>
                <span className='text-white text-xl'>Theresa Leinhart</span>
              </div>
              <div className="flex p-1 gap-1 text-orange-300">
                <BiSolidStar />
                <BiSolidStar />
                <BiSolidStar />
                <BiSolidStar />
                <BiSolidStar />
              </div>
            </div>
            <div className='text-white'>
            Definitely a local favorite from what I can tell. Parking lot full, people waiting in line, and groups eating outside in the available tables. You have to love a good authentic deli.
            </div>
            <div className="flex justify-between text-white">
              <span>Sept 24th, 2023</span>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
  
  {/* First Review */}
  <div className="flex flex-col gap-4 bg-yellow-950 p-4 w-1/2 rounded-2xl opacity-90">
    <div className="flex justify-between">
      <div className="flex gap-2">
        <div className="w-7 h-7 text-center text-white rounded-full bg-sred">S</div>
        <span className='text-white text-xl'>Sasha Lovejoy</span>
      </div>
      <div className="flex p-1 gap-1 text-orange-300">
        <BiSolidStar />
        <BiSolidStar />
        <BiSolidStar />
        <BiSolidStar />
        <BiSolidStar />
      </div>
    </div>
    <div className='text-white'>
    This place reminds me of NY. Not only is it a hole in the wall, the staff is so friendly. You walk up to the deli counter and place your order. They also have pastries which I couldn't resist. We ordered a bacon, egg and cheese and an eggplant parm. Flavors was on point! Hot, fresh, delicious!
    </div>
    <div className="flex justify-between text-white">
      <span>Sept 10th, 2023</span>
    </div>
  </div>

  {/* Second Review */}
  <div className="flex flex-col gap-4 bg-yellow-950 p-4 w-full sm:w-1/2 rounded-2xl opacity-90">
    <div className="flex justify-between">
      <div className="flex gap-2">
        <div className="w-8 h-8 text-center text-white rounded-full bg-sred">W</div>
        <span className='text-white text-xl'>Wesley Jones</span>
      </div>
      <div className="flex p-1 gap-1 text-orange-300">
        <BiSolidStar />
        <BiSolidStar />
        <BiSolidStar />
        <BiSolidStar />
        <BiSolidStar />
      </div>
    </div>
    <div className='text-white'>
    This place singlehandedly made me want to make my move back to New Jersey sooner. I've been to a lot of places throughout my year in Orlando, and none of them made a sandwich as good as Stasio's. This place is the real deal.
    </div>
    <div className="flex justify-between text-white">
      <span>Aug 28th, 2023</span>
    </div>
  </div>
</div>
      </div>
    );
  };

export default Reviews;