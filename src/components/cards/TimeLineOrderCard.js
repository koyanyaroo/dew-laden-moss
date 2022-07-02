import Dots from "@/components/svg/Dots";

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
                    <p className="font-bold text-xs">lotnok@gmail.com</p>
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
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.33301 2.91669V7.91669H8.33301" stroke="currentColor"
                                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path
                                d="M3.41396 11.6784C3.57168 13.1642 4.14444 13.9943 5.18922 15.0653C6.23401 16.1363 7.6093 16.8262 9.0944 17.0244C10.5795 17.2226 12.0883 16.9175 13.3787 16.1581C14.6691 15.3988 15.6663 14.2291 16.2103 12.8369C16.7542 11.4446 16.8134 9.91052 16.3783 8.48073C15.9432 7.05094 15.039 5.80836 13.8109 4.95238C12.5828 4.0964 11.1019 3.67666 9.60596 3.76051C8.10998 3.84436 6.68561 4.42693 5.56142 5.41475L3.33301 7.41474"
                                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                strokeLinejoin="round"></path>
                        </svg>
                    </div>
                    <p className="font-bold text-xs">Return</p>
                </div>
            </div>
            <div className="flex ml-2 space-x-3 -mt-3">
                <div className="border border-l-0 my-2 py-12"></div>
                <div className="pl-2">
                    <p className="text-xs text-gray-600">Sat, 05 Feb 2022 22:16:03 GMT</p>
                </div>
            </div>
        </>
    )
}