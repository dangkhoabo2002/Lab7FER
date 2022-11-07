import React from "react";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/material/TextareaAutosize";

export default function Contact() {
  return (
    <div>
      <br></br>
      <h1>Contact Us</h1>
      <br></br>

      <form>
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Gmail" variant="outlined" />
        <TextField id="outlined-basic" label="Phone" variant="outlined" />
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          name="message"
          rows={4}
        />
        <Button
          className="sendContact"
          variant="contained"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </form>
    </div>
  );
}
