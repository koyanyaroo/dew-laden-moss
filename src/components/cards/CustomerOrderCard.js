import Dots from "@/components/svg/Dots";

export default function CustomerOrderCard() {
    return (
        <div className="bg-white rounded-md border border-brand/10 px-8 py-6 space-y-6">
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold tracking-wide">Customer</h2>
                <Dots/>
            </div>
            <div className="pt-8">
                <div className="flex space-x-4">
                    <div
                        className="relative bg-brand/50 text-white h-10 w-10 rounded-full flex items-center justify-center">
                        <p className="absolute text-xl text-center">L</p>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <p className="font-bold tracking-wide text-gray-700">Lebron James</p>
                        <p className="text-xs text-gray-600">Los Angeles, us</p>
                    </div>
                </div>
            </div>
            <div className="flex space-x-6">
                <div className="flex flex-col space-y-2 text-xs">
                    <p className="text-gray-500">Contact</p>
                    <div className="flex flex-col space-y-1">
                        <p>mokondo@gmail.com</p>
                        <p>123456789</p>
                    </div>
                </div>
                <div className="border border-l-0"/>
                <div className="flex flex-col space-y-2 text-xs">
                    <p className="text-gray-500">Shipping</p>
                    <div className="flex flex-col space-y-1">
                        <p>Hollywood Boulevard 1</p>
                        <p>Los Angeles, null 90001 US</p>
                    </div>
                </div>
                <div className="border border-l-0"/>
                <div className="flex flex-col space-y-2 text-xs">
                    <p className="text-gray-500">Billing</p>
                    <div className="flex flex-col space-y-1">
                        <p>Hollywood Boulevard 1</p>
                        <p>Los Angeles, null 90001 US</p>
                    </div>
                </div>
            </div>
        </div>
    )
}