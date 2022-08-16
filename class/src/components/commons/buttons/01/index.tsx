export default function Button01(props){

    return(
        <>
        <button style={{background: props.isActive ? "gold" : "default"}}>
            {props.title}
        </button>

        </>
    )
}