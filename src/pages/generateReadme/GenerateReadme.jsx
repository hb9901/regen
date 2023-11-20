import React, { useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import Loaded from "./loaded/Loaded";
import Loading from "./loading/Lodading"

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
                setisLoaded(true); 
            }
            sseEvents.addEventListener('error', function(e) {
                if (e.readyState == EventSource.CLOSED)
                    sseEvents.close(); {
                    setisLoaded(true); 
                }
            }, false);

            return() => {
                sseEvents.close();
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