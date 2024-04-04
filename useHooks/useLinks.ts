import { useEffect, useState } from "react";
import { getFolderById } from "../pages/api/FolderPageApi";

export type LinkType = {
  id: number;
  image_source: string;
  created_at: number;
  description: string;
  url: string;
  title: string;
};

export const useLinks = () => {
  const [links, setLinks] = useState<LinkType[]>([]);

  const fetchAllLinks = async () => {
    const { data } = await getFolderById();
    setLinks(data);
  };

  const fetchLinkById = async (id?: number) => {
    const { data } = await getFolderById(id);
    setLinks(data);
  };

  const handleLinks = (id?: number) => {
    if (id) {
      fetchLinkById(id);
    } else {
      fetchAllLinks();
    }
  };

  useEffect(() => {
    fetchAllLinks();
  }, []);

  return {
    handleLinks,
    links,
  };
};
