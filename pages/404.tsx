import Header from "../layouts/Navbar";

export default function Custom404() {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center h-screen mx-2 my-2 overflow-hidden ">
        <div className="px-6 py-4 rounded-lg  shadow-lg">
          <div className="mb-4 text-xl font-bold">
            404 - Хайсан илэрц олсдсонгүй 😅
          </div>
        </div>
      </div>
    </>
  );
}
