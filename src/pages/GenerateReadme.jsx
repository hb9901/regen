import React, { useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import Loaded from "../components/Loaded";
import Loading from "../components/Lodading"

function Readme(){
    const location = useLocation();
    const [readme, setReadme] = useState(``);
    const [isloaded, setisLoaded] = useState(false);
    let md = ``;

    useEffect(() => {
        if(!isloaded){
            const sseEvents = new EventSource(`${process.env.SERVER_API_URL}${location.state.githublink}`)
            sseEvents.onopen = function() {
                console.log("연결");
            }
            sseEvents.onmessage = function (stream) {
                md += JSON.parse(stream.data);
                setReadme(md);
            }
            sseEvents.addEventListener('error', function(e) {
                if (e.readyState == EventSource.CLOSED)
                    sseEvents.close(); {
                    setisLoaded(true); 
                }
            }, false);
            return() => {
                sseEvents.close();
                setisLoaded(true); 
             }
        }
      }, [isloaded])
      
    return (
        isloaded?
        <Loaded readme = {readme}/>:
        <Loading readme ={readme}/>
    )
}

export default Readme;