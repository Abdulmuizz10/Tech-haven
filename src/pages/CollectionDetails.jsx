import React from "react";
import { useParams } from "react-router-dom";
import CollectionDetailsSection from "../sections/collection-details-sections/CollectionDetailsSection";

const CollectionDetails = ({ addToCart, Collections }) => {
  const { id } = useParams();
  return (
    <main className="max-sm:py-24">
      <CollectionDetailsSection
        Collections={Collections}
        addToCart={addToCart}
        id={id}
      />
    </main>
  );
};

export default CollectionDetails;
