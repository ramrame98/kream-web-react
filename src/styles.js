import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
    ${reset};
    
    *{
        box-sizing:boerder-box;
    }
    input{
        all:unset;
    }
    body{
        font-size: 14px;
        font-family: Pretendard Variable,Pretendard,-apple-system,BlinkMacSystemFont,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,Helvetica Neue,Apple SD Gothic Neo,Noto Sans KR,Malgun Gothic,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
        color: #222;
    }
`;
