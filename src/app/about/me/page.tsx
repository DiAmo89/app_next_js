export default function Me() {
  return (
    <section className="flex justify-center min-h-screen bg-linear-to-br from-green-50 via-white to-green-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12 px-4">
      <div
        className="
          p-6
          w-full sm:w-105 md:w-175 lg:w-190 xl:w-200
          bg-white dark:bg-slate-800 border-2 border-green-400 dark:border-green-700 rounded-2xl shadow-2xl dark:shadow-slate-900/50
        "
      >
        <div
          className="
            grid
            grid-cols-1 md:grid-cols-2
            grid-rows-auto md:grid-rows-6
            gap-4 md:gap-6
            w-full
          "
        >
          {/* Avatar */}
          <div className="bg-linear-to-br from-green-100 to-green-200 dark:from-slate-700 dark:to-slate-600 md:row-span-3 rounded-2xl flex justify-center items-center p-4 border border-green-300 dark:border-green-700">
            <img
              className="object-contain w-40 h-40 md:w-full md:h-full md:scale-110 rounded-lg"
              src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png"
              alt="avatar"
            />
          </div>

          {/* Description */}
          <div className="bg-linear-to-br from-green-50 to-green-100 dark:from-slate-700 dark:to-slate-600 md:row-span-4 rounded-2xl p-4 border border-green-300 dark:border-green-700">
            <h3 className="text-center font-bold text-lg md:text-xl mb-2 text-black dark:text-white">
              Fullstack Developer
            </h3>
            <p className="font-medium italic text-sm md:text-base text-justify text-gray-700 dark:text-gray-300">
              I build scalable, attractive, and efficient websites that not only
              look great but also help increase your sales and grow your
              business. Experienced in front-end and back-end development,
              creating complete solutions from UI to server and database.
            </p>
          </div>

          {/* Name */}
          <div className="bg-linear-to-r from-green-500 to-green-600 dark:from-green-700 dark:to-green-800 md:row-span-1 rounded-2xl flex justify-center items-center shadow-lg">
            <h2 className="font-bold text-2xl md:text-3xl text-white">
              Djustin Sun
            </h2>
          </div>

          {/* Contact */}
          <div className="bg-linear-to-br from-green-50 to-green-100 dark:from-slate-700 dark:to-slate-600 md:row-span-2 md:col-span-2 rounded-2xl p-4 border border-green-300 dark:border-green-700">
            <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-4 h-full">
              {/* QR */}
              <div className="flex justify-center items-center bg-white dark:bg-slate-800 rounded-lg p-2 border border-green-200 dark:border-green-700/50">
                <img
                  className="object-contain max-h-32 sm:max-h-full"
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
                  alt="QR code"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center gap-3">
                <p className="font-bold text-gray-800 dark:text-gray-200">
                  📬 Email:
                  <span className="block text-green-600 dark:text-green-400 font-extrabold break-all mt-1">
                    hesore9553@elafans.com
                  </span>
                </p>
                <p className="font-bold text-gray-800 dark:text-gray-200">
                  📱 WhatsApp:
                  <span className="block text-green-600 dark:text-green-400 font-extrabold mt-1">
                    +49 1577 7952010
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
