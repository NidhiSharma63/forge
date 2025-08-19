import useTemplate from "../../hooks/useTemplate";
const TemplateHomeScreen = () => {
  const { handleLogout, handleTemplate, handleEditor } = useTemplate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
          {/* Logo */}
          <h1 className="text-xl font-bold text-gray-800">Forge</h1>

          {/* Logout Button */}
          <div className="flex gap-3">
            <button
              onClick={handleLogout}
              className="text-gray-700 text-sm font-medium px-4 py-2 rounded-lg border border-gray-300 bg-transparent hover:bg-gray-100 transition"
            >
              Logout
            </button>
            <button
              onClick={handleTemplate}
              className="bg-blue-600  text-sm font-medium hover:bg-blue-700 text-white  py-2 px-4 rounded-lg shadow-md transition-colors"
            >
              {" "}
              Select Template
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-3 flex-col">
          <h2 className="text-xl font-semibold text-gray-700">
            you don't have templates please create templates
          </h2>
          <button
            onClick={handleEditor}
            className="bg-blue-600 w-fit text-sm font-medium hover:bg-blue-700 text-white  py-2 px-4 rounded-lg shadow-md transition-colors"
          >
            {" "}
            Create Template
          </button>
        </div>
        {/* Your content here */}
      </main>
    </div>
  );
};

export default TemplateHomeScreen;
