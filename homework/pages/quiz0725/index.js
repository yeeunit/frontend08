import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function LifecyclePage() {


    const router = useRouter()
    const [isChange, setIsChange] = useState(false)


    const onChange = () => {
        setIsChange(true)
        console.log(setIsChange)
        alert("Changed!!!")

    }

    const onClickMove = () =>{
        alert("Byeee!!!")
        router.push("/")
    }


    useEffect(() => {
        console.log("그려지고 나서 실행")
        alert("Renderded!!!")

    }, []);

    useEffect(() => {
        console.log("변경되고 나서 실행")
    });

    useEffect(() => {
        return() => {
            console.log("사라질떄 실행")
        }
    }, []);


    console.log ('숙제중...')

    return(
        <div style={{padding: "20px"}}>

            <div>{isChange}</div>

            <button style={{width: "200px", height: "100px", fontSize: "20px"}} 
            onClick={onChange}>변경!</button>

            <button style={{width: "200px", height: "100px", fontSize: "20px"}} 
            onClick={onClickMove}>이동!</button>

        </div>
    )
}