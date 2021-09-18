import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import axios from 'axios';
import { Loader } from '../../components/atoms/Loader/StyledLoader';
import { api } from '../../utils/api';
import * as S from './StyledPostsList';
import List from '../../components/organisms/List/List';

interface IState {
    data: {
        body: string
        id: number
        title: string
        userId: number
    }[]
    loading: boolean
}

const PostsList = (): JSX.Element => {
    const [data, setData] = useState<IState["data"]>([])
    const [isLoading, setIsLoading] = useState<IState["loading"]>(true)

    useEffect(() => {
        axios.get(`${api}/posts`, {withCredentials: true})
            .then(response => {
                setIsLoading(false)
                setData(response.data)
            })
    }, [data]);

    return (
        <S.Wrapper>
            <S.BreadcrumbWrapper>
                <Breadcrumbs aria-label="breadcrumb">
                    <Typography sx={{fontSize: '20px'}}>Posts</Typography>
                </Breadcrumbs>
            </S.BreadcrumbWrapper>
            {isLoading ? <Loader /> : <List data={data} />}
        </S.Wrapper>
    )
};


export default PostsList