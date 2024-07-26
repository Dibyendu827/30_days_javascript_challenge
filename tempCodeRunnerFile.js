function handleError(){
    try{
        myPromise.then((msg)=>{
            console.log(msg);
        })
    }catch(msg){
        console.log(msg);
    }
}
handleError();