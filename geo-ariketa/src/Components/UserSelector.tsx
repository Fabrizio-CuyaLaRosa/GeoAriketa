import { useContext, type SyntheticEvent } from "react"
import { DataContext } from "../pages/Page"

export default function UserSelector() {
  const dataContext = useContext(DataContext);
  if (!dataContext?.currentUser) return;

  const handleChange = (event: SyntheticEvent) => {
    const value = parseInt((event.currentTarget as HTMLSelectElement).value);
    const user = dataContext.data.find(user => user.id == value);
    dataContext.setCurrentUser(user);
  }
  
  return (
    <select onChange={handleChange} value={dataContext.currentUser.id} className=" h-[40px] w-1/2 border border-black rounded-lg">
      {dataContext.data.map(userData =>
        <option value={userData.id} key={userData.id}>
          {userData.name}
        </option>
      )}
    </select>
  )
}