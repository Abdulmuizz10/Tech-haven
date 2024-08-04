import React, { useState, useEffect } from "react";
import RelatedCollectionsCard from "./RelatedCollectionsCard";

const RelatedCollections = ({ result, Collections, id, addToCart }) => {
  const [sameCollections, setSameCollections] = useState([]);

  useEffect(() => {
    const same = Collections.filter((collection) => {
      return collection.categories === result.categories;
    });

    setSameCollections(same);
  }, [id, result]);

  console.log(sameCollections);

  return (
    <div>
      {sameCollections && (
        <RelatedCollectionsCard
          sameCollections={sameCollections}
          id={id}
          addToCart={addToCart}
        />
      )}
    </div>
  );
};

export default RelatedCollections;
