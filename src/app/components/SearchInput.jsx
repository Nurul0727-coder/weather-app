export const SearchInput = () => {
  return (
    <div className="border border-transparent drop-shadow-sm rounded-[24px] bg-white w-96 h-120">
      <button>
        <SearchIcon />
      </button>
      <input
        className="w-full ouutline-none mr-1"
        type="text"
        placeholder="City Name..."
      />
    </div>
  );
};
