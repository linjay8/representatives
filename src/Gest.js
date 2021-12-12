import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Gest(props) {
  const { weeks, life, health, fetal, rapeOrIncest } = props;
  let banAfterWeeks = "";
  if (weeks === 28) {
    banAfterWeeks = "Abortions are banned in the third trimester.";
  } else if (weeks === 99) {
    banAfterWeeks = "Abortions are banned after viability.";
  } else {
    banAfterWeeks = `Abortions are banned after week ${weeks} (since Last Menstrual Period (LMP)).`;
  }
  let lifeText = "";
  if (life) {
    lifeText =
      "Abortions are permitted if necessary to save the pregnant person's life.";
  } else {
    lifeText =
      "Abortions are banned regardless of necessity to save the pregnant person's life.";
  }
  let healthText = "";
  if (health === "Physical") {
    healthText =
      "Abortions are permitted if necessary to preserve the pregnant person's physical health (excluding mental health).";
  } else if (health === "Major Bodily Function") {
    healthText =
      "Abortions are permitted in the case where a person would suffer 'substantial and irreversible impairment of a major bodily function' (which may include mental health)";
  } else {
    healthText =
      "Abortions are permitted if necessary to preserve the pregnant person's health (unspecified).";
  }
  let fetalText = "";
  if (fetal === "Serious fetal anomaly") {
    fetalText =
      "Abortions may be permitted if there is a serious fetal anomaly.";
  } else {
    fetalText =
      "Abortions may be permitted if there is a lethal fetal anomaly.";
  }
  let rapeOrIncestText = "";
  if (rapeOrIncest === true) {
    rapeOrIncestText = "Abortions may be permitted in cases of rape or incest.";
  } else if (rapeOrIncest === false) {
    rapeOrIncestText = "Exceptions not granted in cases of rape or incest.";
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
          Gestational Limits
        </Typography>
        <Typography variant="body2">{banAfterWeeks}</Typography>
        <Typography variant="body2">{lifeText}</Typography>
        <Typography variant="body2">{healthText}</Typography>
        <Typography variant="body2">{fetalText}</Typography>
        <Typography variant="body2">{rapeOrIncestText}</Typography>
      </CardContent>
    </Card>
  );
}
