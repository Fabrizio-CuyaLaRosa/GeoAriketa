import { PanelRightClose, PanelRightOpen } from "lucide-react";
import { createContext, useContext, useState, type JSX } from "react";

const openContext = createContext<boolean | undefined>(undefined);
export default function SideBar({children} : {children? : React.ReactNode}) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <openContext.Provider value={open}>
      <div className="bg-stone-400">
        <div className="bg-stone-800 h-[50px] flex flex-col justify-center">
          <div className="mx-2 hover:text-orange-500" onClick={() => setOpen(!open)}>
            {open ?
              <PanelRightOpen size={30}/>
              :
              <PanelRightClose size={30}/>
            }
          </div>
        </div>
        <div>
          {children}
        </div>
      </div>
    </openContext.Provider>
  )
}

export const SideBarItem = ({icon, name, location} : {
  icon : JSX.Element;
  name : string;
  location : string;
}) => {
  const open = useContext(openContext);
  return (
    <div className="m-2 text-orange-600 flex" onClick={() => console.log(location)}>
      <div>{icon}</div>
      <div className="indent-2">{open && name}</div>
    </div>
  )
}