import React, { useEffect, useState } from 'react'
import Button from './Button'

const Products = () => {

     const [data, setData] = useState([])
     const [categories, setCategories] = useState([]);
     const [filterd, setFilterd] = useState(data)
    

     useEffect(()=>{
     const fetchData = async ()=>{
        try{
            const response = await fetch("https://fakestoreapi.com/products")
            const result = await response.json()
            setData(result);
            setFilterd(result)
            const unique = [...new Set(result.map((p)=>p.category))]
            console.log(unique)
            setCategories(["all",...unique])
        }catch(err){
            console.log(err.message)
        }
     
     }
     fetchData()
     }, [])


  const filterProducts = (ctr)=>{
    if(ctr === "all"){
        setFilterd(data)
    }else{
     let updated = data.filter((prd)=>prd.category === ctr)
     setFilterd(updated)
    }
  }

  return (
    <div>
        <div className="container">
            <div className="row">
                 <div className="col-12 text-center py-4">
                     <h1> Product List </h1>
                     <hr/>
                 </div>
            </div>

             <div className="row mb-4">
                 <div className="col-12 text-center">
                    {
                    categories.map((cate)=>(
                        <Button title={cate} filterProducts={filterProducts}/>
                    ))
                     }
                 </div>
            
             </div>

           

            <div className="row">
              {
                filterd.length > 0 ? (
                     filterd.map((prd)=>(
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                            <div className='card h-100 text-center p-3'>
                                <img src={prd.image} alt='prod'
                                 style={{height:"250px", objectFit:"contain"}} 
                                />
                                 <div className="card-body">
                                    <h5 className="card-title">{prd.title}</h5>
                                    <p className="card-text">
                                    <strong>Category:</strong> {prd.category}
                                    </p>
                                    <p className="card-text">
                                    <strong>Price:</strong> ${prd.price.toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        </div>   
                     ))
                ) : (<div className="col-12 text-center">
                    <p>No products available.</p>
                  </div>)
              }
        
                
            </div>
        </div>
    </div>
  )
}

export default Products