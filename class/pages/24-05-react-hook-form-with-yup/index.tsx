import {useForm} from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
    writer: yup.string().required("작성자를 입력해주세요"),
    password: yup.string().required("비밀번호를 입력해주세요"),
    title: yup.string().required("제목입력해"),
    contents: yup.string().required("내용입력해"),

    // email: yup
    // .string()
    // .email("이메일 형식에 적합하지 않습ㄴ다.")
    // .required("이메일은 필수")

    // password: yup
    // .string()
    // .min(4, "비밀번호는 최소 4자리 이상 입력해주세요").required("비밀번호를 입력해주세요")
    // .max(15, "비밀번호 최대 15자리")
    // .required("이메일은 필수"),

    // phone: yup
    // .string()
    // .matches(/^\d{3}-\d{3,4}-\d{4}$/, "휴대폰 형식에 알맞지 않음")

})


export default function ReacHookFormPage(){

        const { register, handleSubmit, formState } = useForm({
            resolver: yupResolver(schema),
            mode: "onChange"
        })
         
        const onClickButton = (data) => {
            console.log(data)
        }


    return (
        <form onSubmit={handleSubmit(onClickButton)}>
        
        작성자: <input type="text" {...register("writer")} />
        <div> {formState.errors.writer?.message}
        </div>

        제목: <input type="text" {...register("title")}  />
        <div> {formState.errors.title?.message}
        </div>

        비밀번호: <input type="password" {...register("password")}  />
        <div>{formState.errors.password?.message}
        </div>

        내용: <input type="text" {...register("contents")}  />
        <div>{formState.errors.contents?.message}
        </div>

        {/* 이메일: <input type="text" {...register("email")}  />
        <div>{formState.errors.email?.message}
        </div>
     */}

        <button style={{background: formState.isValid ? "gold" : "default"}}>등록하기</button>
        </form>



    )
}