import {ProductItem} from '../../types/product.ts'
interface ProductProps {
    product: ProductItem;
}


export default function Product () {
    const product = {
        id: 1,
        discount: 90,
        isFavorite: false,
        price: 8165,
        rating: 4.7,
        productName: 'prod',
    }
    return(
        <div>
<p>{product.productName}</p>
<p>{product.price}</p>
        </div>

    )
}
