import classes from "../styles/FavoriteButton.module.css";

const FavoriteButton = ({ handleFavToggle, favRecipeId }) => {
  return (
    <>
      <button
        className={classes.favBtn}
        onClick={() => handleFavToggle(favRecipeId)}
        type="button"
      >
        Toggle Favorite
      </button>
    </>
  );
};

export default FavoriteButton;
