const Announcements = () => {
    return (
      <div className="bg-white p-4 rounded-md">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Announcements</h1>
          <span className="text-xs text-gray-400">View All</span>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <div className="bg-SkyLight rounded-md p-4">
            <div className="flex items-center justify-between">
              <h2 className="font-medium">Parent-Teacher Conference</h2>
              <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                2025-01-05
              </span>
            </div>
            <p className="text-sm text-gray-400 mt-1">
              Parents and teachers will meet to discuss the progress of students. Please be punctual and ready to discuss academic growth.
            </p>
          </div>
          <div className="bg-PurpleLight rounded-md p-4">
            <div className="flex items-center justify-between">
              <h2 className="font-medium">Math Olympiad Workshop</h2>
              <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                2025-01-10
              </span>
            </div>
            <p className="text-sm text-gray-400 mt-1">
              A special workshop to prepare for the upcoming Math Olympiad. All interested students are invited to join.
            </p>
          </div>         
        </div>
      </div>
    );
  };
  
  export default Announcements;
  
  