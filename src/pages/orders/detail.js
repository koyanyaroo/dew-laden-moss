import DewLadenMoss from "../../layouts/DewLadenMoss";
import InfoOrderCard from "@/components/cards/InfoOrderCard";
import SummaryOrderCard from "@/components/cards/SummaryOrderCard";
import FullfilmentOrder from "@/components/cards/FullfilmentOrder";
import CustomerOrderCard from "@/components/cards/CustomerOrderCard";
import TimeLineOrderCard from "@/components/cards/TimeLineOrderCard";

export default function detail() {
    return (
        <DewLadenMoss>
            <div className="px-2">
                <div className="text-xs text-gray-500 font-bold tracking-wide pt-1 flex items-center space-x-1">
                    <p className="text-brand">Orders</p>
                    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"></path>
                    </svg>
                    <p>Order Details</p>
                </div>
                <div className="flex space-x-4 pt-4">
                    <div className="flex flex-col space-y-4 w-7/12 h-full">
                        <InfoOrderCard/>
                        <SummaryOrderCard/>
                        <FullfilmentOrder/>
                        <CustomerOrderCard/>
                    </div>
                    <div className="bg-white w-5/12 rounded-md border border-brand/10 px-8 py-6">
                        <TimeLineOrderCard/>
                    </div>
                </div>
            </div>
        </DewLadenMoss>
    )
}