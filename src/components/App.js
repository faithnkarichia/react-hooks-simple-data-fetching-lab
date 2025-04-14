// create your App component here
//create app.js
import React,{useState,useEffect} from "react";
function App(){
    const [image,setImage]=useState([])
    const [isloaded, setIsLoaded]=useState(false)
    useEffect(()=>{
        fetch ("https://dog.ceo/api/breeds/image/random")
        .then(res=>res.json())
        .then((data)=>{
            console.log(data)
            setImage(data)
            setIsLoaded(true)
        })
        
    },[])
    if(!isloaded){
        return <p>Loading...</p>
    }
    return(
        <img src={image.message} alt="A Random Dog"/>
       
    )
}
export default App
