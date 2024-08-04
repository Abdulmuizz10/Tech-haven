import React, { useState, useEffect } from "react";
import CollectionDetailsResult from "../../components/CollectionDetailsResult";
import RelatedCollections from "../../components/RelatedCollections";

const CollectionDetailsSection = ({ Collections, addToCart, id }) => {
  const [result, setResult] = useState({});
  useEffect(() => {
    window.scrollTo(0, 0);
    const collectionResult = Collections.find((collection) => {
      return collection.name === id;
    });

    setResult(collectionResult);
  }, [id]);

  return (
    <section className="padding">
      <div className="container">
        <CollectionDetailsResult
          Collections={Collections}
          addToCart={addToCart}
          result={result}
        />

        <div className="mt-20 mb-3">
          <h2 className="head-text">Related Collections</h2>
        </div>

        <RelatedCollections
          result={result}
          Collections={Collections}
          id={id}
          addToCart={addToCart}
        />
      </div>
    </section>
  );
};

export default CollectionDetailsSection;
