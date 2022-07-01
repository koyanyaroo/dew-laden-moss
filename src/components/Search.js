import {SearchIcon} from "@heroicons/react/solid";

export default function Search() {
    return (
        <div className="relative flex items-end">
            <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                    <SearchIcon className="h-4 w-4 ml-2 text-brand/50" aria-hidden="true" />
                </div>
                <input
                    id="search-field"
                    className="block w-24 h-full pl-8 pr-3 py-2.5 border-transparent text-gray-900 placeholder-gray-500 transition-all rounded-sm duration-400 focus:w-full placeholder:text-xs focus:outline focus:outline-1 focus:outline-brand/50 focus:ring focus:ring-brand/10 focus:placeholder-gray-400 focus:bg-gray-50 sm:text-sm"
                    placeholder="Search"
                    type="search"
                    name="search"
                />
            </div>
        </div>
    )
}