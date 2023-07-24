import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setShowLoader(true);
    }, 1000);

    return () => {
      clearTimeout(loadingTimer);
    };
  }, []);

  return showLoader ? (
    <div className="Loader">
      <div className="spinner">Loading</div>
    </div>
  ) : null;
};

export default Loader;
