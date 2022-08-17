// # 2-1. 이미지 성능 높이기
// 1. 게시물을 작성하기 위한 작성자, 비밀번호, 제목, 내용 4개의 입력창을 만들어 주세요.
// 2. 이미지를 올릴 file 태그를 만들어 주세요.
// 3. file 태그를 활용해 이미지가 변경되면 이미지가 화면에 나타나도록 만들어 보세요.
// ⇒ 단, 이미지는 빠르게 나타나야 합니다.(미리보기)
// ⇒ 힌트) FileReader() 객체를 사용해 주세요.
// 4. [저장하기] 버튼을 만들고, 해당 버튼을 클릭하면, createBoard API를 활용하여 작성자, 비밀번호, 제목, 내용, 이미지URL을 등록해 주세요.
// ⇒ 단, file이 존재하는 경우 file을 먼저 스토리지에 전송(uploadFile 활용)하고, 전송된 결과로 받은 url과 나머지 데이터들(작성자, 비밀번호, 제목, 내용)을 함께 등록합니다.


import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react"


const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage(){

    const initialInputs = { writer: "", password: "", title: "", contents: "" };
    const [inputs, setInputs] = useState(initialInputs);

    const [imageUrl, setImageUrl] = useState("");
    const [file, setFile] = useState<File>();

    const [uploadFile] = useMutation(UPLOAD_FILE);
    const [createBoard] = useMutation(CREATE_BOARD)


    // 게시물 등록하기 

  const onClickSubmit = async () => {

      const resultFile = await uploadFile({ variables: { file } });
      const url = resultFile.data.uploadFile.url;

      // Objet 넌 어디서 온거니?..
      if (Object.values(inputs).every((el) => el)) {
        try {
      const result = createBoard({
        variables: {
          createBoardInput: {
            ...inputs,
            images: url,
          },
        },
      });
      console.log(result);
      console.log(`결과는 ${result}`);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  }
  }

    const onChangeInputs = (event) => {
      const _inputs = { 
        ...inputs, 
        [event.target.id]: event.target.value,
      };
      setInputs(_inputs);
  }

    const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;

        // 1.진짜 url
        const fileReader = new FileReader() // 파일 읽어오는 도구
        fileReader.readAsDataURL(file) // 파일을 넣으면 이를 읽어 유알엘(주소)로 만들어줌
        fileReader.onload = (data) => {
            if(typeof data.target?.result === "string")
            console.log(data.target?.result)
            setImageUrl(data.target?.result);
            setFile(file);
        }
    }

    return(
        <>
        <div>

        <h2> Quiz 2-1 이미지 성능 높이기 </h2>
        작성자 : <input type = "text" id="writer" onChange={onChangeInputs} />
        비밀번호 : <input type = "password" id="password"onChange={onChangeInputs} />
        제목 : <input type = "text" id="title"onChange={onChangeInputs} />
        내용 : <input type = "text" id="contents" onChange={onChangeInputs} /> 

        <h4> 이미지 업로드 </h4>
        <input type="file" onChange={onChangeFile} />
        <img src={imageUrl} />

        <button onClick={onClickSubmit}>저장하기</button>
        
        </div>
        </>
    )
}
