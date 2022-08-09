import { Card, CardMedia, CardActions, IconButton, Typography, CardActionArea } from '@mui/material';
import { Favorite } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const SimpleCharacterCard = ({
    characterId,
    characterName,
    characterImage,
    inFavorites,
    handleClickFavorite
}) => {         
    return (
        <Card sx={{ maxWidth: 135 }}>
            <CardActionArea>
                <Link to={`/character-info/${characterId}`}>
                    <CardMedia
                        component="img"
                        height={140}
                        image={characterImage}
                        alt={`${characterName}-image`}
                    />
                </Link>
            </CardActionArea>
            <CardActions>
                <IconButton
                    color={inFavorites ? "error" : "default"}
                    onClick={() => handleClickFavorite(inFavorites, characterId)}
                >
                    <Favorite />
                </IconButton>
                <Typography variant='body2'>
                    {characterName}
                </Typography>
            </CardActions>
        </Card>
    )
}

export default SimpleCharacterCard;