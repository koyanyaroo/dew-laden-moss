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

export default function SummaryOrderCard() {
    return (
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
                            <p className="text-gray-800">${product.price * product.qty}</p>
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
    )
}