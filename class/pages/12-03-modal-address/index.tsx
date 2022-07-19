import { Button, Modal } from 'antd' 
import { useState } from 'react';
import DaumPostcodeEmbed from 'react-daum-postcode'

export default function ModalAlertPage(){

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };

      const onCompletePostcode = (data: any) => {
        console.log(data)
        setIsModalVisible(false)
      }

      //모달 같이 종료하기 
    return (
    <>
      <Button onClick={showModal}>
         모달창 열기!
      </Button>

      <Modal title="모달제목" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <DaumPostcodeEmbed onComplete = {onCompletePostcode}/>
      </Modal>
    
    </>
    )
}

// 다시하기