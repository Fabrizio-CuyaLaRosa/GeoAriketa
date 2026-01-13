import { useEffect, useState } from "react"

export default function MainPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("data.json")
    .then(res => {
      return res.json();
    })
    .then(data => {
      setData(data)
    })
    .catch(_err => {
      return;
    });
  }, [])

  useEffect(() => {
    if (data.length !== 0) {
      console.log(data);
    }
  }, [data])
  return(
    <div className="bg-gray-500 w-full h-1/2">
    </div>
  )
}