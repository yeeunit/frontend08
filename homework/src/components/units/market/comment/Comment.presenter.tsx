import {
  CloseOutlined,
  EditFilled,
  EditOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { getDate } from "../../../../commons/libraries/utils";
import {
  AskBtn,
  BtnWrap,
  CommentListBody,
  CommentListHeader,
  CommentListHeaderInfo,
  CommentListItem,
  CommentWrite,
  UpdateBtn,
  UserInfo,
  Wrapper,
} from "./Comment.styles";
import { ICommentUIProps } from "./Comment.types";

export default function CommentUI(props: ICommentUIProps) {
  return (
    <>
      <Wrapper>
        <CommentListItem>
          <div>
            <QuestionCircleOutlined /> &nbsp; 문의하기
            <CommentWrite
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              {...props.register("contents")}
            />
            <AskBtn>문의하기</AskBtn>
          </div>

          <CommentListHeader>
            <img
              src="/images/avatar.png"
              style={{ margin: "0 20px", width: "80px" }}
            />

            <UserInfo>
              <div> user name {props.el.user.name}</div>
              <div> contents {props.el.contents}</div>
              <div> date {getDate(props.el.createdAt)} </div>
            </UserInfo>
            <CommentListHeaderInfo>
              <div>
                <EditOutlined />
                {/* id={props.el._id}
               onClick={props.handleSubmit(props.onClickUpdate)} */}
                <CloseOutlined onClick={props.onClickUpdateCancel} />

                <UpdateBtn
                  id={props.el._id}
                  onClick={props.handleSubmit(props.onClickUpdate)}
                >
                  수정하기
                </UpdateBtn>
                <div>
                  {props.userInfoId === props.el.user._id && (
                    <>
                      <EditFilled onClick={props.onClickChange} />
                      <CloseOutlined
                        id={props.el._id}
                        onClick={props.onClickDelete}
                      />
                    </>
                  )}
                </div>
                <BtnWrap></BtnWrap>
              </div>
            </CommentListHeaderInfo>
          </CommentListHeader>
          <CommentListBody>{/* <p>{props.el.contents}</p> */}</CommentListBody>
        </CommentListItem>
      </Wrapper>
    </>
  );
}
