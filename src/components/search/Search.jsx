import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search = () => {
  return (
    <div className="h-8 w-full max-w-xs border flex px-1 rounded-md items-center gap-2 focus:ring-1 py-0">
      <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 group-focus:text-black" />
      <input
        type="text"
        placeholder="Search"
        className="h-full w-full rounded-md focus:outline-none border-none"
      />
    </div>
  );
};

export default Search;
