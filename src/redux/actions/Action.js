export const ADD=(item)=>{
    return{
        type:"ADD_CART",
        payload:item
    }
}
//remove data

export const DLT=(id)=>{
    return{
        type:"REMOVE_CART",
        payload:id
    }
}