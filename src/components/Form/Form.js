import { AppContext } from "../../context/AppContext";
import { useContext } from 'react';
import Routes from "../Routes/Routes";
import Directions from "../Directions/Directions";
import Stops from "../Stops/Stops";


const Form = () => {

    const {selectedRoute, selectedDirection, selectedStop} = useContext(AppContext);

    return(
        <>
            <div className="form-container wrap">
                <h2>Real-time Departures</h2>
                <Routes />
                { selectedRoute && <Directions /> }
                { selectedDirection && <Stops /> }
            </div>            
        </>
    )
}

export default Form;