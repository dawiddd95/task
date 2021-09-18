import styled from 'styled-components'
import { Span } from '../../components/atoms/Span/Span';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const BreadcrumbWrapper = styled.div`
    width: 100%;
    height: 80px;
    background-color: rgba(255,255,255,0.5);
    padding: 0 20px;
    display: flex;
    align-items: center;
    border: 1px solid;
    margin-bottom: 60px;
`

export const PostDetailsWrapper = styled.div`
    padding: 20px;
    background-color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const ExtendSpan = styled(Span)`
    margin-top: 30px;
`

export const CommentWrapper = styled.div`
    margin: 40px 0 0 0;
    display: flex;
    flex-direction: column;
    max-width: 600px;
`