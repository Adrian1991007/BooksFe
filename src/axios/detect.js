import axios from "axios";

export const detect = async (image, onSuccess) => {
  console.log("image", image);
  try {
    if (!image) return;

    const response = await axios.post(
      "http://localhost:5000/detect",
      { image: image },
      {
        headers: { "Content-Type": "application/json" }
      }
    );

    onSuccess(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
