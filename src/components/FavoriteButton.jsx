const FavoriteButton = ({ handleFavToggle, favRecipeId }) => {
  return (
    <>
      <button onClick={() => handleFavToggle(favRecipeId)} type="button">
        Toggle Favorite
      </button>
    </>
  );
};

export default FavoriteButton;
