export default function InfoOrderCard () {
    return (
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
    )
}