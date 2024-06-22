import { useState, useEffect } from 'react';
import { fetchUsers, removeUser } from '../utils/fetchMethods';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import UserList from '../components/UserList';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const usersData = await fetchUsers();
        setUsers(usersData);
      } catch (error) {
        console.error('Failed to load users:', error);
      }
    };

    loadUsers();
  }, []);

  const handleRemoveUser = async (userId) => {
    try {
      await removeUser(userId);
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error('Failed to remove user:', error);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div className="flex-grow p-6 bg-gray-100 mt-16 ml-64">
        <Navbar />
        <main className="mt-4">
          <h2 className="text-2xl font-bold">Users</h2>
          <UserList users={users} onRemoveUser={handleRemoveUser} />
        </main>
      </div>
    </div>
  );
}
