import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
export default function Insure(props) {
  const {
    reqCoverage,
    privCovNoRes,
    privExcepLife,
    privExcepHealth,
    privExcepFetal,
    privExcepRape,
    exCovNoRes,
    exExcepLife,
    exExcepHealth,
    exExcepFetal,
    exExcepRape,
    exForbidCov,
    medCovProvider,
    medExcepLife,
    medExcepHealth,
    medExcepFetal,
    medExcepRape,
  } = props;
  let reqCoverageText = "";
  if (reqCoverage === true) {
    reqCoverageText =
      "The state requires that private health plans regulated by the state cover abortion.";
  }
  let privCovNoResText = "";
  if (privCovNoRes === true) {
    privCovNoResText =
      "Private insurance may cover abortion, but is not necessarily required to.";
  }
  let privExcepLifeText = "";
  if (privExcepLife === true) {
    privExcepLifeText =
      "The state allows private insurance coverage for cases where abortion is necessary to save the pregnant person's life.";
  }
  let privExcepHealthText = "";
  if (privExcepHealth === "major bodily function") {
    privExcepHealthText =
      "The state allows private insurance coverage for cases when the pregnant person's faces a 'substantial and irreversible impairment of a major bodily function.'";
  }
  let privExcepFetalText = "";
  if (privExcepFetal === "Lethal fetal anomaly") {
    privExcepFetalText =
      "The state allows private insurance coverage for cases when the fetus has a lethal fetal anomaly.";
  }
  let privExcepRapeText = "";
  if (privExcepRape === true) {
    privExcepRapeText =
      "The state allows private insurance coverage for cases of rape or incest.";
  }
  let exCovNoResText = "";
  if (exCovNoRes === true) {
    exCovNoResText =
      "The state has not restricted abortion coverage in ACA plans.";
  }
  let exExcepLifeText = "";
  if (exExcepLife === true) {
    exExcepLifeText =
      "The state allows exchange insurance coverage for cases where abortion is necessary to save the pregnant person's life.";
  }
  let exExcepHealthText = "";
  if (exExcepHealth === "major bodily function") {
    exExcepHealthText =
      "The state allows exchange insurance coverage for cases when the pregnant person's faces a 'substantial and irreversible impairment of a major bodily function.'";
  } else if (exExcepHealth === "physical") {
    exExcepHealthText =
      "The state allows exchange insurance coverage for cases when the pregnant person's faces serious impacts on 'physical' health";
  }
  let exExcepFetalText = "";
  if (exExcepFetal === "Lethal fetal anomaly") {
    exExcepFetalText =
      "The state allows exchange insurance coverage for cases when the fetus has a lethal fetal anomaly.";
  }
  let exExcepRapeText = "";
  if (exExcepRape === true) {
    exExcepRapeText =
      "The state allows exchange insurance coverage for cases of rape or incest.";
  }
  let exForbidCovText = "";
  if (exForbidCov === true) {
    exForbidCovText =
      "The state prohibits any and all exchange insurance coverage for abortion.";
  }
  let medCovProviderText = "";
  if (medCovProvider === true) {
    medCovProviderText =
      "The state has a policy in place to use Medicaid funds to pay for abortion, most of these states require coverage for 'medically necessary' abortion. This is a vaguely-defined criterion usually based on a decision between a pregnant person and their medical provider and can include circumstances beyond physical health, such as mental or emotional health or familial situations.";
  }
  let medExcepLifeText = "";
  if (medExcepLife === true) {
    medExcepLifeText =
      "The state allows Medicaid insurance coverage for cases where abortion is necessary to save the pregnant person's life.";
  }
  let medExcepHealthText = "";
  if (medExcepHealth === "physical") {
    medExcepHealthText =
      "The state allows Medicaid insurance coverage for cases when the pregnant person's physical health is endangered.";
  }
  let medExcepFetalText = "";
  if (medExcepFetal === "Serious fetal anomaly") {
    medExcepFetalText =
      "The state allows Medicaid insurance coverage for cases when the fetus has a serious or lethal fetal anomaly.";
  }
  let medExcepRapeText = "";
  if (medExcepRape === true) {
    medExcepRapeText =
      "The state allows Medicaid insurance coverage for cases of rape or incest.";
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
          Insurance Coverage
        </Typography>
        <Typography variant="body2">{reqCoverageText}</Typography>
        <Typography variant="body2">{privCovNoResText}</Typography>
        <Typography variant="body2">{privExcepLifeText}</Typography>
        <Typography variant="body2">{privExcepHealthText}</Typography>
        <Typography variant="body2">{privExcepFetalText}</Typography>
        <Typography variant="body2">{privExcepRapeText}</Typography>
        <Typography variant="body2">{exCovNoResText}</Typography>
        <Typography variant="body2">{exExcepLifeText}</Typography>
        <Typography variant="body2">{exExcepHealthText}</Typography>
        <Typography variant="body2">{exExcepFetalText}</Typography>
        <Typography variant="body2">{exExcepRapeText}</Typography>
        <Typography variant="body2">{exForbidCovText}</Typography>
        <Typography variant="body2">{medCovProviderText}</Typography>
        <Typography variant="body2">{medExcepLifeText}</Typography>
        <Typography variant="body2">{medExcepHealthText}</Typography>
        <Typography variant="body2">{medExcepFetalText}</Typography>
        <Typography variant="body2">{medExcepRapeText}</Typography>
      </CardContent>
    </Card>
  );
}
