import Dots from "@/components/svg/Dots";
import Link from "next/link";

const people = [
    {id: 1, date: '16 Sep 2022', name: 'Lindsay Walton',fulfillment:'partially_returned', status: 'paid', total:'123.454'},
    {id: 2, date: '16 Sep 2022', name: 'Lindsay Walton',fulfillment:'partially_returned', status: 'paid', total:'123.454'},
    {id: 3, date: '16 Sep 2022', name: 'Lindsay Walton',fulfillment:'partially_returned', status: 'paid', total:'123.454'},
]

export default function OrderTable() {
    return (
        <div className="flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-1.5 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead className="border-t">
                            <tr>
                                <th scope="col"
                                    className="px-2 py-3.5 pr-3 text-left text-xs font-semibold text-gray-500">
                                    Order
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-xs font-semibold text-gray-500">
                                    Date Added
                                </th>
                                <th scope="col col-span-2" className="px-3 py-3.5 text-left text-xs font-semibold text-gray-500">
                                    Customer
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-xs font-semibold text-gray-500">
                                    Fulfillment
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-xs font-semibold text-gray-500">
                                    Payment status
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-xs font-semibold text-gray-500">
                                    Total
                                </th>
                                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                            {people.map((person) => (
                                <Link href="/orders/detail" key={person.id}>
                                    <tr className="hover:bg-brand/5">
                                        <td className="whitespace-nowrap px-2 py-4 pr-3 text-xs font-medium text-gray-800">
                                            #{person.id}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 pr-3 text-xs font-medium text-gray-800">
                                            {person.date}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 pr-3 text-xs font-medium text-gray-800">
                                            {person.name}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-800">{person.fulfillment}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-800">{person.status}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-800">Rp. {person.total}</td>
                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                                            <a href="/orders/detail" className="text-indigo-600 hover:text-indigo-900">
                                                <Dots/><span className="sr-only">, {person.name}</span>
                                            </a>
                                        </td>
                                    </tr>
                                </Link>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
