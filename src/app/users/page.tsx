import { User } from "@/common/types/User";
import { revalidatePath } from "next/cache";

async function fetchUsers(): Promise<User[]> {
  const res = await fetch("https://api.escuelajs.co/api/v1/users", {
    next: { revalidate: 60 },
    // что это значит
  });
  return res.json();
}

const UsersPage = async () => {
  const users = await fetchUsers();
  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-green-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-black dark:text-white mb-4">
            Users
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Meet our community members
          </p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {users.map((user) => (
            <li
              key={user.id}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl dark:shadow-slate-900/50 p-5 border border-green-100 dark:border-green-900/30 hover:border-green-400 dark:hover:border-green-600 transition-all duration-300 text-center group"
            >
              <div className="w-12 h-12 mx-auto mb-3 bg-linear-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {user.name?.charAt(0).toUpperCase()}
              </div>
              <p className="font-semibold text-gray-800 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                {user.name}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 truncate">
                {user.email}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UsersPage;
