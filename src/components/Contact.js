import React from "react";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [gmail, setGmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const createContact = async () => {
    const data = await (
      await fetch("https://6358d002c27556d289443e6e.mockapi.io/contact", {
        method: "POST",
        body: JSON.stringify({
          name,
          email: gmail,
          phone,
          message,
        }),
      })
    ).json();
  };

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
            createContact();
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
