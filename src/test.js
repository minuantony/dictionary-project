if (props) {
  <section>
    <div>
      {props.photos.map(function (photo, index) {
        return (
          <div key={index}>
            <img src={photo.src.medium} alt={props.keyword} />
          </div>
        );
      })}
    </div>
  </section>;
} else {
  return null;
}

if (props.photos) {
  return (
    <section>
      <div>
        <div>
          <img
            src={props.photos.src.medium}
            alt={props.keyword}
            width="540"
            height="350"
          />
        </div>
      </div>
    </section>
  );
} else {
  return null;
}
