export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-white to-gray-100">
      <div className="w-full max-w-md mx-auto text-center">
        <h1 className="text-4xl font-bold mb-3 text-primary">의약품 검색</h1>
        <p className="text-gray-500 mb-8">필요한 약을 빠르고 쉽게 찾아보세요</p>
        <div className="relative">
          <div className="flex flex-col gap-4">
            <div className="relative">
              <input
                type="text"
                name="search"
                placeholder="약 이름, 또는 증상을 입력하세요"
                className="search-input"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary transition-colors">
                <span className="sr-only">검색</span>
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
            >
              검색하기
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
