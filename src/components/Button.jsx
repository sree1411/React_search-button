 

 
const Button = ({title, filterProducts}) => {
  return (
    <button onClick={()=>filterProducts(title)}  className='btn btn-outline-dark me-2'> {title.charAt(0).toUpperCase() + title.slice(1)}</button>
  
)

}

export default Button