const RandomShape = () => {
  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none">
      {/* More evenly distributed shapes */}
      <div className="absolute w-64 h-64 bg-purple-500 rounded-full opacity-20 blur-2xl top-[10%] left-[5%]"></div>
      <div className="absolute w-48 h-48 bg-blue-500 rounded-full opacity-20 blur-2xl top-[30%] left-[15%]"></div>
      <div className="absolute w-56 h-56 bg-green-500 rounded-full opacity-20 blur-2xl top-[20%] right-[10%]"></div>
      <div className="absolute w-40 h-40 bg-yellow-500 rounded-full opacity-20 blur-2xl top-[60%] right-[5%]"></div>
      <div className="absolute w-48 h-48 bg-pink-500 opacity-20 blur-2xl rotate-45 top-[50%] left-[10%]"></div>
      <div className="absolute w-32 h-32 bg-indigo-500 opacity-20 blur-2xl rotate-45 top-[80%] right-[15%]"></div>

      {/* Additional shapes for better coverage */}
      <div className="absolute w-36 h-36 bg-cyan-500 rounded-full opacity-20 blur-2xl top-[40%] left-[40%]"></div>
      <div className="absolute w-52 h-52 bg-teal-500 rounded-full opacity-15 blur-2xl top-[70%] left-[30%]"></div>
    </div>
  );
};
export default RandomShape;
