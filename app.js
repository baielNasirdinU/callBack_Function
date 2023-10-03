const getTodos=function(callback){

    const request =new XMLHttpRequest()
    
    request.addEventListener('readystatechange',()=>{
    if (request.readyState===4 && request.status===200) {
        // console.log(JSON.parse( request.responseText));
        const data =JSON.parse(request.responseText)
        // console.log(data);
        callback(undefined, data)
        
    }else if (request.readyState===4 ) {
        console.log('no page');
        callback('no page',undefined)
        
    }
    })
    request.open("GET",'https://jsonplaceholder.typicode.com/todos/')
    request.send()
}

getTodos((err ,data)=>{
   if (data) {
    console.log(data);
    
   }else{
    console.log(err);
   }
})