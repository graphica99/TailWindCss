const HeaderIcon = ({ Icon, active }) => {
  return (
    <div className="flex items-center rounded-xl cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 active:border-b-2 active:border-blue-500 text-gray-500 group">
      <Icon
        className={`h-5 group-hover:text-blue-500 ${active && "text-blue-500"}`}
      />
    </div>
  );
};

export default HeaderIcon;
