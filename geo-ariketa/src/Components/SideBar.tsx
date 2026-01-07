import { PanelRightClose, PanelRightOpen } from "lucide-react";
import { createContext, useContext, useState, type JSX } from "react";
import { useNavigate } from "react-router-dom";

const openContext = createContext<boolean | undefined>(undefined);
export default function SideBar({children} : {children? : React.ReactNode}) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <openContext.Provider value={open}>
      <div className="bg-stone-400 select-none">
        <div className="bg-stone-800 h-[50px] flex flex-col justify-center">
          <div className="mx-2 hover:text-orange-500 cursor-pointer" onClick={() => setOpen(!open)}>
            {open ?
              <div className="flex justify-between">
                <PanelRightOpen size={30}/>
                <p className="my-auto text-lg">SideBar</p>
              </div>
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
  const navigate = useNavigate();

  const goTo = () => {
    navigate(location);
  }

  return (
    <div className="m-2 text-orange-600 flex hover:text-orange-500 cursor-pointer" onClick={goTo}>
      <div>{icon}</div>
      {open &&
        <div className="indent-2">{name}</div>
      }
    </div>
  )
}