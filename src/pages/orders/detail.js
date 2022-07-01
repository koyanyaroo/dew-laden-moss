import DewLadenMoss from "../../layouts/DewLadenMoss";

const products = [
    {
        id: 1,
        image: 'https://medusa-public-images.s3.eu-west-1.amazonaws.com/tshirt.png',
        name: 'Dew Laden Moss T-Shirt',
        price: 30,
        qty: 3,
    },
    {
        id: 2,
        image: 'https://medusa-public-images.s3.eu-west-1.amazonaws.com/bottle.png',
        name: 'Dew Laden Moss Water Bottle',
        price: 30,
        qty: 3,

    },
    {
        id: 3,
        image: 'https://medusa-public-images.s3.eu-west-1.amazonaws.com/tote.png ',
        name: 'Dew Laden Moss Tote Bag',
        price: 30,
        qty: 3,
    }
]

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
                        <div className="bg-white rounded-md border border-brand/10 px-8 pt-6 pb-12">
                            <div className="flex justify-between">
                                <div className="flex items-center space-x-2 col-span-2 ">
                                    <h2 className="text-2xl font-bold">#1</h2>
                                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12.917 4.16669H14.3753C14.7621 4.16669 15.133 4.32277 15.4065 4.6006C15.68 4.87843 15.8337 5.25526 15.8337 5.64817V8.33335M7.08366 4.16669H5.62533C5.23855 4.16669 4.86762 4.32277 4.59413 4.6006C4.32064 4.87843 4.16699 5.25526 4.16699 5.64817V16.0185C4.16699 16.4115 4.32064 16.7883 4.59413 17.0661C4.86762 17.3439 5.23855 17.5 5.62533 17.5H14.3753C14.7621 17.5 15.133 17.3439 15.4065 17.0661C15.68 16.7883 15.8337 16.4115 15.8337 16.0185V15"
                                            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"></path>
                                        <path
                                            d="M11.875 2.5H8.125C7.77982 2.5 7.5 2.8731 7.5 3.33333V5C7.5 5.46024 7.77982 5.83333 8.125 5.83333H11.875C12.2202 5.83333 12.5 5.46024 12.5 5V3.33333C12.5 2.8731 12.2202 2.5 11.875 2.5Z"
                                            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"></path>
                                        <path d="M17.5 11.6667H10" stroke="currentColor" strokeWidth="1.5"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"></path>
                                        <path d="M12.5 9.16669L10 11.6667L12.5 14.1667" stroke="currentColor"
                                              strokeWidth="1.5"
                                              strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-1 h-1 rounded-full bg-gray-500"/>
                                    <span className="text-xs">Processing</span>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10 10.75C10.4142 10.75 10.75 10.4142 10.75 10C10.75 9.58579 10.4142 9.25 10 9.25C9.58579 9.25 9.25 9.58579 9.25 10C9.25 10.4142 9.58579 10.75 10 10.75Z"
                                            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"></path>
                                        <path
                                            d="M15.833 10.75C16.2472 10.75 16.583 10.4142 16.583 10C16.583 9.58579 16.2472 9.25 15.833 9.25C15.4188 9.25 15.083 9.58579 15.083 10C15.083 10.4142 15.4188 10.75 15.833 10.75Z"
                                            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"></path>
                                        <path
                                            d="M4.16699 10.75C4.58121 10.75 4.91699 10.4142 4.91699 10C4.91699 9.58579 4.58121 9.25 4.16699 9.25C3.75278 9.25 3.41699 9.58579 3.41699 10C3.41699 10.4142 3.75278 10.75 4.16699 10.75Z"
                                            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="text-xs text-gray-500 pt-2">1 September 2021 06:01 pm</div>
                            <div className="flex space-x-6 pt-14 -mt-1">
                                <div className="flex flex-col space-y-2">
                                    <p className="text-sm text-gray-500">Email</p>
                                    <div className="flex items-center space-x-1">
                                        <p className="text-sm">mokondo@gmail.com</p>
                                        <svg className="w-3 h-3" viewBox="0 0 20 20" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12.917 4.16669H14.3753C14.7621 4.16669 15.133 4.32277 15.4065 4.6006C15.68 4.87843 15.8337 5.25526 15.8337 5.64817V8.33335M7.08366 4.16669H5.62533C5.23855 4.16669 4.86762 4.32277 4.59413 4.6006C4.32064 4.87843 4.16699 5.25526 4.16699 5.64817V16.0185C4.16699 16.4115 4.32064 16.7883 4.59413 17.0661C4.86762 17.3439 5.23855 17.5 5.62533 17.5H14.3753C14.7621 17.5 15.133 17.3439 15.4065 17.0661C15.68 16.7883 15.8337 16.4115 15.8337 16.0185V15"
                                                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                                strokeLinejoin="round"></path>
                                            <path
                                                d="M11.875 2.5H8.125C7.77982 2.5 7.5 2.8731 7.5 3.33333V5C7.5 5.46024 7.77982 5.83333 8.125 5.83333H11.875C12.2202 5.83333 12.5 5.46024 12.5 5V3.33333C12.5 2.8731 12.2202 2.5 11.875 2.5Z"
                                                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                                strokeLinejoin="round"></path>
                                            <path d="M17.5 11.6667H10" stroke="currentColor" strokeWidth="1.5"
                                                  strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M12.5 9.16669L10 11.6667L12.5 14.1667" stroke="currentColor"
                                                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="border border-l-0"/>
                                <div className="flex flex-col space-y-2">
                                    <p className="text-sm text-gray-500">Phone</p>
                                    <div className="flex items-center space-x-1">
                                        <p className="text-sm">08475132321</p>
                                    </div>
                                </div>
                                <div className="border border-l-0"/>
                                <div className="flex flex-col space-y-2">
                                    <p className="text-sm text-gray-500">Payment</p>
                                    <div className="flex items-center space-x-1">
                                        <p className="text-sm">Manual</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-md border border-brand/10 px-8 py-6 space-y-6">
                            <h2 className="text-2xl font-bold tracking-wide">Summary</h2>
                            <div className="flex flex-col pt-6 space-y-4">
                                {products.map((product => (
                                    <div key={product.id} className="flex justify-between py-2 text-xs">
                                        <div className="flex items-center space-x-4">
                                            <img className="h-10 rounded-lg" src={product.image}/>
                                            <p className="">{product.name}</p>
                                        </div>
                                        <div className="flex space-x-5 text-gray-600">
                                            <p>${product.price}</p>
                                            <p>x<span className="px-1">{product.qty}</span></p>
                                            <p>${product.price * product.qty}</p>
                                            <p>USD</p>
                                        </div>
                                    </div>
                                )))}
                                <div className="flex justify-between text-xs">
                                    <p>Subtotal</p>
                                    <div className="flex space-x-5 text-gray-600">
                                        <p>$150</p>
                                        <p>USD</p>
                                    </div>
                                </div>
                                <div className="flex justify-between text-xs">
                                    <p>Shipping</p>
                                    <div className="flex space-x-5 text-gray-600">
                                        <p>$10</p>
                                        <p>USD</p>
                                    </div>
                                </div>
                                <div className="flex justify-between text-xs">
                                    <p>Tax</p>
                                    <div className="flex space-x-5 text-gray-600">
                                        <p>$0</p>
                                        <p>USD</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center font-bold">
                                    <p className="text-xs">Original Total</p>
                                    <p className="text-2xl">$160</p>
                                </div>
                                <div className="flex justify-between text-xs">
                                    <p>Refunded for Returns</p>
                                    <div className="flex space-x-5 text-gray-600">
                                        <p>$30</p>
                                        <p>USD</p>
                                    </div>
                                </div>
                                <div className="flex justify-between text-xs">
                                    <p>New Total</p>
                                    <div className="flex space-x-5 text-gray-600">
                                        <p>$130</p>
                                        <p>USD</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-md border border-brand/10 px-8 py-6 space-y-6">
                            <div className="flex justify-between">
                                <h2 className="text-2xl font-bold tracking-wide">Fulfillment</h2>
                                <button
                                    className="text-xs font-semibold text-gray-700 p-2 tracking-wide border border-brand/10">
                                    Create Fullfillment
                                </button>
                            </div>
                        </div>
                        <div className="bg-white rounded-md border border-brand/10 px-8 py-6 space-y-6">
                            <div className="flex justify-between">
                                <h2 className="text-2xl font-bold tracking-wide">Customer</h2>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10 10.75C10.4142 10.75 10.75 10.4142 10.75 10C10.75 9.58579 10.4142 9.25 10 9.25C9.58579 9.25 9.25 9.58579 9.25 10C9.25 10.4142 9.58579 10.75 10 10.75Z"
                                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                        strokeLinejoin="round"></path>
                                    <path
                                        d="M15.833 10.75C16.2472 10.75 16.583 10.4142 16.583 10C16.583 9.58579 16.2472 9.25 15.833 9.25C15.4188 9.25 15.083 9.58579 15.083 10C15.083 10.4142 15.4188 10.75 15.833 10.75Z"
                                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                        strokeLinejoin="round"></path>
                                    <path
                                        d="M4.16699 10.75C4.58121 10.75 4.91699 10.4142 4.91699 10C4.91699 9.58579 4.58121 9.25 4.16699 9.25C3.75278 9.25 3.41699 9.58579 3.41699 10C3.41699 10.4142 3.75278 10.75 4.16699 10.75Z"
                                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                        strokeLinejoin="round"></path>
                                </svg>
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
                    </div>
                    <div className="bg-white w-5/12 rounded-md border border-brand/10 px-8 py-6">
                        <div className="flex justify-between">
                            <h2 className="text-2xl font-bold tracking-wide">Timeline</h2>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 10.75C10.4142 10.75 10.75 10.4142 10.75 10C10.75 9.58579 10.4142 9.25 10 9.25C9.58579 9.25 9.25 9.58579 9.25 10C9.25 10.4142 9.58579 10.75 10 10.75Z"
                                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                    strokeLinejoin="round"></path>
                                <path
                                    d="M15.833 10.75C16.2472 10.75 16.583 10.4142 16.583 10C16.583 9.58579 16.2472 9.25 15.833 9.25C15.4188 9.25 15.083 9.58579 15.083 10C15.083 10.4142 15.4188 10.75 15.833 10.75Z"
                                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                    strokeLinejoin="round"></path>
                                <path
                                    d="M4.16699 10.75C4.58121 10.75 4.91699 10.4142 4.91699 10C4.91699 9.58579 4.58121 9.25 4.16699 9.25C3.75278 9.25 3.41699 9.58579 3.41699 10C3.41699 10.4142 3.75278 10.75 4.16699 10.75Z"
                                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                    strokeLinejoin="round"></path>
                            </svg>
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
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 10.75C10.4142 10.75 10.75 10.4142 10.75 10C10.75 9.58579 10.4142 9.25 10 9.25C9.58579 9.25 9.25 9.58579 9.25 10C9.25 10.4142 9.58579 10.75 10 10.75Z"
                                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                    strokeLinejoin="round"></path>
                                <path
                                    d="M15.833 10.75C16.2472 10.75 16.583 10.4142 16.583 10C16.583 9.58579 16.2472 9.25 15.833 9.25C15.4188 9.25 15.083 9.58579 15.083 10C15.083 10.4142 15.4188 10.75 15.833 10.75Z"
                                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                    strokeLinejoin="round"></path>
                                <path
                                    d="M4.16699 10.75C4.58121 10.75 4.91699 10.4142 4.91699 10C4.91699 9.58579 4.58121 9.25 4.16699 9.25C3.75278 9.25 3.41699 9.58579 3.41699 10C3.41699 10.4142 3.75278 10.75 4.16699 10.75Z"
                                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                    strokeLinejoin="round"></path>
                            </svg>
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
                                <p className="font-bold text-xs">lotnok@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex ml-2 space-x-3 -mt-3">
                            <div className="border border-l-0 my-2 py-12"></div>
                            <div className="pl-2">
                                <p className="text-xs text-gray-600">Sat, 05 Feb 2022 22:16:03 GMT</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DewLadenMoss>
    )
}