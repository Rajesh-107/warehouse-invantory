import { useEffect, useState } from "react";

const useServices = () => {
    const [carParts, setCarParts] = useState([]);

    useEffect(() => {
      fetch("https://rocky-gorge-40562.herokuapp.com/inventory")
        .then((res) => res.json())
        .then((data) => setCarParts(data));
    }, []);
    return [carParts]
}
export default useServices;