import { useState } from "react";

const useModal = () => {
  const [modal, setModal] = useState(false);

  const handleModalOpen = () => setModal(true);
  const handleModalClose = () => setModal(false);

  return { modal, handleModalOpen, handleModalClose };
};

export default useModal;
