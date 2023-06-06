"use client"
import { useState } from "react";

const Hook = () => {

    const [ seeMore, setSeeMore ] = useState(false);

    return {
        seeMore,
        setSeeMore
    }
}

export default Hook;
