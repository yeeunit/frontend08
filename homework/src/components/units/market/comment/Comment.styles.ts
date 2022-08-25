import styled from "@emotion/styled";

export const Wrapper = styled.input`
  width: 100%;
  padding: 20px;
  background-color: pink;
  border: 1px solid #ccc;
`;

export const CommentWriteWrapper = styled.input`
  width: 100%;
  margin-top: 30px;
  height: 150px;
  padding: 20px;
  background-color: #ddd;
  border: 1px solid #ccc;
`;

export const AskBtn = styled.div`
  width: 100px;
  height: 40px;
  background-color: steelblue;
  color: white;
  text-align: center;
  line-height: 40px;
  float: right;
  margin: 10px;
`;
export const CommentListItem = styled.div`
  width: 100%;
  margin-bottom: 30px;
  padding: 20px;
  background-color: #eee;
`;

export const CommentListHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #fff;
`;

export const UserInfo = styled.div`
  width: 700px;
  /* background: #ddd; */
  padding: 20px;
  text-align: left;
`;

export const CommentListHeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  text-align: left;
`;

export const CommentListBody = styled.div`
  margin-top: 10px;
  font-size: 20px;
  /* border: 1px solid red; */
`;

export const CommentWrite = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 20px;
  margin-top: 20px;
`;

export const BtnWrap = styled.div`
  margin-top: 20px;
  text-align: right;
  /* border: 1px solid red; */
`;

export const CancelBtn = styled.button`
  width: 110px;
  height: 40px;
  color: #000000;
  border: 1px solid #000000;
  font-weight: bold;
  cursor: pointer;
  margin-right: 10px;
  border: 1px solid red;
`;

export const UpdateBtn = styled.button`
  width: 110px;
  height: 40px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid red;
`;
