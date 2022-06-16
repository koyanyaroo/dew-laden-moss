import DewLadenMoss from "../layouts/DewLadenMoss";
import {PlusIcon} from "@heroicons/react/solid";
import SimpleTable from "@/components/SimpleTable";

export default function orders() {
    return (
        <DewLadenMoss>
            <div className="bg-white rounded-md shadow px-2">
                <div className="flex flex-col space-y-3 p-6">
                    <div className="flex items-center space-x-4 font-medium">
                        <div>Orders</div>
                        <div className="text-gray-400">Drafts</div>
                    </div>
                    <div className="flex items-center space-x-3 pt-4 text-xs font-medium">
                        <button className="flex items-center space-x-1">
                            <div className="px-2 py-1 rounded-md bg-gray-50 border shadow">Filters 0</div>
                            <div className="p-1.5 rounded-md bg-gray-50 border shadow">
                                <PlusIcon className="w-3 h-3"/>
                            </div>
                        </button>
                        <button className="px-2 py-1 rounded-md bg-gray-50 border shadow text-gray-400">Complete</button>
                        <button className="px-2 py-1 rounded-md bg-gray-50 border shadow text-gray-400">Incomplete</button>
                    </div>
                    <SimpleTable/>
                </div>
            </div>
        </DewLadenMoss>
    )
}