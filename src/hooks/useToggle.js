import { useCallback, useState } from "react";

const useToggle = () => {
    const [value, setValue] = useState();

    const setToggle = useCallback(() => {
        setValue(value => !value);
    }, []);

    return [value, setToggle]
}

export default useToggle;