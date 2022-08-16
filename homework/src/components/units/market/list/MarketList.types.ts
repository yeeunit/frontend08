import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { ChangeEvent, MouseEvent } from "react";
import { IQuery, IQueryFetchBoardsArgs } from "../../../../commons/types/generated/types";


export interface IBoardListUIProps {
    data?: Pick<IQuery, "fetchBoards">;
    onClickMoveToBoardNew: () => void;
    onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void 
      
    onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
    onClickPage: (event: MouseEvent<HTMLScriptElement>) => void

    refetch: (
        variables?: Partial<IQueryFetchBoardsArgs> | undefined
    ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
    counts?: number

    refetchBoardsCount: (
        variables: Partial<OperationVariables>
      ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
      count?: number;
      keyword: string;
      onChangeKeyword: (value: string) => void;
}


export interface ITextTokenProps {
    isMatched: boolean;
  }

