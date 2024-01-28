import Image from "next/image"; 
import Navbar from "./Components/Navbar";
import Booking from "./Components/Booking/Booking";

export default function Home() {
  return (
    <div className="h-screen">
     <div className="flex gap-6 text-center ml-[200px] translate-y-[140px]">
      < Booking /> 
      <div className=" col-span-3">
        <h1 >location</h1>
      </div>
     </div>
    </div>
  );
}
