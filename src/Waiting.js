import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Waiting(props) {
  const { waitingHours, counselVisits, excepHealth, waitingNotes } = props;
  let waitingHoursText = "";
  if (waitingHours) {
    waitingHoursText = `Must wait ${waitingHours} hours between receiving state mandated abortion counseling and obtaining an abortion.`;
  } else {
    waitingHoursText = "No waiting period is in effect.";
  }
  let counselText = "";
  if (counselVisits === 1) {
    counselText = "Counseling required by the state.";
  } else if (counselVisits === 2) {
    counselText =
      "Abortion counseling or ultrasound must be obtained at the facility before the waiting period begins, requiring two trips to the clinic.";
  }
  let health = "";
  if (excepHealth) {
    health = `Counseling requirement can be waived under these conditions: ${excepHealth}`;
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
        margin: "20px auto",
      }}
    >
      <CardContent sx={{}}>
        <Typography variant="h5" component="div">
          Waiting Periods
        </Typography>
        <Typography variant="body2">{waitingHoursText}</Typography>
        <Typography variant="body2">{counselText}</Typography>
        <Typography variant="body2">{health}</Typography>
        <Typography variant="body2">{waitingNotes}</Typography>
      </CardContent>
    </Card>
  );
}
