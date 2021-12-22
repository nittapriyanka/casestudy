import React from 'react';
function NameList(){
    const names=['sushama','samatha','vydehi']

    const nameList= names.map(name=><h1>{name}</h1>)

    const Product=[
        {id:111,name:'TV', rate:564},
        {id:112,name:'laptop',rate:989},
        {id:113,name:'pc',rate:787},
        {id:114,name:'mobile',rate:943}
    ]

    const productList=Product.map(pro=><h1>{pro.id} {pro.name} {pro.rate}</h1>)

    return(
        <div>
            { nameList }
            {productList}
        </div>
    )
        
    }
    export default NameList      
        
    
