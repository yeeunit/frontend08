// # 3-1. 웹에디터 연동하기(React-Quill)

// 1. /pages/quiz06/editor/writer/index.tsx 페이지를 만들고, 폼을 만들어 주세요.(react-hook-form 사용)
// ⇒ 폼의 내용은 writer, password, title, contents 총 4가지 항목입니다.
// 2. contents 부분은 react-quill 에디터를 사용해서 만들어 주세요.
// ⇒ react-quill을 적용할 때 발생하는 SSR 이슈는 dynamic import를 활용해서 완료해서 주세요.
// 3. [ 등록하기 ] 버튼을 누르면 게시물을 등록하고, /pages/quiz06/editor/detail/[id]/index.tsx 페이지로 이동시켜 주세요.


import { useForm } from "react-hook-form";
import { gql, useMutation } from '@apollo/client';
import dynamic from 'next/dynamic';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/router";


const ReactQuill = dynamic(() => import("react-quill"), { ssr : false})

const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!){
        createBoard(createBoardInput: $createBoardInput){
            _id
            writer
            title
            contents
        }
    }
`


// SSR(Server Side Rendering)
export default function WebEditorQuizPage(){

    const [createBoard] = useMutation(CREATE_BOARD)
    const router = useRouter()

    const { register, handleSubmit, setValue, trigger} = useForm({
        mode: "onChange"
    })

    const onChangeContents = (value: string) => {
        console.log(value)

    // register로 등록하지 않고 강제로 값을 넣어줌
    setValue("contents", value === "<p><br></p>" ? "" : value)

    // onChange 됐음을 리액트훅폼에 강제로 알려줌
    trigger("contents")
    }


    const onClickCreate = async (data) => {
        const result = await createBoard({
            variables: {
                createBoardInput: {
                    writer: data.writer,
                    password : data.password,
                    title: data.title,
                    contents : data.contents,
                }
            }
        })
        router.push(`/quiz0810/editor/detail/${result.data.createBoard._id}`)
    }


    return(
        <>
        <div style={{width: "600px", height: "500px", background: "white", padding:"30px", border:"5px solid black"}}>
    <h2>8/10(수) 오늘의 퀴즈입니다</h2> <br /><hr /><br />
        <form onSubmit={handleSubmit(onClickCreate)}>

        👉 작성자 <input type = "text" {...register("writer")}/> 
            <br />

            👉 비밀번호 <input type = "password" {...register("password")} /> 
            <br />

            👉 제목 <input type = "text" {...register("title")} /> 
            <br />
            <br />
            <ReactQuill onChange={onChangeContents} />

            <br />
            <button>등록하기</button>
        </form>

        </div>
        </>
    )
}