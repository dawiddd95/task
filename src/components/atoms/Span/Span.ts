import styled from 'styled-components';



export const Span = styled.span`
    color: ${({ color }) => color || '#232323'};
    font-size: ${({ size }: any) => size || '14px'};
    font-weight: ${({ bold }: any) => bold ? 'bold' : 'normal'};
`;