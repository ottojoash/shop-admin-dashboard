import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Navbar />
        <main>
          <h2 className="text-2xl font-bold">Welcome to the Shop Admin Dashboard</h2>
        </main>
      </div>
    </div>
  );
}
