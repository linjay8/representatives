import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Minors(props) {
  const {
    age,
    parentalConReq,
    parentalNotifReq,
    parentReq,
    judBypassAvail,
    allowMinorConsent,
  } = props;
  let ageText = "";
  if (age) {
    ageText = `These restrictions apply to minors under the age of ${age}.`;
  } else {
    ageText =
      "There are no restrictions on minors' abortions currently being enforced.";
  }
  let parentalConText = "";
  if (parentalConReq === true) {
    parentalConText =
      "A parent or parents must give permission for the minor to have an abortion.";
  }
  let parentalNotifText = "";
  if (parentalNotifReq === true) {
    parentalNotifText =
      "A parent or parents must be told beforehand of the minor's decision to have an abortion.";
  }
  let parentText = "";
  if (parentReq === 1) {
    parentText = "One parent must be notified.";
  } else if (parentReq === 2) {
    parentText = "Both parents must be notified.";
  }
  let judBypassAvailText = "";
  if (judBypassAvail === true) {
    judBypassAvailText =
      "A judge can excuse a minor from the required parental consent and/or notification.";
  }
  let allowMinorConsentText = "";
  if (allowMinorConsent === true) {
    allowMinorConsentText =
      "This state either explicitly grants a minor the ability to consent to an abortion (through the law) or implicitly allows a minor to consent.";
  }
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
      <CardContent sx={{}}>
        <Typography variant="h5" component="div">
          Minors
        </Typography>
        <Typography variant="body2">{ageText}</Typography>
        <Typography variant="body2">{parentalConText}</Typography>
        <Typography variant="body2">{parentalNotifText}</Typography>
        <Typography variant="body2">{parentText}</Typography>
        <Typography variant="body2">{judBypassAvailText}</Typography>
        <Typography variant="body2">{allowMinorConsentText}</Typography>
      </CardContent>
    </Card>
  );
}
