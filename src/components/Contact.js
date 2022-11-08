import React from "react";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useState } from "react";
import { addContact } from "../features/ContactsAction";
import { useDispatch } from "react-redux";

export default function Contact() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [gmail, setGmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div>
      <br></br>
      <h1>Contact Us</h1>
      <br></br>

      <form>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Gmail"
          variant="outlined"
          value={gmail}
          onChange={(event) => {
            setGmail(event.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          value={phone}
          onChange={(event) => {
            setPhone(event.target.value);
          }}
        />
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          name="message"
          rows={4}
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
        <Button
          onClick={() => {
            dispatch(
              addContact({
                id: 0,
                name: name,
                gmail: gmail,
                phone: phone,
                message: message,
              })
            );
          }}
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
