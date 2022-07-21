import styled from "@emotion/styled";

export default function Board(props: any){
    
    const Row = styled.div`
        display: flex;
        `;

    const Column = styled.div`
        width: 25%;
        `;

    return(
    <div>
        {props.data?.fetchBoards?.map((el: any) => (
            <Row key={el._id}>
            <Column>{el.writer}</Column>
            <Column>{el.title}</Column>
            </Row>
      ))}
    </div>
    )
}