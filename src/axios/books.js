import axios from "axios";

export const getBooks = async (params) => {
  try {
    console.log("fetch Books started with params", params);
    const response = await axios.get("http://ec2-54-91-36-145.compute-1.amazonaws.com:5000/books", {
      headers: { "Content-Type": "application/json" },
      params: params
    });
    console.log("books response", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getSubscribers = async () => {
  try {
    console.log("fetch Subscribers started");
    const response = await axios.get(
      "http://ec2-54-91-36-145.compute-1.amazonaws.com:5000/subscribers",
      {
        headers: { "Content-Type": "application/json" }
      }
    );
    console.log("subscribers response", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const addSubscriber = async (params) => {
  console.log("params", params);
  try {
    console.log("Add new subscriber with params", params);
    const response = await axios.post(
      `https://7lhedplojb.execute-api.us-east-1.amazonaws.com/v1/subscriber/${params}`,
      {
        headers: { "Content-Type": "application/json" },
        data: {
          email: params
        }
      }
    );
    console.log("subscriber response", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const addBook = async (formData) => {
  try {
    console.log("Add new book", formData);
    const response = await axios.post(
      "http://ec2-54-91-36-145.compute-1.amazonaws.com:5000/books",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    );
    console.log("add new book response", response);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
