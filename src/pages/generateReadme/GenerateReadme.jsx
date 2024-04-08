import React, { useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import Loaded from "./loaded/Loaded";
import Loading from "./loading/Lodading"
import Error from "../error/Error";

function Readme(){
    const location = useLocation();
    const [readme, setReadme] = useState(``);
    const [errorOccured, setErrorOccured] = useState(false);
    const [loaded, setLoaded] = useState(false);
    let md = ``;

    useEffect(() => {
            const sseEvents = new EventSource(`${process.env.SERVER_API_URL}${location.state.githublink}`)
            sseEvents.onopen = function() {
                console.log("연결");
            }
            sseEvents.onmessage = function (stream) {
                md += JSON.parse(stream.data);
                setReadme(md);
  
            }

            sseEvents.addEventListener('error', function(e) {
                if (e.readyState === EventSource.CLOSED){
                    sseEvents.close();
                    setLoaded(true); 
                }
                setErrorOccured(true); 
            }, false);

            return() => {
                sseEvents.close();
             }
      }, [loaded])

    return (
        errorOccured?
        <Error/>:
        loaded?
        <Loaded readme = {readme}/>:
        <Loading readme ={readme}/>
    )
}

export default Readme;