const Header: React.FC = () => {
  return (
    <header className="bg-white p-4 sm:p-6">
      <div className="container mx-auto flex justify-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-wide">
          <span className="text-blue-400">Swift</span>
          <span className="text-red-400">Mind</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
