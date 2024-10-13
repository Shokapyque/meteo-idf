async function Wikipedia({ city }) {
    return (
      <div className="container">
        <iframe
          src={`https://fr.wikipedia.org/wiki/${city}`}
          className="iframe-right"
          title="Wikipedia Page"
        ></iframe>
      </div>
    );
  }
  
  export default Wikipedia;
  