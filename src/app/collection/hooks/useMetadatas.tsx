import { useState } from "react";

export function useMetadata() {
  const [description, setDescription] = useState<string>(
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  );

  const [image, setImage] = useState<string>(
    "/images/01.png"
  );

  const [nftname, setName] = useState<string>(
    "Coretoshi #2675"
  );

  const [collectionName, setCollectionName] = useState<string>(
    "Coretoshi"
  );


  return { description, setDescription, image, setImage, nftname, setName, collectionName, setCollectionName };
}
