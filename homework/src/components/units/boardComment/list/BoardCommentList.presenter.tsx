
import { Modal } from "antd"
import { getDate } from "../../../../commons/libraries/utils"
import * as C from "../list/BoardCommentList.styles"
import { IBoardCommentListUIProps } from "./BoardCommntList.typescript"


export default function BoardCommentListUI(props: IBoardCommentListUIProps) {

    const onClickComment = (event) => {
        alert(event.currenTarget.id + "입니다!")
    }


    return(
        <>
            
{/*             
            {isOpenDeleteModal && (
        <Modal visible={true} onOk={onClickDelete}>
          <div>비밀번호 입력: </div>
          <S.PasswordInput type="password" onChange={onChangeDeletePassword} />
        </Modal>
      )}
      {!isEdit && (
        <C.ItemWrapper>
          <C.FlexWrapper>
            <C.MainWrapper>
              <C.WriterWrapper>
                <C.Writer>{props.el?.writer}</.Writer>
                <C.Star value={props.el?.rating} disabled />
              </C.WriterWrapper>
              <C.Contents>{props.el?.contents}</C.Contents>
            </C.MainWrapper>
            <C.OptionWrapper>
              <C.UpdateIcon
                src="/images/boardComment/list/option_update_icon.png/"
                onClick={onClickUpdate}
              />
              <C.DeleteIcon
                src="/images/boardComment/list/option_delete_icon.png/"
                onClick={onClickOpenDeleteModal}
              />
            </C.OptionWrapper>
          </C.FlexWrapper>
          <C.DateString>{props.el?.createdAt}</.DateString>
        </C.ItemWrapper>
      )}
      */}

<C.Wrapper> 
  <div>
      {/* {props.isEdit && (
        <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )} */}

            {props.data?.fetchBoardComments.map((el) => (

                <C.CommentWrap id={el.writer} onClick={onClickComment}>
                
                <C.CommentTitle>
                    댓글 <br /><br />⭐️⭐️⭐️⭐️⭐️
                </C.CommentTitle>
                
                <C.CommentBox type="text" 
                placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있씁니다." />

                <C.CommentBtn 
                onClickC={props.onClickCommentSubmit}> 
                댓글등록</C.CommentBtn>

                <C.ProfilePhoto> 프사 </C.ProfilePhoto>

                 <C.CommentWriter>
                    작성자 
                    {props.data ? props.data.fetchBoardComments.writer: "받아오는 중입니다."}                
                    </C.CommentWriter>

                <C.Writer>{el.writer}</C.Writer>

                <C.Star value={el.rating} disabled />

                <C.Grade>별점</C.Grade>
                <C.Comment>내용 
                {props.data ? props.data.fetchBoardComments.contents: "받아오는 중입니다."}                
                </C.Comment> 

                <C.DeleteIcon
                  id={el._id}
                  onClick={props.onClickDelete}
                /> 삭제

                <C.DateString> 날짜 {getDate(el?.createdAt)} </C.DateString>
                

            </C.CommentWrap>
            ))
            }

            </div>
        </C.Wrapper>

    </>   
    )
}

