const RoomCard = ({ title, desc, price, img }) => (
  <div className="bg-white rounded shadow-md overflow-hidden">
    <img src={img} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{desc}</p>
      <p className="mt-2 font-semibold text-green-600">₹{price}/night</p>
    </div>
  </div>
);

export default RoomCard;
