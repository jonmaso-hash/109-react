import {useState} from 'react'
import './Admin.css'

function Admin(){
    //Coupon state
const[couponCode, SetCouponCode] = useState("")
const[couponDiscount, setCouponDiscount] = useState(0)
const[coupons, setCoupons] = useState([])

//Product state
const [productTitle, setProductTitle] = useState("")
const [productCategory, setProductCategory] = useState("")
const [productImage, setProductImage] = useState("")
const [productPrice, setProductPrice] = useState("0")
const [products, setProducts] = useState([])



function saveCoupon(){
    console.log(couponCode)
    console.log(couponDiscount)

const newCoupon = {
    code: couponCode,
    discount: couponDiscount
}

setCoupons([...coupons, newCoupon])
}

function saveProduct(){
    const newProduct = {
        title: productTitle,
        category: productCategory,
        image: productImage,
        price: productPrice
    }
    setProducts([...products, newProduct])

    setProductTitle("")
    setProductCategory("")
    setProductImage("")
    setProductPrice(0)
}

    return(
        <div>
            <h1>Store Administration</h1>

            <div className="d-flex gap-4">
            <section className= "w-50">

                <div className = "border bg-white p-4">
                <h3>Add Products</h3>
                <div className= "border">
                    <div className='mb-2'>
                        <label>Product Title</label>
                        <input
                        type="text"
                        value={productTitle}
                        onChange= {(e) => setProductTitle(e.target.value)}
                        />
                    </div>

                       <div className='mb-2'>
                        <label>Product Category</label>
                        <input
                        type="text"
                        value={productCategory}
                        onChange= {(e) => setProductCategory(e.target.value)}
                        />
                    </div>

                       <div className='mb-2'>
                        <label>Product Image</label>
                        <input
                        type="text"
                        placeholder='https:google.com/car-image'
                        value={productImage}
                        onChange= {(e) => setProductImage(e.target.value)}
                        />
                    </div>

                       <div className='mb-2'>
                        <label>Product price</label>
                        <input
                        type="number"
                        value={productPrice}
                        onChange= {(e) => setProductPrice(e.target.value)}
                        />
                    </div>

                    <button className = 'btn btn-dark mt-4' onClick={saveProduct}>Save Product</button>
                </div>
                </div>

                 <div >
                    <h5>Products List</h5>
                    {
                        products.length == 0
                        ?<p> no products added </p>
                        : 
                        products.map(product =>(
                            <div>
                            <li>{product.title}-{product.category}</li>
                            <img width={200} src={product.image} alt=""/>
                            <p>{product.price}</p>
                            </div>
                        ))
                    }
                 </div>


            </section>

            <section className= "w-50">
                 <h3>Add Coupons</h3>

                 <div className = "border bg-white p-4">
                    <div className='mb-4'>
                    <label className= "form-label">Code</label>
                    <input 
                    type= "text"
                    className="form-control"
                    value={couponCode}
                    onChange={(e)=> SetCouponCode(e.target.value)}
                    />
                    </div>

                    <div className='mb-4'>
                    <label className='formlabel'>Discount</label>
                    <input
                     type="number"
                      className='form-control'
                      value = {couponDiscount}
                      onChange={(e)=> setCouponDiscount(e.target.value)}
                      />
                    </div>

                    <button className='btn btn-dark' onClick={saveCoupon}>Save Coupon</button>
                 </div>

                 <div>
                    <h5>Coupons List</h5>
                    {
                        coupons.length == 0
                        ?<p> no coupons availible </p>
                        : 
                        coupons.map(coupon =>(
                            <li>{coupon.code}-{coupon.discount}</li>
                        ))
                    }
                 </div>
            </section>
           </div>
            


        </div>
    )
}
export default Admin