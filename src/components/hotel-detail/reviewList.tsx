import Review from './review';

const users = [
  {
    name: 'Umesh',
    yearsOnAirbnb: 2,
    rating: 5,
    date: 'June 2024',
    review: 'Stay was awesome with peaceful, off beat location. Food made by the cook was delicious and appreciable. I would suggest to stay for more days whenever plan to visit the plac...',
    image: 'https://example.com/umesh.jpg', 
  },
  {
    name: 'Susmit',
    yearsOnAirbnb: 3,
    rating: 4,
    date: 'April 2024',
    review: 'My stay at Himalayan Cedar Nest was nothing short of amazing! The location couldn\'t have been more perfect. It truly allowed me to immerse myself in the heart of Sainj...',
    image: 'https://example.com/susmit.jpg',
  },
  {
    name: 'Nand',
    yearsOnAirbnb: 7,
    rating: 5,
    date: 'May 2024',
    review: 'Himalayan Cedar Nest is in the middle of a lush green area. The condition of the road to this place is average. However, the host (Satish) provided clear instructions on how to reach the...',
    image: 'https://example.com/nand.jpg',
  },

];
console.log("users ",users)
const ReviewsList = () => {
  return (
  <>
     
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 border-t my-4">
         
      {users.map((user, index) => (
         <Review key={index} user={user} />
      ))}
    </div>
  </>
  );
};

export default ReviewsList;
