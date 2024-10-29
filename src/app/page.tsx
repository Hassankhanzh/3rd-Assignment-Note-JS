import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Image from "next/image";
// import About from "./about/page";
// import Contact from "./contact/page";
// import Gallery from "./gallery/page";
// import menu from "./menu/page";
// import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar/>

      <div className="flex justify-center w-full h-auto p-2">
        {/* Background container */}
        <div className="flex justify-between w-11/12 p-4 h-[500px]">

          {/* Image Card 1 */}
          <div className="w-2/5 bg-green-800 h-300 rounded-md shadow-md p-2">
            {/* <Image
              src="/path/to/your/image1.jpg"
              alt="Image 1"
              className="w-full h-auto object-cover"
              width={50}
              height={50}
            /> */}
            <p className="text-white mt-2">Image Card 1 Governors Initiative Program</p>
          </div>

          {/* Image Card 2 */}
          <div className="w-2/5 bg-lime-900 h-300 rounded-md shadow-md p-2">
            {/* <Image
              src="/path/to/your/image2.jpg"
              alt="Image 2"
              className="w-full h-auto object-cover"
              width={50}
              height={50}
            /> */}
            <p className="text-white mt-2">Image Card 2 Governors Initiative Program</p>
          </div>
        </div>
      </div>

      {/* the next 3 components */}

      <div className="flex justify-center w-full h-auto p-2">
        {/* Cyan background container */}
        <div className="flex justify-between w-11/12 p-4 h-[500px]">
          {/* Image Card 1 */}
          <div className="w-3/12 bg-lime-950 h-300 rounded-md shadow-md p-2">
            {/* <Image
              src="/path/to/your/image1.jpg"
              alt="Image 1"
              className="w-full h-auto object-cover"
              width={50}
              height={50}
            /> */}
            <p className="text-white mt-2">Image Card 1 Description</p>
          </div>

          {/* Image Card 2 */}
          <div className="w-3/12 bg-yellow-700 h-400 rounded-md shadow-md p-2">
            {/* <Image
              src="/path/to/your/image2.jpg"
              alt="Image 2"
              className="w-full h-auto object-cover"
              width={50}
              height={50}
            /> */}
            <p className="text-white mt-2">Image Card 2 Description</p>
          </div>

          {/* Image Card 3 */}
          <div className="w-3/12 bg-lime-600 h-400 rounded-md shadow-md p-2">
            {/* <Image
              src="/path/to/your/image1.jpg"
              alt="Image 3"
              className="w-full h-auto object-cover"
              width={50}
              height={50}
            /> */}
            <p className="text-white mt-2">Image Card 3 Description</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full h-auto p-2">
      <div className="flex justify-between w-11/12 p-4 h-[300px] backdrop-brightness-75 rounded-md"><h1>Quick Links</h1></div>
      </div>
      <Footer/>
    </div>
  );
}
