import { useEffect, useState } from "react";
import { getFolderName, getLinkData } from "../APIs/FolderPageApi";

export const useFiles = () => {
  const [folder, setFolder] = useState([]);
  // const [currentMenu, setCurrentMEnu]
  // useState({
  //   name: '전체',
  // id: 'all' })
  // id가 보여져야 될 이름이 되지 않도록!

  const fetchFile = async () => {
    const { data } = await getFolderName();
    setFolder(data);
  };

  useEffect(() => {
    fetchFile();
  }, []);

  return folder;
};
