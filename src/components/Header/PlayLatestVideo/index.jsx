import { Modal } from 'flowbite-react';
import React from 'react';
import PlayVideoIcon from '../../../assets/images/Icons/svg/PlayVideoIcon';

const PlayLatestVideo = ({ size = '4xl' }) => {
  const [open, setOpen] = React.useState(false);
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center space-x-1"
      >
        <PlayVideoIcon />
        <span className="text-white font-semibold">Latest Video</span>
      </button>
      <Modal
        dismissible={true}
        show={open}
        onClose={onClose}
        size={size}
        position="center"
      >
        <iframe
          width="1350"
          height="480"
          src="https://www.youtube.com/embed/lUHcnoIA43s"
          title="Yvan Buravan - GUSAAKAARA ft Chorale de Kigali (Official Video)"
          className="w-full max-w-4xl rounded-md mt-4"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </Modal>
    </>
  );
};

export default PlayLatestVideo;
