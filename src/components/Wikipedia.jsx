async function Wikipedia({ city }) {
    return (
      <div className="container">
        <iframe
          src={`https://wikipedia.org/wiki/${city}`}
          className="iframe-right"
          title="Wikipedia Page"
        ></iframe>
      </div>
    );
  }
  
  export default Wikipedia;
  