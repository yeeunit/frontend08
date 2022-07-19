import { Button, Modal } from 'antd' 
import { useState } from 'react';

export default function ModalAlertPage(){

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [password, setPassword] = useState("")

    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };

    const onChangePassword = (event) => {
        setPassword(event.target.value)

    }

    return (
    <>
      <Button onClick={showModal}>
         모달창 열기
      </Button>
      {/* isModalVisible 대신 트루 펄스로 변경 가능 */}
      <Modal title="모달제목" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>내부 내용 바꾸기...</p>
        <p>비밀번호 입력 : <input type ="password" onChange={onChangePassword} /></p>
      </Modal>
    
    </>
    )
}
