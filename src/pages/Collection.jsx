import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../context/UserContext';
import Title from '../components/Title';
import ProductsDisplay from '../components/ProductsDisplay';

function AllProducts() {
  const { products } = useContext(userContext);
  
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [search, setSearch] = useState('');
  const [shorting, setShorting] = useState('');
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory(prev => prev.includes(value) ? prev.filter(p => p !== value) : [...prev, value]);
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory(prev => prev.includes(value) ? prev.filter(p => p !== value) : [...prev, value]);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value.trim().length > 0) {
      const matches = products.filter(p => p.name.toLowerCase().includes(value.toLowerCase())).slice(0, 5);
      setSuggestions(matches);
    } else {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    let productCopy = [...products];
    if (category.length > 0) productCopy = productCopy.filter(item => category.includes(item.category));
    if (subCategory.length > 0) productCopy = productCopy.filter(item => subCategory.includes(item.subCategory));
    if (search) productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

    if (shorting === 'low') productCopy.sort((a, b) => a.price - b.price);
    else if (shorting === 'high') productCopy.sort((a, b) => b.price - a.price);

    setFilteredProduct(productCopy);
  }, [category, subCategory, search, shorting, products]);

  return (
    <div className='flex flex-col lg:flex-row gap-6 lg:gap-20 pt-10 border-t px-4 sm:px-[5vw] md:px-[7vw] lg:px-12 xl:px-24'>
      
      {/* --- SIDEBAR --- */}
      <div className='lg:w-48 xl:w-52 flex-shrink-0'>
        <div 
          onClick={() => setShowFilter(!showFilter)} 
          className='flex items-center cursor-pointer gap-2 py-3 lg:cursor-default lg:pointer-events-none'
        >
          <p className='text-lg font-bold tracking-tight'>FILTERS</p>
          <span className={`lg:hidden transition-transform duration-300 ${showFilter ? 'rotate-90' : ''}`}>&#10095;</span>
        </div>

        <div className={`space-y-5 transition-all duration-300 ${showFilter ? 'block' : 'hidden'} lg:block`}>
          <div className='border border-gray-100 p-5 rounded bg-white shadow-sm'>
            <p className='mb-4 text-[10px] font-bold uppercase tracking-widest text-gray-400'>Categories</p>
            <div className='flex flex-col gap-3 text-xs text-gray-600'>
              {["Men", "Women", "Kids"].map((item) => (
                <label key={item} className='flex items-center gap-3 cursor-pointer group'>
                  <input className='w-4 h-4 accent-black cursor-pointer' type="checkbox" value={item} onChange={toggleCategory} /> 
                  <span className='group-hover:text-black transition-colors'>{item}</span>
                </label>
              ))}
            </div>
          </div>

          <div className='border border-gray-100 p-5 rounded bg-white shadow-sm'>
            <p className='mb-4 text-[10px] font-bold uppercase tracking-widest text-gray-400'>Type</p>
            <div className='flex flex-col gap-3 text-xs text-gray-600'>
              {["Topwear", "Bottomwear", "Winterwear"].map((item) => (
                <label key={item} className='flex items-center gap-3 cursor-pointer group'>
                  <input className='w-4 h-4 accent-black cursor-pointer' type="checkbox" value={item} onChange={toggleSubCategory} /> 
                  <span className='group-hover:text-black transition-colors'>{item}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className='flex-1'>
        
        <div className='flex flex-col md:flex-row items-center justify-between gap-6 mb-12'>
           <div className='relative w-full max-w-md'>
            <div className='flex items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 focus-within:bg-white focus-within:ring-1 focus-within:ring-black/10 transition-all'>
              <span className='mr-2 opacity-40'>🔍</span>
              <input 
                type="text" 
                placeholder='Search collection...' 
                value={search}
                onChange={handleSearch}
                className='w-full bg-transparent outline-none text-sm'
              />
            </div>

            {suggestions.length > 0 && (
              <ul className='absolute top-full left-0 right-0 bg-white border border-gray-100 mt-2 rounded shadow-2xl z-50'>
                {suggestions.map((item, index) => (
                  <li 
                    key={index} 
                    onClick={() => {setSearch(item.name); setSuggestions([]);}}
                    className='px-5 py-3 hover:bg-gray-50 cursor-pointer text-xs border-b last:border-none flex justify-between'
                  >
                    <span className='font-medium'>{item.name}</span>
                    <span className='text-[10px] text-gray-400 uppercase'>{item.category}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <select 
            onChange={(e) => setShorting(e.target.value)} 
            className='w-full md:w-auto border border-gray-200 text-xs font-bold px-4 py-2.5 rounded bg-white outline-none cursor-pointer hover:border-black'
          >
            <option value="relevant">SORT BY: RELEVANT</option>
            <option value="low">PRICE: LOW TO HIGH</option>
            <option value="high">PRICE: HIGH TO LOW</option>
          </select>
        </div>

        <div className='mb-10'>
           <Title t1='ALL' t2='COLLECTIONS' />
        </div>

        {/* --- DYNAMIC PRODUCT GRID: 3 COLUMNS ON LARGE --- */}
        {/* Changed grid-cols to max 3 on lg and xl screens. Increased gaps for spacing. */}
        <div className='grid gap-3 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-12 gap-y-16 lg:gap-x-16 xl:gap-x-24'>
          {filteredProduct.length > 0 ? (
            filteredProduct.map((item, index) => (
              <div className="flex flex-col" key={index}> 
                <ProductsDisplay 
                  id={item._id} 
                  image={item.image[0]} 
                  name={item.name} 
                  price={item.price} 
                />
              </div>
            ))
          ) : (
            <div className='col-span-full py-40 text-center text-gray-400 font-light'>
              <p className='text-xl'>No items found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AllProducts;