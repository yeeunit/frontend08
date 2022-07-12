
import * as FetchStyles from './0508.styles'


export default function FetchBoard0508UI(props){

    return (
        <>
        <FetchStyles.Wrapper>
            <FetchStyles.Title>
                7/11(월) Homework <br /><br />
            </FetchStyles.Title>

            <FetchStyles.SteelblueDiv>
                {props.number}번 게시글 이동이 완료되었습니다.<br /><br />
            </FetchStyles.SteelblueDiv>


            <FetchStyles.SteelblueDiv>
                작성자 :  {props.writer}

                테스트: {props.data ? props.data.fetchBoard.writer : "받아오는 중 입니다"}
                

                {props.data ? props.writer : "받아오는 중 입니다"}
                <br /><br />
                
            </FetchStyles.SteelblueDiv>

            <FetchStyles.SteelblueDiv>
                제목 : {props.data ? props.data.fetchBoard.title : "받아오는 중 입니다"}
                <br /><br />
            </FetchStyles.SteelblueDiv>

            <FetchStyles.SteelblueDiv>
                내용 : {props.data? props.data.fetchBoard.contents : "받아오는 중 입니다"}
                <br />
            </FetchStyles.SteelblueDiv>

            </FetchStyles.Wrapper>
        </>
    )
}