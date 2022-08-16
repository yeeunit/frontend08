import styled from "@emotion/styled";

export const Column = styled.span`
  margin: 0px 100px;
`;

interface IPageProps {
  isActive?: boolean;
}
export const Page = styled.span`
  margin: 0px 9px;
  color: ${(props: IPageProps) => (props.isActive ? "tomato" : "black")};
  font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};
  cursor: ${(props: IPageProps) => (props.isActive ? "none" : "pointer")};
`;
