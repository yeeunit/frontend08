// import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic'

// 리렌더되는 것과 상관없이 한번만 되도록
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false })
 

export default function WebEditorPage() {

    const onChangeContents = (value: string) => {
        console.log(value)
        // 리액트퀼에서 만든 온체인지라 이벤트 못받음
    }

    return (
        <div>
            <br />
            작성자 : <input type="text"/>
            <br />
            비밀번호 :  <input type="password"/>
            <br />
            제목 : <input type="text"/>
            <br />
            내용 : <ReactQuill onChange={onChangeContents}/> 
            <br />
            {/* 프로세스가 있을 때에만 보여줘 도 안됨.. 임폴트 자체의 문제
            { process.browser && <ReactQuill /> } */}

            <button>등록하기</button>

        </div>
    )
}