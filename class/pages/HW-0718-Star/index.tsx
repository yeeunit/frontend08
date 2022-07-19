import { Rate } from 'antd';
import styled from "@emotion/styled"
import {useState} from 'react';

const MyStar = styled(Rate)`
    font-size: 50px;
    color: skyblue;
`

// export default function LibraryStarPage(){
    // const Star =['1점','2점','3점','4점','5점'];

export default function StarPage(){
        const [value, setValue] = useState(0);

        const onclickStar = (value) => {
            console.log(value)
            setValue(value)
            alert(value + "점")
        }
      
    return (
            <>
            <span>
                <MyStar onChange={onclickStar} value={value} />
            </span><br /> 
            점수 :{`${value}점`}
            </>
        );
};


//     const App: React.FC = () => {
//     const [value, setValue] = useState(3);
//     // console.log(value)

//     // const onClickStar = () =>{
//     //     const result = setValue('3점')
//     // }

//     }

//     return (
//     <span>
                
//         <h2>Quiz 1-1. 별점 라이브러리</h2>
//         <MyStar tooltips={star} onChange={setValue} value={value} />
        
//         <br/>
//         {value ? <span className="ant-rate-text">{star[value - 1]} </span> : ''}
            
        
//     </span>
//     )


// export default App;


