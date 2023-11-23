import React from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 6,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleNameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  async function handleUpload(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", username);
    formData.append("description", description);
    formData.append("image", image);

    try {
      console.log(formData);
      const response = await axios.post("http://localhost:8000/upload",
        formData,{
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Button onClick={handleOpen}>
        <p>
          <CloudUploadIcon sx={{ color: "black" }} />
        </p>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleUpload} >
            <TextField
              value={username}
              onChange={handleNameChange}
              label="name"
              variant="outlined"
              className="mt-5"
            />

            <TextField
              value={description}
              label="description"
              sx={{ marginTop: "10px" }}
              variant="outlined"
              className="mt-5"
              onChange={handleDescriptionChange}
            />

            <input
              type="file"
              name="file"
              id="file"
              class="inputfile"
              className="mt-5"
              accept="image/*"
              onChange={handleImageChange}
            />
            <button
              type="submit"
              className="px-6 rounded-md mt-6 active:bg-[#a4314c] py-2 bg-[#FF3F6C] text-white font-semibold"
            >
              upload
            </button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
