
const getProduct=()=>{

let result = fetch('cars.json')

let data =  result.json()

const products = data.items
products.map(item=>{
    const {title,price} = item.field
    const{id} = item.sys 
    const image = item.fields.image.fields.image.fields.url;
    return{title,price,image,id}
    
}) 
}
getProduct()