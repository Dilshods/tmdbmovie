import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Button } from "@mantine/core";
import "./BasicModal.css";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { AiFillUnlock, AiOutlineFullscreen } from "react-icons/ai";
import { Select } from "@mantine/core";

function BasicModal({ date }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} size="auto">
        <div className="modal-box" key={date.id}>
          <div className="modalimage">
            <img
              src={"https://image.tmdb.org/t/p/w500" + date?.poster_path}
              alt="modalimage"
            />
          </div>
          <div className="modaltitle">
            <div className="modal-icon">
              <a href="#">
                <BiSolidDislike />
              </a>
              <a href="#">
                <BiSolidLike />
              </a>
            </div>
            <div className="modal-info">
              <h4>
                info
                <span>
                  <AiFillUnlock />
                </span>
              </h4>
            </div>
            <div className="main-title">
              <p>Primary?</p>
              <p>
                Added By <br /> <a href="#">WardenclyffeTower</a>
              </p>

              <p>
                Size <br />
                <span>123423</span>
              </p>

              <div>
                <Select
                  label="Your favorite language"
                  placeholder="Pick one"
                  searchable
                  nothingFound="No options"
                  data={["react", "veu", "angular", "javascript"]}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Group position="center">
        <Button onClick={open} className="modal_btn">
          <AiOutlineFullscreen />
          <span>Expend</span>
        </Button>
      </Group>
    </>
  );
}
export default BasicModal;
