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
  const { modal: isMIModalShow, onSwitchModalState: onSwitchMIModalState } =
    useModal();
  const { modal: isSFMModalShow, onSwitchModalState: onSwitchSFMModalState } =
    useModal();
  const {
    image,
    imageInputRef,
    onClickUploadButton,
    onUploadImage,
    onDropImage,
    onDragOverImage,
    onClearImage,
  } = useUploadImage();
  const { loading, result, onSubmit, onClearResult } = useSubmitMIForm({
    image,
  });

  return (
    <Background>
      <div className="container">
        <section className="left">
          <img src={TurningKick} />
        </section>
        <section className="right">
          <Logo />
          <ButtonIcon
            image={Scanning}
            imageAlt="scanning icon"
            onClick={onSwitchMIModalState}
          >
            Movement Identification
          </ButtonIcon>
          <ButtonIcon
            image={Steganography}
            imageAlt="steganography icon"
            onClick={onSwitchSFMModalState}
            disabled={true}
          >
            Search for Movement
          </ButtonIcon>
        </section>
      </div>
      <PopUp
        isModalShow={isMIModalShow}
        onClick={() => {
          onSwitchMIModalState();
          onClearResult();
          onClearImage();
        }}
      >
        <MovementIdentificationForm
          image={image}
          imageInputRef={imageInputRef}
          onClickUploadButton={onClickUploadButton}
          onUploadImage={onUploadImage}
          onDropImage={onDropImage}
          onDragOverImage={onDragOverImage}
          onClearImage={onClearImage}
          loading={loading}
          result={result}
          onSubmit={onSubmit}
          onClearResult={onClearResult}
        />
      </PopUp>
      <PopUp isModalShow={isSFMModalShow} onClick={onSwitchSFMModalState}>
        Inprogress..
      </PopUp>
    </Background>
  );
}

export default App;
