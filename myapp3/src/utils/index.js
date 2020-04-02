import queryString from 'query-string'
let rootUrl='https://www.fastmock.site/mock/fbe5ebe20ef827a5d6b7b531acae8c90/api'

let myFetch={
    get(url,queryParams){
        url=rootUrl
        if(queryParams){
            url+="?"+queryString.stringify(queryParams) 
        }
       
        return fetch(rootUrl+url)
                .then(res=>res.json())
    },
    post(url,body){
        return fetch(rootUrl+url,
            {
            method:'POST',
            headers:{
                "Accpect":'application/json',
                "Content-Type":'application/json'
            },
            body:JSON.stringify(body)
        })
        .then(res=>res.json())
    }
}

export {myFetch}