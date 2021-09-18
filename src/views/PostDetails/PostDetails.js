import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import * as S from './StyledPostDetails';
import Loader from '../../components/atoms/Loader/Loader';
import { api } from '../../utils/api';
import { Span } from '../../components/atoms/Span/Span';
import { H2 } from '../../components/atoms/H2/H2';


const PostDetails = ({match}) => {
    const postId = parseInt(match.params.id)

    const [post, setPost] = useState('') 
    const [isLoading, setIsLoading] = useState(true)
    const [comments, setComments] = useState([])


    useEffect(async () => {
        const post = await axios.get(`${api}/posts/${postId}`, {withCredentials: true})
        setPost(post)

        const comments = await axios.get(`${api}/posts/${postId}/comments`, {withCredentials: true})
        setComments(comments)

        if(comments !== [] && post !== '') {
            setIsLoading(false)
            console.log(comments)
        }
    }, []);

    const breadcrumbs = [
        <Link
            underline="hover"
            color="inherit"
            href="/"
            sx={{fontSize: '20px'}}
        >
            Posts 
        </Link>,
        <Typography sx={{fontSize: '20px'}}>
            {post.data?.title}
        </Typography>
    ]

    return (
        <S.Wrapper>
            {isLoading 
                ? <Loader />
                : (
                    <>
                        <S.BreadcrumbWrapper>
                            <Stack spacing={2}>
                                <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{fontSize: '20px'}}>
                                    {breadcrumbs}
                                </Breadcrumbs>
                            </Stack>
                        </S.BreadcrumbWrapper>
                        <S.PostDetailsWrapper>
                            <Span size='36px'>
                                {post.data?.title}
                            </Span> 
                            <S.ExtendSpan>
                                {post.data?.body}
                            </S.ExtendSpan>  
                            <H2>
                                Comments
                            </H2>
                            {comments.data.map(comment => 
                                <S.CommentWrapper>
                                    <Span bold>
                                        {comment.name}
                                    </Span>
                                    <Span>
                                        {comment.body}
                                    </Span>
                                </S.CommentWrapper>    
                            )}
                        </S.PostDetailsWrapper>
                    </>
                )
            }
        </S.Wrapper>
    )
}

export default PostDetails