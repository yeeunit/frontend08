import { Button, Modal } from 'antd' 
import { useState } from 'react';
import DaumPostcodeEmbed from 'react-daum-postcode';

export default function ModalAlertPage(){

    // Quiz1
    // const [Postcode1, setPostcode1] = useState(true);

    const onCompletePostcode = (data: any) => {
      console.log(data)
      // setPostcode1(false)
      }


    // Quiz2
    
    const [isModalVisible1, setIsModalVisible1] = useState(false);

      const showModal1 = () => {
        setIsModalVisible1(true);};

      const handleOk1 = () => {
        setIsModalVisible1(false);};
    
      const handleCancel1 = () => {
        setIsModalVisible1(false);};


    // Quiz3

    const [isModalVisible2, setIsModalVisible2] = useState(false);

      const showModal2 = () => {
        setIsModalVisible2(true);};

      const handleOk2 = () => {
        setIsModalVisible2(false);};
    
      const handleCancel2 = () => { 
        setIsModalVisible2(false);
      };
        
      const [Postcode2, setPostcode2] = useState();

      const onCompletePostcode2 = (data: any) => {
        // console.log(data.address)
        setPostcode2(data.address)
        setIsModalVisible2(false)
        
        }

      
      // Quiz4

          const [state, setCount] = useState(0);
        
          function sumAll() {
            setCount( prev => prev + 1) 
            setCount( prev => prev + 2) 
            setCount( prev => prev + 3) 
            setCount( prev => prev + 4) 

          }
          

    return (
    <>
        <h3> Quiz 2-1. 주소검색 라이브러리</h3>
          <DaumPostcodeEmbed onComplete = {onCompletePostcode}/>    
        <br /><br /><br />



        <h3> Quiz 2-2. 모달 라이브러리 경고창 만들기</h3>

        <Button onClick={showModal1}> 모달열기!</Button>
        <Modal title="게시글 등록" visible={isModalVisible1} onOk={handleOk1} onCancel={handleCancel1} >
          <p>게시글이 등록되었습니다.</p>
        </Modal>
        <br /><br /><br />



        <h3> Quiz 2-3. 모달 라이브러리와 주소검색 라이브러리 연동하기</h3>

        <Button onClick={showModal2}>
         모달열기!
        </Button>

        {isModalVisible2 && (
        <Modal title="주소검색" visible={true} onOk={handleOk2} onCancel={handleCancel2}> 
          <DaumPostcodeEmbed onComplete = {onCompletePostcode2}/>

        </Modal>
        )}
        <div>{Postcode2}</div>

        <br /><br /><br />


        <h3> Quiz 2-4. State 세부 작동 방식 </h3>

        <div>결과는: {state}</div><br />
        <button onClick={sumAll}>실행!</button>

    </>
    )
}


