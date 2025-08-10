export const FavouriteModal = ({cities, onClose}) => {
return(
       <div className="overlay">
      <div className="modal favorite-modal">
        <button onClick={onClose} className="close-btn">Close</button>
        <h2>Favorite Cities</h2>
        {cities.length === 0 ? (
          <p>No favorite cities added.</p>
        ) : (
          <ul>
            {cities.map((city) => (
              <li key={city.id}>{city.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
)
}