import Stories from "../components/Stories";
const Feed = () => {
  return (
    <div className="flex-grow h-screen pb-44 pt-16 mr-4 xl:mr-40 overflow-y-auto">
      <div className="mx-auto max-w-md md:mx-w-lg lg:mx-w-2xl">
        {/* stories */}
        <Stories />
      </div>
    </div>
  );
};

export default Feed;
