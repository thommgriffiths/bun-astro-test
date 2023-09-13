import React, {useEffect, useState} from "react"

const MiComponente = () => {
    const [contador, setContador] = useState(0)

    useEffect(() => {
        setInterval(() => {
            console.log("me ejecute")
           setContador(contador + 1)
        }, 1000)
    }, [])


    return(
        <>
        <div>
            <h1>Este es mi componete react</h1>
            <p>es muy lindo</p>
        <p>Ademas se actualizo dinamicamente {contador} veces!</p>
        </div>
        </>
    )
}

export default MiComponente