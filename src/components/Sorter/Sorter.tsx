import React, { useState } from "react";

const Sorter = () => {
  const [criteria, setCriteria] = useState("");

  const [sortedItems, setSortedItems] = useState([]);

  const handleCriteria = (event) => {
    const sortCriteria = event.target.value;
    setCriteria(sortCriteria);
  };

  if (data) {
    const = sortedProd(data.products, criteria)
    setSortedItems(sortedProd)
  }

  return (

  );
};

export default Sorter;
