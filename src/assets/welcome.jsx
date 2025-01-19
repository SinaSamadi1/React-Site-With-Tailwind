import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const Welcome = () => {

    const [showWelcome , setShowWelcome] = useState();

    useEffect( () => {

        const data =  localStorage.getItem("intro")
        setShowWelcome(JSON.parse(data) ?? true )

    },[])

    const onHideWelcome = () => {

        setShowWelcome(false);
        localStorage.setItem("intro" , JSON.stringify(false))
    }

    return(
        <>
            {showWelcome && (
                <div className="m-4 mx-16">
                <div className="bg-indigo-500 text-white my-3">
                    <FontAwesomeIcon icon={faClose} className="float-right m-2" onClick={onHideWelcome}/>
                    <div className="p-4"> Welcome!</div>
                </div>
            </div>
            ) }
        </>
    )
}

export default Welcome;