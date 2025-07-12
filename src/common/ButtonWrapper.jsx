const ButtonWrapper = ({ children }) => {
  return (
    <div
      className="border-2 border-black border-dashed 
    flex justify-center content-center py-1 cursor-pointer"
    >
      {children}
    </div>
  );
};

export default ButtonWrapper;
