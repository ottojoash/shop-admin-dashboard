// components/ChangeBannerForm.js
import React, { useState } from 'react';

const ChangeBannerForm = ({ onChangeBanner }) => {
  const [bannerFile, setBannerFile] = useState(null);

  const handleFileChange = (e) => {
    setBannerFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bannerFile) {
      const formData = new FormData();
      formData.append('banner', bannerFile);
      onChangeBanner(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="banner">
          Upload New Banner
        </label>
        <input
          type="file"
          id="banner"
          accept="image/*"
          onChange={handleFileChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Change Banner
        </button>
      </div>
    </form>
  );
};

export default ChangeBannerForm;
