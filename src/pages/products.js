import DewLadenMoss from "../layouts/DewLadenMoss"
import {PlusIcon, SearchIcon} from "@heroicons/react/solid";
import Head from 'next/head'
import ProductTable from "@/components/ProductTable"

export default function orders() {
    return (
        <>
            <Head>
                <title>Orders | Dew Laden Moss</title>
            </Head>
            <DewLadenMoss>
                <div className="bg-white rounded-md border px-2 pt-1">
                    <div className="flex flex-col space-y-3 p-6">
                        <div className="flex justify-between">
                            <div>
                                <div className="flex items-center space-x-4 font-medium font-semibold tracking-wide">
                                    <div className="">Products</div>
                                    <div className="text-gray-400">Collections</div>
                                </div>
                                <div className="pt-10">
                                    <div className="flex items-center space-x-1 text-xs font-medium">
                                        {/*<button className="flex items-center space-x-1">*/}
                                        {/*    <div className="px-2 py-0.5 rounded-md bg-gray-50 border font-bold">Filters 0</div>*/}
                                        {/*    <div className="p-1 rounded-md bg-gray-50 border">*/}
                                        {/*        <PlusIcon className="w-3 h-3"/>*/}
                                        {/*    </div>*/}
                                        {/*</button>*/}
                                        <button className="px-2 py-0.5 rounded-md bg-gray-50 border text-gray-400">Unpublished</button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-1 relative flex items-end">
                                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                                        <SearchIcon className="h-5 w-5 pl-1" aria-hidden="true" />
                                    </div>
                                    <input
                                        id="search-field"
                                        className="block w-32 h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 transition-all rounded-sm ease-in-out delay-150 focus:w-full focus:shadow focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:border-transparent sm:text-sm"
                                        placeholder="Search"
                                        type="search"
                                        name="search"
                                    />
                                </div>
                            </div>
                        </div>
                        <ProductTable/>
                    </div>
                </div>
            </DewLadenMoss>
        </>

    )
}