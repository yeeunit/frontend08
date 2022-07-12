
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

import FetchBoard0508UI from './0508.presenter'
import { FETCH_BOARD } from './0508.queries'
1

export default function BoardWrite0508(){


        const router = useRouter()
    
        const { data } = useQuery(FETCH_BOARD, { 
            variables: { number: Number(router.query.number) } 
        })

        // console.log(data)
    
    return (
        
        <FetchBoard0508UI 
            data = { data }
            number = {router.query.number}
        /> 
    )
}

