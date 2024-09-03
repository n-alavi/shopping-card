function Home() {
  return (
    <>
      <div
        className="bg-custom bg-cover bg-center h-screen"
        style={{
          backgroundImage:
            "url('https://wallpapers.com/images/featured/laptop-murjp1nk4lp1idlt.webp')",
        }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="text-white text-4xl font-bold">
            Welcome to My Website
          </h1>
        </div>
      </div>
    </>
  );
}

export default Home;
