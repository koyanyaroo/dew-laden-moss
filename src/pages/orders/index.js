import DewLadenMoss from "../../layouts/DewLadenMoss";
import {PlusIcon, SearchIcon} from "@heroicons/react/solid";
import OrderTable from "@/components/tables/OrderTable";
import Head from 'next/head'
import Search from "@/components/Search";

export default function index() {
    return (
        <>
            <Head>
                <title>Orders | Dew Laden Moss</title>
            </Head>
            <DewLadenMoss>
                <div className="bg-white rounded-md border px-2 pt-1">
                    <div className="flex flex-col space-y-3 p-6">
                        <div className="flex items-center space-x-4 font-medium font-semibold tracking-wide">
                            <div className="">Orders</div>
                            <div className="text-gray-400">Drafts</div>
                        </div>
                        <div className="pt-5">
                            <div className="flex items-center justify-between space-x-1 text-xs font-medium">
                                <div className="flex space-x-1">
                                    <button
                                        className="px-2 py-0.5 rounded-md bg-gray-50 border text-gray-400">Complete
                                    </button>
                                    <button
                                        className="px-2 py-0.5 rounded-md bg-gray-50 border text-gray-400">Incomplete
                                    </button>
                                </div>
                                <Search/>
                            </div>
                        </div>
                        <OrderTable/>
                    </div>
                </div>
            </DewLadenMoss>
        </>

    )
}