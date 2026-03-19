const Search = () => {
  return (
    <div className="w-full flex justify-center mt-5">
      <div className="w-full max-w-md min-w-[250px]">
        <div className="relative flex items-center">

          <div className="absolute flex items-center left-3" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 text-slate-500"
            >
              <path d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z" />
              <path d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z" />
            </svg>

            <div className="ml-2 h-6 border-l border-slate-300"></div>
          </div>

          <input
            type="text"
            placeholder="Buscar produtos sustentáveis..."
            className="w-full rounded-md border border-[#D8CFC4] bg-[#F5F1EB] py-2 pl-14 pr-3 text-sm text-gray-700 shadow-sm outline-none transition focus:border-[#A3B18A] focus:ring-1 focus:ring-[#A3B18A]"
          />
          <button
            type="button"
            className="ml-2 rounded-md bg-[#A3B18A] p-2.5 text-white shadow-sm transition hover:bg-[#8F9F75] hover:shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              />
            </svg>
          </button>

        </div>
      </div>
    </div>
  );
};

export default Search;