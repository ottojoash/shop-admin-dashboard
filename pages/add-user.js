import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import AddUserForm from '../components/AddUserForm';
import { addUser } from '../utils/fetchMethods';

export default function AddUser() {
  const handleAddUser = async (userData) => {
    try {
      await addUser(userData);
      // Handle success, e.g., navigate to users page
    } catch (error) {
      console.error('Failed to add user:', error);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div className="flex-grow p-6 bg-gray-100 mt-16 ml-64">
        <Navbar />
        <main className="mt-4">
          <h2 className="text-2xl font-bold">Add User</h2>
          <AddUserForm onAddUser={handleAddUser} />
        </main>
      </div>
    </div>
  );
}
