import { styled } from "@mui/material/styles";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
  Tabs,
  Tab,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import ReactDom from "react-dom";
import { useState } from "react";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PublicIcon from "@mui/icons-material/Public";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function TabPanels(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
export default function Modal(props) {
  const BootstrapDialog = styled(Dialog)(() => ({
    "& .MuiPaper-root": {
      borderRadius: "20px",
    },
  }));
  const modalContainer = document.getElementById("modal-container");

  let { onClose, open, name, phone, links, email, level, state, channels } =
    props;
  const handleClose = () => {
    onClose();
  };
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let twitter, facebook;
  if (channels) {
    channels.forEach((channel) => {
      if (channel.type === "Facebook") {
        facebook = "https://www.facebook.com/" + channel.id;
      } else if (channel.type === "Twitter") {
        twitter = "https://www.twitter.com/" + channel.id;
      }
    });
  }

  return (
    <Dialog
      sx={{
        "& .MuiPaper-root": {
          borderRadius: "20px",
        },
      }}
      onClose={handleClose}
      open={open}
    >
      <DialogTitle sx={{ fontFamily: "Inter" }}>Contact {name}</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ fontFamily: "Inter" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Phone Number" value="1" />
                <Tab label="Email" value="2" />
                <Tab label="Other Links" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Typography mb={3}>{phone}</Typography>
              <Typography variant="h5">Sample Call Script</Typography>
              {level === "country" ? (
                <Typography>
                  I am a constituent of [REP. OR SEN.] {name} and I am calling
                  to urge them to vote IN FAVOR OF/AGAINST [LEGISLATION]. This
                  is a critical step needed to codify the right to abortion care
                  and reproductive freedom. We must stop abortion restrictions
                  that disproportionately harm those who already face barriers
                  to accessing health care, including women of color, lowwage
                  earners, LGBT+ people, people with disabilities. Many of your
                  constituents join the majority of Americans who support
                  reproductive rights. Stand up for the women of {state} and
                  vote IN FAVOR OF/AGAINST [LEGISLATION].
                </Typography>
              ) : (
                <Typography>
                  I am contacting {name} because we must take action in {state}
                  to defend critical access to abortion care. We must put new
                  protections in place that will hold the line on future attacks
                  and repeal dangerous restrictions that already threaten our
                  reproductive freedom. That is why I am URGING
                  AGAINST/SUPPORTING [LEGISLATION] and I urge {name} to do the
                  same.
                </Typography>
              )}
            </TabPanel>
            <TabPanel value="2">
              <Typography mb={3}>
                {email ? (
                  <Link href={`mailto:${email}`}>{email}</Link>
                ) : (
                  "No email listed."
                )}
              </Typography>
              {email ? (
                <>
                  <Typography variant="h5">Sample Email Template</Typography>
                  {level === "country" ? (
                    <Typography>
                      I am a constituent of [REP. OR SEN.] {name} and I am
                      emailing to urge them to vote IN FAVOR OF/AGAINST
                      [LEGISLATION]. This is a critical step needed to codify
                      the right to abortion care and reproductive freedom. We
                      must stop abortion restrictions that disproportionately
                      harm those who already face barriers to accessing health
                      care, including women of color, lowwage earners, LGBT+
                      people, people with disabilities. Many of your
                      constituents join the majority of Americans who support
                      reproductive rights. Stand up for the women of {state} and
                      vote IN FAVOR OF/AGAINST [LEGISLATION].
                    </Typography>
                  ) : (
                    <Typography>
                      I am contacting {name} because we must take action in{" "}
                      {state} to defend critical access to abortion care. We
                      must put new protections in place that will hold the line
                      on future attacks and repeal dangerous restrictions that
                      already threaten our reproductive freedom. That is why I
                      am URGING AGAINST/SUPPORTING [LEGISLATION] and I urge{" "}
                      {name} to do the same.
                    </Typography>
                  )}
                </>
              ) : null}
            </TabPanel>
            <TabPanel value="3">
              {facebook ? (
                <Link href={facebook} target={"_blank"}>
                  <IconButton aria-label="twitter" style={{}}>
                    <FacebookIcon />
                  </IconButton>
                </Link>
              ) : null}
              {twitter ? (
                <Link href={twitter} target={"_blank"}>
                  <IconButton aria-label="twitter" style={{}}>
                    <TwitterIcon />
                  </IconButton>
                </Link>
              ) : null}
              {links.map((link) => {
                return (
                  <Link href={link} target={"_blank"}>
                    <IconButton aria-label="website" style={{}}>
                      <PublicIcon />
                    </IconButton>
                  </Link>
                );
              })}
            </TabPanel>
          </TabContext>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
