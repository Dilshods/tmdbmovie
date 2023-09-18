import React from "react";
import Youtube from "react-youtube";
import { FaPlay } from "react-icons/fa";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import moment from "moment";

function CategoryModal({ item, id }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Youtube" centered>
        <>
          <div
            key={id}
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-transparent outline-none focus:outline-none">
                <>
                  <Youtube
                    videoId={item?.key}
                    className="w-[50vh] h-[50vh] md:w-[100vh] md:h-[60vh]"
                    opts={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black">
            <p>{item?.name ? item?.type : ""}</p>
            <p>{moment(item?.published_at).format("DD MMM  YYYY")}</p>
          </div>
        </>
      </Modal>
      <span className="bg-none" onClick={open}>
        <span className="glyphicons_v2 play">
          <FaPlay />
        </span>{" "}
        Play Trailer
      </span>
    </>
  );
}
export default CategoryModal;
