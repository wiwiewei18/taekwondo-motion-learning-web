import { useState } from "react";

const useModal = () => {
  const [modal, setModal] = useState(false);

  const onSwitchModalState = () => setModal((prev) => !prev);

  return { modal, onSwitchModalState };
};

export default useModal;
