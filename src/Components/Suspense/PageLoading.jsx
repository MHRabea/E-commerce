import React from "react";
import pageLoadingGif from "../Assets/page_loading_gif.gif";

const PageLoading = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <img src={pageLoadingGif} alt="Loading..." />
    </div>
  );
};

export default PageLoading;
