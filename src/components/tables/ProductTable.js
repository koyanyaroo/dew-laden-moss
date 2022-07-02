import Dots from "@/components/svg/Dots";

const products = [
    {
        id: 1,
        image: 'https://medusa-public-images.s3.eu-west-1.amazonaws.com/tshirt.png',
        name: 'Dew Laden Moss T-Shirt',
        collection: 'T-shirt',
        status: 'Published',
        inventory: '499 in stock for 5 variant(s)'
    },
    {
        id: 2,
        image: 'https://medusa-public-images.s3.eu-west-1.amazonaws.com/bottle.png',
        name: 'Dew Laden Moss Water Bottle',
        collection: 'Bottle',
        status: 'Published',
        inventory: '97 in stock for 1 variant(s)'
    },
    {
        id: 3,
        image: 'https://medusa-public-images.s3.eu-west-1.amazonaws.com/tote.png ',
        name: 'Dew Laden Moss Tote Bag',
        collection: 'Tote Bag',
        status: 'Published',
        inventory: '100 in stock for 1 variant(s)'
    },
]

export default function ProductTable() {
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
                                    Name
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-xs font-semibold text-gray-500">
                                    Collection
                                </th>
                                <th scope="col col-span-2"
                                    className="px-3 py-3.5 text-left text-xs font-semibold text-gray-500">
                                    Status
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-xs font-semibold text-gray-500">
                                    Inventory
                                </th>
                                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                            {products.map((product) => (
                                <tr key={product.id} className="hover:bg-brand/5">
                                    <td className="whitespace-nowrap px-2 pr-3 text-xs font-medium text-gray-800">
                                        <div className="inline-flex items-center space-x-3">
                                            <img className="h-10" src={product.image}/>
                                            <div>{product.name}</div>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-3 pr-3 text-xs font-medium text-gray-800">
                                        {product.collection}
                                    </td>
                                    <td className="whitespace-nowrap px-3 pr-3 text-xs font-medium text-gray-800">
                                        <div className="inline-flex items-center">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500"/>
                                            <span className="ml-2">{product.status}</span>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-3 text-xs text-gray-800">{product.inventory}</td>
                                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                        <a href="@/components/tables/ProductTable#" className="text-indigo-600 hover:text-indigo-900">
                                            <Dots/><span className="sr-only">, {product.name}</span>
                                        </a>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
