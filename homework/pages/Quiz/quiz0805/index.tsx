// # 5-1. event.target.id 방식에서 HOF 방식으로 변경하기
// # 5-2. react-hook-form 적용하기
// # 5-3. yup 적용하기
// # 5-4. 공통 컴포넌트 만들기

import { useForm } from "react-hook-form"
import { yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Input01 from "../../src/components/commons/inputs/01"
import Button01 from "../../src/components/commons/buttons/01"



const schema = yup.object({
    writer: yup.string().max(5, "작성자는 5글자 이내 문자열입니다").required("작성자를 작성해 주세여"),

    password: yup.string().matches(/[^A-Za-z0-9$]/gi, "비밀번호 형식에 맞지 않습니다.").max(8, "비밀번호는 영문, 숫자, 특수문자를 포함한 8자리 이내 문자열입니다." ).required("비밀번호를 입력해 주세요"),

    title: yup.string().max(100, "제목은 100자 이내 문자열입니다.").required("제목을 입력하세요"),

    contents: yup.string().max(1000, "내용은 1000자 이내 문자열입니다.").required("내용을 입력해주세요"),
})


export default function QuizPage(){

    const onClickButton = (aaa) => () => {
       console.log(aaa)
    }



    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange"
    })

    const onClickRegister = (data) => {
        console.log(data)
        // error
    }


    return(
        <>
        
        <br /><h1> 8/5(금) Quiz! </h1>
        <br /><h3>5-1. event.target.id 방식에서 HOF 방식으로 변경하기</h3>
            <button onClick={onClickButton(123)}>버튼</button>



        <br /><h3>
            5-2. react-hook-form 적용하기 / 
            5-3. yup 적용하기 /
            5-4. 공통 컴포넌트 만들기
            </h3>


            <form onSubmit = { handleSubmit(onClickRegister) } >
                작성자 : <Input01 type="text" register={register("writer")} />
                <div>{formState.errors.writer?.message}</div>

                비밀번호 : <Input01 type="password" register={register("password")} />
                <div>{formState.errors.password?.message}</div>

                제목 : <Input01 type="text" register={register("title")} />
                <div>{formState.errors.title?.message}</div>

                내용 : <Input01 type="text" register={register("contents")} />
                <div>{formState.errors.contents?.message}</div>

                <Button01 title="게시물 등록하기" isActive ={formState.isValid} />

                </form>

        </>
    )
}