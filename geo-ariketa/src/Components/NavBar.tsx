import { Settings } from "lucide-react";
import UserSelector from "./UserSelector";

export default function NavBar() {
  return(
    <div className="sticky top-0 w-full h-12 bg-gray-300 grid grid-cols-4 *:my-auto">
      <div className="text-[28px] indent-10">
        WPlace Data
      </div>
      <div className="col-span-2 flex justify-center">
        <UserSelector/>
      </div>
      <div className="flex justify-end mr-5">
        <div onClick={() => window.alert("On development.")} className="hover:text-gray-700 cursor-pointer">
          <Settings size={28}/>
        </div>
      </div>
    </div>
  )
}