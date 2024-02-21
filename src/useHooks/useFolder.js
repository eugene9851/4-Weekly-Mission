import { useEffect, useState } from "react";
import { getLinkData } from "../APIs/FolderPageApi";

export const useFolder = () => {
  const [folder, setFolder] = useState([]);

  const fetchFolder = async (id) => {
    const links = await getLinkData(id);
    setFolder(links.data);
    console.log(`links: ${links}`);
  };

  useEffect(() => {
    fetchFolder();
  }, []);

  return { folder, fetchFolder };
};

//id를 받는 함수, 받지 않는 함수 따로 만들기
