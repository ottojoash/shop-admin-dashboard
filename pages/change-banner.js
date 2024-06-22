// pages/ChangeBanner.js
// import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ChangeBannerForm from '../components/ChangeBannerForm';
import { changeBanner } from '../utils/fetchMethods';

export default function ChangeBanner() {
  const handleChangeBanner = async (bannerData) => {
    try {
      await changeBanner(bannerData);
      // Handle success, e.g., navigate to home page
    } catch (error) {
      console.error('Failed to change banner:', error);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6 bg-gray-100 ml-64">
        {/* <Navbar /> */}
        <main className="mt-4 mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold mb-4">Change Banner</h2>
          <div className="bg-white shadow-md rounded-lg p-4">
            <ChangeBannerForm onChangeBanner={handleChangeBanner} />
          </div>
        </main>
      </div>
    </div>
  );
}
