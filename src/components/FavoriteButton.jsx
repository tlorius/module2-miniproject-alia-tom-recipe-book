import classes from "../styles/FavoriteButton.module.css";
import notFavoriteIcon from "../assets/not_favorite.png";
import favoriteIcon from "../assets/favorite.png";

const FavoriteButton = ({ handleFavToggle, favRecipeId, isFavorite }) => {
  return (
    <>
      <button
        className={classes.favBtn}
        onClick={() => handleFavToggle(favRecipeId)}
        type="button"
      >
        <img
          src={isFavorite ? favoriteIcon : notFavoriteIcon}
          alt="Favorite icon"
          className={classes.favBtnImg}
        />
      </button>
    </>
  );
};

export default FavoriteButton;
