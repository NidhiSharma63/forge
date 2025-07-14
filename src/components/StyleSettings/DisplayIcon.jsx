const DisplayIcon = ({ Icon, onClick, title }) => {
  return (
    <button className="p-1 rounded-sm bg-white" onClick={onClick} title={title}>
      <Icon className="w-4 h-4 text-black" />
    </button>
  );
};

export default DisplayIcon;
