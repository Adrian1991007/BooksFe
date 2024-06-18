import Webcam from "react-webcam";
import { Button, Flex } from "theme-ui";

const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: "user"
};

const WebcamCapture = ({ onUploadImage, onClose }) => {
  return (
    <Webcam
      audio={false}
      height={400}
      screenshotFormat="image/jpeg"
      width={400}
      videoConstraints={videoConstraints}>
      {({ getScreenshot }) => (
        <Flex mt={3} sx={{ justifyContent: "center" }}>
          <Button
            sx={{ bg: "red" }}
            onClick={() => {
              onUploadImage(getScreenshot());
              onClose();
            }}>
            Identify
          </Button>

          <Button onClick={onClose} ml={3}>
            Close
          </Button>
        </Flex>
      )}
    </Webcam>
  );
};

export default WebcamCapture;
