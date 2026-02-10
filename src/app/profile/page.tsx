import { getServerSession } from "next-auth";
import Image from "next/image";

const Profile = async () => {
  const session = await getServerSession();
  if (!session) {
    return (
      <div className="min-h-screen bg-linear-to-br from-green-50 to-green-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center px-4">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl dark:shadow-slate-900/50 p-8 text-center border border-green-100 dark:border-green-900/30">
          <p className="text-lg font-semibold text-gray-800 dark:text-white">
            🔒 Please sign in to view your profile
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-green-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12 px-4 flex items-center justify-center">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl dark:shadow-slate-900/50 p-8 border border-green-100 dark:border-green-900/30 max-w-md w-full text-center">
        <div className="mb-6">
          <Image
            src={session.user?.image || ""}
            alt={session.user?.name || ""}
            width={150}
            height={150}
            unoptimized
            className="w-32 h-32 mx-auto rounded-full border-4 border-green-400 dark:border-green-600 shadow-lg"
          />
        </div>
        <h1 className="text-3xl font-bold text-black dark:text-white mb-3">
          {session.user?.name}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {session.user?.email}
        </p>
        <div className="pt-4 border-t border-green-200 dark:border-green-900/30 mt-6">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Welcome to your profile
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
