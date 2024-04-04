import { useEffect, useState } from "react";
import { getFolderName } from "../pages/api/FolderPageApi";

export const useFolderNames = () => {
  const [folderNames, setFolderNames] = useState([]);

  const fetchFile = async () => {
    const { data } = await getFolderName();
    setFolderNames(data);
  };

  useEffect(() => {
    fetchFile();
  }, []);

  return { folderNames };
};
