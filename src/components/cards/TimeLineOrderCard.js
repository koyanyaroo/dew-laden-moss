import Dots from "@/components/svg/Dots";
import RollBack from "@/components/svg/RollBack";
import Success from "@/components/svg/Success";
import Warning from "@/components/svg/Warning";
import Shipped from "@/components/svg/Shipped";

export default function TimeLineOrderCard() {
    return (
        <>
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold tracking-wide">Timeline</h2>
                <Dots/>
            </div>
            <div className="py-6">
                <input
                    className="w-full bg-gray-50 placeholder:text-sm py-2 rounded-md border border-2 border-gray-100 focus:outline-0 px-5"
                    type="text"
                    placeholder="Write a note.."
                />
            </div>
            <div className="border border-b-0"/>
            <div className="flex justify-between pt-6 pb-3">
                <div className="flex items-center space-x-2">
                    <div className="bg-brand/50 text-white h-5 w-5 rounded-full flex items-center justify-center">
                        <p className="absolute text-xs text-center">L</p>
                    </div>
                    <p className="font-bold text-xs text-gray-700">lotnok@gmail.com</p>
                </div>
                <Dots/>
            </div>
            <div className="flex ml-2 space-x-3 -mt-3">
                <div className="border border-l-0 my-2 py-12"></div>
                <div className="pl-2">
                    <p className="text-xs text-gray-600">Sat, 05 Feb 2022 22:16:03 GMT</p>
                    <div className="pt-5">
                        <p className="text-xs py-5 px-4 bg-gray-50 rounded-full">Customer sent the item
                            to our office instead of the warehouse</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-between pt-6 pb-3">
                <div className="flex items-center space-x-2">
                    <div className="h-5 w-5 text-gray-600">
                        <RollBack/>
                    </div>
                    <p className="font-bold text-xs text-gray-700">Refund</p>
                </div>
                <p className="text-xs font-semibold text-gray-800">$30</p>
            </div>
            <div className="flex justify-between">
                <div className="flex ml-2 space-x-3 -mt-3">
                    <div className="border border-l-0 my-2 py-3"/>
                    <div className="pl-2 flex">
                        <p className="text-xs text-gray-600">Sat, 05 Feb 2022 22:16:03 GMT</p>
                    </div>
                </div>
                <p className="text-xs text-gray-600 -mt-3">Return</p>
            </div>
            <div className="flex pt-6 pb-3">
                <div className="flex items-center space-x-2">
                    <div className="h-5 w-5 text-green-500">
                        <Success/>
                    </div>
                    <p className="font-bold text-xs text-gray-700">Return Received</p>
                </div>
            </div>
            <div className="flex justify-between items-center space-x-3 -mt-3">
                <div className="flex ml-2">
                    <div className="border border-l-0 my-2 py-8"/>
                    <div className="pl-5">
                        <p className="text-xs text-gray-600">Mon, 20 Sep 2021 11:21:43 GMT</p>
                        <div className="pt-5">
                            <div className="flex items-center space-x-4">
                                <img className="h-10 rounded-lg" src="https://medusa-public-images.s3.eu-west-1.amazonaws.com/tshirt.png"/>
                                <p className="text-xs">Dew Laden Moss T-Shirt</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-xs mt-8 tracking-wide">x1</p>
            </div>
            <div className="flex pt-6 pb-3">
                <div className="flex items-center space-x-2">
                    <div className="h-5 w-5 text-yellow-500">
                        <Warning/>
                    </div>
                    <p className="font-bold text-xs text-gray-700">Return Requested</p>
                </div>
            </div>
            <div className="flex justify-between items-center space-x-3 -mt-3">
                <div className="flex ml-2">
                    <div className="border border-l-0 my-2 py-8"/>
                    <div className="pl-5">
                        <p className="text-xs text-gray-600">Mon, 20 Sep 2021 11:21:43 GMT</p>
                        <div className="pt-5">
                            <div className="flex items-center space-x-4">
                                <img className="h-10 rounded-lg" src="https://medusa-public-images.s3.eu-west-1.amazonaws.com/tshirt.png"/>
                                <p className="text-xs">Dew Laden Moss T-Shirt</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-xs mt-8 tracking-wide">x1</p>
            </div>
            <div className="flex pt-6 pb-3">
                <div className="flex items-center space-x-2">
                    <div className="h-5 w-5 text-gray-700">
                        <Shipped/>
                    </div>
                    <p className="font-bold text-xs text-gray-700">Items Shipped</p>
                </div>
            </div>
            <div className="flex justify-between items-center space-x-3 -mt-3">
                <div className="flex ml-2">
                    <div className="border border-l-0 my-2 py-8"/>
                    <div className="pl-5">
                        <p className="text-xs text-gray-600">Mon, 20 Sep 2021 11:21:43 GMT</p>
                        <div className="pt-5 space-y-4">
                            <div className="flex items-center space-x-4 ">
                                <img className="h-10 rounded-lg" src="https://medusa-public-images.s3.eu-west-1.amazonaws.com/tshirt.png"/>
                                <p className="text-xs">Dew Laden Moss T-Shirt</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <img className="h-10 rounded-lg" src="https://medusa-public-images.s3.eu-west-1.amazonaws.com/tshirt.png"/>
                                <p className="text-xs">Dew Laden Moss T-Shirt</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <img className="h-10 rounded-lg" src="https://medusa-public-images.s3.eu-west-1.amazonaws.com/tshirt.png"/>
                                <p className="text-xs">Dew Laden Moss T-Shirt</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-10 mt-10">
                    <p className="text-xs tracking-wide">x1</p>
                    <p className="text-xs tracking-wide">x1</p>
                    <p className="text-xs tracking-wide">x1</p>
                </div>
            </div>
            <div className="flex justify-between pt-6 pb-3">
                <div className="flex items-center space-x-2">
                    <div className="h-5 w-5 text-green-500">
                        <Success/>
                    </div>
                    <p className="font-bold text-xs text-gray-700">Order Placed</p>
                </div>
                <p className="text-xs font-semibold text-gray-800">$160</p>
            </div>
            <div className="flex">
                <div className="flex ml-2 space-x-3 -mt-3">
                    <div className="border border-l-0 my-2 py-3"/>
                    <div className="pl-2 flex">
                        <p className="text-xs text-gray-600">Sat, 05 Feb 2022 22:16:03 GMT</p>
                    </div>
                </div>
            </div>
        </>
    )
}