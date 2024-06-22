const UserList = ({ users, onRemoveUser }) => (
    <ul className="space-y-4">
      {users.map((user) => (
        <li key={user.id} className="flex justify-between items-center">
          {user.name}
          <button
            className="text-red-500 hover:underline"
            onClick={() => onRemoveUser(user.id)}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
  
  export default UserList;
  