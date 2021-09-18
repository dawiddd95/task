import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as S from './StyledList'

interface IProps {
    data: {
        body: string
        id: number
        title: string
        userId: number
    }[]
}

const List: React.FC<IProps> = ({data}) => {
    const renderPosts = (): JSX.Element[]  => {
        return data.map(element => 
            <Card key={element.id} sx={{ minWidth: 275, maxWidth: 775, padding: '40px', margin: '30px', border: '1px solid', borderRadius: '0' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 24, fontWeight: 'bold' }} color="#000" gutterBottom>
                        {element.title}
                    </Typography>
                    <Typography sx={{ fontSize: 16 }} color="gray" gutterBottom>
                        {element.body}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="medium" href={`posts/${element.id}`} sx={{color: 'black', padding: '10px 20px', border: '1px solid', marginLeft: 'auto'}}>Full Version</Button>
                </CardActions>
            </Card>
        )
    }

    return (
        <S.Wrapper>
            {renderPosts()}
        </S.Wrapper>
    )
}

export default List