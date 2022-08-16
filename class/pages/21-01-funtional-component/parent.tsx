import ChildPage from "./child";

export default function ParentPage(){
    
    const qqq ={
        count: 200,
    }

    return(
        <div>
        {/* <ChildPage count={100} />     */}
        {/* {ChildPage({count:300})} */}

        {ChildPage(qqq)}

        </div>
    )
}