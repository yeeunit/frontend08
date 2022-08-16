import { gql, useQuery } from "@apollo/client"
import { useState } from "react"
import FetchPolicyTest from "../../src/components/units/21-fetch-policy"

const FETCH_BOARDS = gql`
    query fetchBoards {
        fetchBoards {
            _id
            writer
            title
            contents

        }
    }

`

export default function GlobalStagePage(){

    // const { data } = useQuery(FETCH_BOARDS, {
    //     fetchPolicy: "cache-first"
    //     // "network-only 바로 백엔드에 요청함 "
    // })

    const { data } = useQuery(FETCH_BOARDS)
    const [aaa, setAaa] = useState(false)

    const onClickAaa = () => {
        setAaa(true)
    }


    return(
        <>

            <div>
                <button onClick={onClickAaa}>
                    클릭하면 새로운 컴포넌트가 나타납니다.
                </button>

                {aaa & <FetchPolicyTest />}

            </div>
            
        </>
    )
}