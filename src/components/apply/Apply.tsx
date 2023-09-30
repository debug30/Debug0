//redux
import { useDispatch, useSelector } from "react-redux";
import {
  openModal,
  closeModal,
  chooseRole,
} from "../../redux/register/registerActions";
//container
import Register from "../../container/form/Register";
//utility
import Modal from "../../utils/ui/Modal";
//assets
import contributorIcon from "../../assets/images/contributor.svg";
import maintainerIcon from "../../assets/images/maintainer.svg";

export default function Apply() {
  const { isModalOpen } = useSelector((state: any) => state.register);
  const dispatch = useDispatch();

  const handleOpenRegisterForm = () => {
    dispatch(openModal());
  };

  const handleCloseRegisterForm = () => {
    dispatch(closeModal());
    dispatch(chooseRole(""));
  };

  return (
    <div className="w-full flex flex-col items-center justify-center mt-16">
      <Modal show={isModalOpen} onCancel={handleCloseRegisterForm}>
        <Register />
      </Modal>
      <div className="bg-[#7b7bba] w-[90%] md:w-[40rem] rounded-[26px] overflow-hidden flex flex-col md:flex-row">
        <div className="w-full h-full bg-gradient-to-r from-[#478EEE] to-[#9AFFFF] p-8 rounded-[0_26px_26px_26px] md:rounded-[0_26px_26px_0]">
          <div className="flex justify-center mb-4 h-[50px]">
            <img src={maintainerIcon} alt="maintainer-icon" />
          </div>
          <h3 className="text-[1.2rem] font-bold uppercase text-center mb-3">
            PROJECT MAINTAINER
          </h3>
          <p className="text-[0.9rem] leading-5">
            Register as maintainer to list your project for contributing.
          </p>
        </div>
        <div className="p-8">
          <div className="flex justify-center mb-4 h-[50px]">
            <img src={contributorIcon} alt="contributor-icon" />
          </div>
          <h3 className="text-[1.2rem] font-bold uppercase text-center mb-3">
            PROJECT CONTRIBUTOR
          </h3>
          <p className="text-[0.9rem] leading-5">
            Register as a contributor to contribute to various projects.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <button
          className="outline-none border-none bg-gradient-to-r from-[#9AFFFF] to-[#478EEE] md:px-32 px-20 md:py-2 py-4 text-[1.2rem] md:text-[1rem] rounded-[8px] shadow-custom"
          onClick={handleOpenRegisterForm}
        >
          Apply
        </button>
      </div>
    </div>
  );
}
