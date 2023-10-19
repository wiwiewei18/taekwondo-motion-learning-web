import "./App.css";
import TurningKick from "./assets/turning-kick.png";
import Scanning from "./assets/scanning.png";
import Steganography from "./assets/steganography.png";

import Background from "./components/Background";
import ButtonIcon from "./components/ButtonIcon";
import Logo from "./components/Logo";
import PopUp from "./components/PopUp";
import MovementIdentificationForm from "./components/MovementIdentificationForm";

import useModal from "./hooks/use-modal";
import useUploadImage from "./hooks/use-upload-image";
import useSubmitMIForm from "./hooks/use-submit-mi-form";

function App() {
  const {
    modal: isMIModalOpen,
    handleModalOpen: handleMIModalOpen,
    handleModalClose: handleMIModalClose,
  } = useModal();

  const {
    modal: isSFMModalOpen,
    handleModalOpen: handleSFMModalOpen,
    handleModalClose: handleSFMModalClose,
  } = useModal();

  const {
    image,
    imageInputRef,
    handleUploadButtonClick,
    handleImageUpload,
    handleImageDrop,
    handleImageDragOver,
    handleImageClear,
  } = useUploadImage();

  const {
    isLoading: isMIFormLoading,
    result: MIFormResult,
    handleFormSubmit: handleMIFormSubmit,
    handleResultClear: handleMIFormResultClear,
  } = useSubmitMIForm();

  return (
    <Background>
      <div className="container">
        <section className="left">
          <img src={TurningKick} alt="turning kick" />
        </section>
        <section className="right">
          <Logo />
          <ButtonIcon
            image={Scanning}
            imageAlt="scanning icon"
            onClick={handleMIModalOpen}
          >
            Movement Identification
          </ButtonIcon>
          <ButtonIcon
            image={Steganography}
            imageAlt="steganography icon"
            onClick={handleSFMModalOpen}
            disabled={true}
          >
            Search for Movement
          </ButtonIcon>
        </section>
      </div>
      <PopUp
        isModalShow={isMIModalOpen}
        onModalClose={() => {
          handleMIModalClose();
          handleMIFormResultClear();
          handleImageClear();
        }}
      >
        <MovementIdentificationForm
          image={image}
          imageInputRef={imageInputRef}
          isLoading={isMIFormLoading}
          result={MIFormResult}
          onUploadButtonClick={handleUploadButtonClick}
          onImageUpload={handleImageUpload}
          onImageDrop={handleImageDrop}
          onImageDragOver={handleImageDragOver}
          onImageClear={handleImageClear}
          onSubmit={(event) => handleMIFormSubmit(event, image)}
          onResultClear={handleMIFormResultClear}
        />
      </PopUp>
      <PopUp isModalShow={isSFMModalOpen} onClick={handleSFMModalClose}>
        Inprogress..
      </PopUp>
    </Background>
  );
}

export default App;
