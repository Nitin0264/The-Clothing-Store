import React, { useEffect, useState } from 'react'
import { p } from '../assets/products'

function Cate() {
    let [cate, setCate] = useState([])
    let [sorting1, setSorting1] = useState('')
    let [search1, setSearch1] = useState('')
    let [data, setData] = useState(false)

    function toggleCate(e) {
        let value = e.target.value
        setCate(i => i.includes(value) ? i.filter(f => f != value) : [...i, value])
    }


    const sorting = (e) => {
        let value = e.target.value
        setSorting1(value)
    }

    const searchere = (e) => {
        let value = e.target.value.toLowerCase()
        setSearch1(value)
    }
    useEffect(() => {
        let products = [...p]
        if (cate.length > 0) {
            products = products.filter(i => cate.includes(i.category))
            console.log(products)

        }
        if (sorting1 == "low") {
            products = products.sort((a, b) => a.price - b.price)
            console.log(products)

        }
        if (sorting1 == "high") {
            products = products.sort((a, b) => b.price - a.price)
            console.log(products)
        }

        if (search1) {
            products = products.filter(i => i.title.toLowerCase().includes(search1))
            console.log(products)
        }
        setTimeout(() => setData(products), [2000])
    }, [cate, sorting1, search1])

    useEffect(() => {
        console.log(data)
    }, [data])
    return (
        <div>

            <input type="text" placeholder='search karle yehi per' onChange={searchere} />

            Men <input type="checkbox" onChange={toggleCate} value="men's clothing" />
            women <input type="checkbox" onChange={toggleCate} value="women's clothing" />
            jewelery <input type="checkbox" onChange={toggleCate} value="jewelery" />

            <select onChange={sorting} name="" id="">
                <option value="">Relevant</option>
                <option value="high">dam tez hain</option>
                <option value="low">dam manda hain</option>
            </select>

            {
                data ? <h1>Data hain</h1> : <h1>No data found</h1>
            }
        </div>
    )
}

export default Cate