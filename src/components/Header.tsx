const Header: React.FC = () => {
  return (
    <header className="bg-white p-4 sm:p-6">
      <div className="container mx-auto flex items-center justify-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-400 tracking-wide">Swift</h1>
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-red-400 tracking-wide">Mind</h1>
      </div>
    </header>
  );
};

export default Header;
