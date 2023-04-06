function Card({ children }) {
  return (
    <div className="w-full h-full p-8 relative rounded-md bg-white border-2 border-neutral-200">
      {children}
    </div>
  );
}

export default Card;
