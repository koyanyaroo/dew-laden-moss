import DewLadenMoss from "../layouts/DewLadenMoss"
import {PlusIcon, SearchIcon} from "@heroicons/react/solid";
import Head from 'next/head'
import ProductTable from "@/components/tables/ProductTable"
import Search from "@/components/Search";

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
                            <div className="flex items-center space-x-4 font-medium font-semibold tracking-wide">
                                <div className="">Products</div>
                                <div className="text-gray-400">Collections</div>
                            </div>
                            <button className="flex items-center space-x-1 hover:bg-gray-50">
                                <PlusIcon className="w-4 h-4"/>
                                <div className="px-2 py-0.5 rounded-md font-bold text-xs tracking-wide">New Product</div>
                            </button>
                        </div>
                        <div className="pt-5">
                            <div className="flex items-center justify-between space-x-1 text-xs font-medium">
                                <div className="flex space-x-1">
                                    <button
                                        className="px-2 py-0.5 rounded-md bg-gray-50 border text-gray-400">Unpublished
                                    </button>
                                </div>
                                <Search/>
                            </div>
                        </div>
                        <ProductTable/>
                    </div>
                </div>
            </DewLadenMoss>
        </>

    )
}