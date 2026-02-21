import React, { useContext, useState} from 'react'
import { userContext } from '../context/UserContext';
import Title from '../components/Title';
function AllProducts() {
let {products} =  useContext(userContext)
const [category,setCategory] = useState([])
const [subCategory,setSubCategory]=useState([])
const [seach,setSearch] = useState('')

const toggleCategory = (p)=>{
  let value  = p.target.value
   setCategory(i =>i.includes(value) ? i.filter(f=> f!= f.value):  )
}
  return (

    <div className='flex relative  '>
      {/* SIDEBAR */}
      <div className='my-13 fixed w-[200px]'>
        <button className='h-11 w-[170px] text-white font-semibold bg-black rounded-xl mb-5'>Filter</button>
        
        {/* Categories Section */}
        <div className='border border-gray-100 p-3'>
          <h1 className='font-bold text-xl text-black'>CATEGORIES</h1>
          <div className='flex flex-col gap-3 my-3'>
            <label className='flex gap-2'><input onChange = {toggleCategory} type="checkbox" value="Men" /> Men</label>
            <label className='flex gap-2'><input onChange = {toggleCategory} type="checkbox" value="Women"/> Women</label>
            <label className='flex gap-2'><input onChange = {toggleCategory} type="checkbox" value="Kids" /> Kids</label>
          </div>
        </div>

        {/* Search Section */}
        <div className='border border-slate-200 p-3 mt-5'>
          <p className='text-xl font-bold'>Search</p>
          <input 
            className='h-[30px] w-full border border-slate-200 mt-2 px-2' 
            type="text" 
            placeholder='Search...' 
          />
        </div>

        {/* Sub Categories Section */}
        <div className='border border-slate-200 p-3 mt-4'>
          <h1 className='font-bold text-xl text-black'>SUB-CATEGORIES</h1>
          <div className='flex flex-col gap-3 my-3'>
            <label className='flex gap-2'><input type="checkbox" value='Topwear' /> TopWear</label>
            <label className='flex gap-2'><input type="checkbox" value='Bottomwear' /> BottomWear</label>
            <label className='flex gap-2'><input type="checkbox" value='Winterwear' /> WinterWear</label>
          </div>
        </div>
      </div>
      {/* For the products */}
      <div className = 'ms-[230px] flex flex-col mt-[25px] gap-5'>
        <Title t1='All' t2='Products' />
      <div className = 'flex flex-wrap gap-3'>
        
         {

          products.map(i => <div className= 'h-[320px] w-[220px]'>
              <img src={i.image[0]} alt = "Products" />
                 <h1>{i.name}</h1>
             </div>)
         }
      </div>
      </div>

     
    </div>
  )
}

export default AllProducts;