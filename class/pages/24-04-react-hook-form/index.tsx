import {useForm} from "react-hook-form"


export default function ReacHookFormPage(){

        const { register, handleSubmit } = useForm()
        const onClickButton = (data) => {
            console.log(data)
        }


    return (
        <form onSubmit={handleSubmit(onClickButton)}>
        
        작성자: <input type="text" {...register("writer")} />
        제목: <input type="text" {...register("title")}  />
        내용: <input type="text" {...register("contents")}  />
        <button>등록하기</button>
        </form>



        // {/* form 태그 내에서의 버튼 타입들
        // <button onClick={onclickMove}>페이지 이동하기</button>
        // <button type="button">등록하기</button>
        // <button type="reset">등록하기</button> */}

    )
}