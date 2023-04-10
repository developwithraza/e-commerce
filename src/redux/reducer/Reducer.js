const INIT_STATE={
    carts:[]
}
export const cartReducer=(state=INIT_STATE,action)=>{
   switch(action.type){
     case "ADD_CART" : 
     const ItemIndex=state.carts.findIndex((item)=>item.id===action.payload.id);
     if(ItemIndex >=0){
      state.carts[ItemIndex].qnty+=1
     }else{
      const temp={...action.payload,qnty:1}
      return{
         ...state,
         carts:[...state.carts,temp]
      }
     }
   //   return{
   //      ...state,
   //      carts:[...state.carts,action.payload]
   //   }
     case "REMOVE_CART" : 
     const data=state.carts.filter((el)=>el.id!== action.payload)
     return {
      ...state,
      carts:data
     }
     default :
     return state
   } 
}