import Header from "../layouts/Navbar";
import NotFound from "../public/notFound.json";
import Lottie from "lottie-react";

export default function Custom404() {
  return (
    <>
      <Header />
      <Lottie style={{ height: 600 }} animationData={NotFound}></Lottie>
      <div className="max-w-5xl max-h-4xl px-4 mx-auto p-4 text-center bg-gray-100 border-cyan-600 border rounded-lg shadow dark:bg-gray-800 dark:border-cyan-600">
        <p className="font-medium text-center text-gray-600 dark:text-slate-100">
          Таны хайсан илэрц олдоогүй тул та энэхүү холбоос дээр дарж нүүр хуудас луу шилжинэ үү
        </p>
      </div> 
    </>
  );
}
