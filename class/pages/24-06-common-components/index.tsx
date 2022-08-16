import {useForm} from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Input01 from "../../src/components/commons/inputs/01"
import Button01 from "../../src/components/commons/buttons/01"

const schema = yup.object({
    writer: yup.string().required("작성자를 입력해주세요"),
    password: yup.string().required("비밀번호를 입력해주세요"),
    title: yup.string().required("제목입력해"),
    contents: yup.string().required("내용입력해"),

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
        
            작성자: <Input01 type="text" register={register("writer")}/>
            
            <div> {formState.errors.writer?.message}
            </div>

            제목: <Input01 type="text" register={register("title")}/>
            <div> {formState.errors.title?.message}
            </div>

            비밀번호: <Input01 type="password" register={register("password")}/>
            <div>{formState.errors.password?.message}
            </div>

            내용: <Input01 type="text" register={register("contents")}/>
            <div>{formState.errors.contents?.message}
            </div>

            <Button01 title="등록하기" isActive={formState.isValid}/>

        </form>



    )
}