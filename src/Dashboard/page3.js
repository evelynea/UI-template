import MyCard from './card';
import stat from '../statistics.jpg'

export default function Page3() {
  return (
    <>
    <div className="bg-transparent shadow-lg w-full">
  
          <div className="flex gap-x-8 ">
            <span className="flex-grow cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Best seller</span>
            <span className="flex-grow cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">New Releases</span>
            <span className="flex-grow cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Books</span>
            <span className="flex-grow cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Computers</span>
            <span className="flex-grow cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Fashion</span>
            <span className="flex-grow cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Toys & Games</span>
          </div>
          <div className="flex w-full">
            <span className="flex-grow cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">District</span>
            <span className="flex-grow cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Sector</span>
            <span className="flex-grow cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Event type</span>
            <span className="flex-grow cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">select a date</span>
          </div>

         
        </div>
        <MyCard/>
        <img src={stat} alt="Statistics" style={{ width: '450px', height: 'auto' }}/>

        </>
    
  );
}