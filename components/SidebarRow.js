const SidebarRow = ({ Icon, title }) => {
  return (
    <div className="flex pb-6">
      <Icon className="h-6 w-8 text-blue-500" />
      <p className="hidden sm:inline-flex font-medium pl-3  ">{title}</p>
    </div>
  );
};

export default SidebarRow;
