import DewLadenMoss from "../layouts/DewLadenMoss";
import {PlusIcon} from "@heroicons/react/solid";
import SimpleTable from "@/components/SimpleTable";
import Head from 'next/head'

export default function orders() {
    return (
        <>
            <Head>
                <title>Orders | Dew Laden Moss</title>
            </Head>
            <DewLadenMoss>
                <div className="bg-white rounded-md border px-2">
                    <div className="flex flex-col space-y-3 p-6">
                        <div className="flex justify-between">
                            <div>
                                <div className="flex items-center space-x-4 font-medium">
                                    <div>Orders</div>
                                    <div className="text-gray-400">Drafts</div>
                                </div>
                                <div className="pt-10">
                                    <div className="flex items-center space-x-3 text-xs font-medium">
                                        <button className="flex items-center space-x-1">
                                            <div className="px-2 py-0.5 rounded-md bg-gray-50 border shadow font-bold">Filters 0</div>
                                            <div className="p-1 rounded-md bg-gray-50 border shadow">
                                                <PlusIcon className="w-3 h-3"/>
                                            </div>
                                        </button>
                                        <button className="px-2 py-0.5 rounded-md bg-gray-50 border shadow text-gray-400">Complete</button>
                                        <button className="px-2 py-0.5 rounded-md bg-gray-50 border shadow text-gray-400">Incomplete</button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-1 relative flex items-end">
                                <input
                                    type="text"
                                    name="search"
                                    id="search"
                                    className="py-1.5 focus:ring-brand focus:border block w-full pr-12 sm:text-sm border outline-brand rounded-md"
                                />
                            </div>
                        </div>
                        <SimpleTable/>
                    </div>
                </div>
            </DewLadenMoss>
        </>

    )
}