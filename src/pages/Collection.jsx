import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../context/UserContext';
import Title from '../components/Title';
import ProductsDisplay from '../components/ProductsDisplay';
function AllProducts() {

  let { products } = useContext(userContext)
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [search, setSearch] = useState('')
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [shorting, setShorting] = useState([]);

  // For the Category
  const toggleCategory = (e => {
    let value = e.target.value;
    // console.log(value)
    setCategory(i => i.includes(value) ? i.filter(p => p != value) : [...i, value])
  })
  const toggleSubCategory = (e => {
    let value = e.target.value
    // console.log(value)
    setSubCategory(i => i.includes(value) ? i.filter(p => p != value) : [...i, value])
  })
  const func = (e) => {
    let value = e.target.value.toLowerCase()
    console.log(value)
    setSearch(value)
  }
  const sorting = (e) => {
    let value = e.target.value
    setShorting(value)
  }

  useEffect(() => {

    let product = [...products]

    if (category.length > 0) {
      product = product.filter(i => category.includes(i.category))
      console.log(product)
    }

    // For the Sub category

    if (subCategory.length > 0) {
      product = product.filter(i => subCategory.includes(i.subCategory))
      console.log(product)
    }

    //  for search
    if (search) {
      // product  = product.filter(i => i.name.toLowerCase().includes(search))
      product = product.filter(i => i.name.toLowerCase().startsWith(search))
    }
    //  for shorting 
    if (shorting == 'low') {
      product = product.sort((a, b) => a.price - b.price)
      console.log(product)
    }
    if (shorting == "high") {
      product = product.sort((a, b) => b.price - a.price)
      console.log(product)
    }
    setFilteredProduct(product);
  }, [category, subCategory, search, shorting])

  return (

    <div className='flex relative  '>
      {/* SIDEBAR */}
      <div className=' mt-[25px] fixed w-[200px]'>
        <button className='h-11 w-[170px] text-white font-semibold bg-black rounded-xl mb-5'>Filter</button>

        {/* Categories Section */}
        <div className='border border-gray-100 p-3'>
          <h1 className='font-bold text-xl text-black'>CATEGORIES</h1>
          <div className='flex flex-col gap-3 my-3'>
            <label className='flex gap-2'><input onChange={toggleCategory} type="checkbox" value="Men" /> Men</label>
            <label className='flex gap-2'><input onChange={toggleCategory} type="checkbox" value="Women" /> Women</label>
            <label className='flex gap-2'><input onChange={toggleCategory} type="checkbox" value="Kids" /> Kids</label>
          </div>
        </div>

        {/* Search Section */}
        <div className='border border-slate-200 p-3 mt-3'>
          <p className='text-xl font-bold'>Search</p>
          <input onChange={func}
            className='h-[30px] w-full border border-slate-200 mt-2 px-2'
            type="text"
            placeholder='Search...'
          />
        </div>

        {/* Sub Categories Section */}
        <div className='border border-slate-200 p-3 mt-3'>
          <h1 className='font-bold text-xl text-black'>SUB-CATEGORIES</h1>
          <div className='flex flex-col gap-3 my-3'>
            <label className='flex gap-2'><input onChange={toggleSubCategory} type="checkbox" value='Topwear' /> TopWear</label>
            <label className='flex gap-2'><input onChange={toggleSubCategory} type="checkbox" value='Bottomwear' /> BottomWear</label>
            <label className='flex gap-2'><input onChange={toggleSubCategory} type="checkbox" value='Winterwear' /> WinterWear</label>
          </div>
        </div>
      </div>
      {/* For the products */}
      <div className='ms-[230px] flex flex-col mt-[20px] gap-5'>
        <div className='flex justify-between'>
          <Title t1='All' t2='Products' />
          <select onChange={sorting}>
            <option>Relevent</option>
            <option value='high'>High to low</option>
            <option value='low'>Low to High</option>
          </select>
        </div>

        <div className='flex flex-wrap gap-3'>

          {
            filteredProduct.length > 0 ?
              (filteredProduct.map((i, index) =>
                <ProductsDisplay id={i._id}  index={index} image = {i.image[0]} name= {i.name} />
              )) : <p>NO Product Found</p>

          }
        </div>
      </div>


    </div>
  )
}

export default AllProducts;