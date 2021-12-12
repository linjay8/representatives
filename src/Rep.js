import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Chip } from "@mui/material";
import Modal from "./Modal";
import { useState } from "react";

export default function Rep(props) {
  const {
    name,
    party,
    phone,
    links,
    email,
    office,
    address,
    level,
    state,
    channels,
  } = props;
  let partyColor = "primary";
  if (party === "Democratic Party") {
    partyColor = "primary";
  } else if (party === "Republican Party") {
    partyColor = "error";
  } else {
    partyColor = "success";
  }
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };
  return (
    <Card
      raised={true}
      sx={{
        minWidth: 275,
        width: "100%",
        position: "relative",
        height: "100%",
        borderRadius: "20px",
      }}
    >
      <CardActionArea onClick={handleClickOpen} sx={{ height: "100%" }}>
        <CardContent sx={{}}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {office}
          </Typography>
          <Chip
            label={party}
            size="small"
            variant="outlined"
            sx={{ position: "absolute", top: 15, right: 15 }}
            color={partyColor}
          />
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2">
            {address.line1} <br />
            {address.line2}
            {address.line2 ? <br /> : null}
            {address.line3}
            {address.line3 ? <br /> : null}
            {address.city} {address.state} {address.zip}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Modal
        open={open}
        onClose={handleClose}
        name={name}
        phone={phone}
        links={links}
        email={email}
        level={level}
        state={state}
        channels={channels}
      />
    </Card>
  );
}
