import { Box, Grid, TextField, MenuItem, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Gest from "./Gest";
import Insure from "./Insure";
import Loading from "./Loading";
import Minors from "./Minors";
import Waiting from "./Waiting";

export default function Rights(props) {
  useEffect(() => {
    document.title = "Rights";
  }, []);
  const proxyUrl = "https://ap-api-proxy.herokuapp.com/";
  const gestUrl =
    proxyUrl +
    "https://api.abortionpolicyapi.com/v1/gestational_limits/states/";
  const insureUrl =
    proxyUrl +
    "https://api.abortionpolicyapi.com/v1/insurance_coverage/states/";
  const minorsUrl =
    proxyUrl + "https://api.abortionpolicyapi.com/v1/minors/states/";
  const waitingUrl =
    proxyUrl + "https://api.abortionpolicyapi.com/v1/waiting_periods/states/";
  const [state, setState] = useState("");
  const [gest, setGest] = useState();
  const [insure, setInsure] = useState();
  const [minors, setMinors] = useState();
  const [waiting, setWaiting] = useState();
  const [loading, setLoading] = useState(false);
  function handleStateChange(event) {
    setState(event.target.value);
    fetchInfo(event.target.value);
  }
  function fetchInfo(st) {
    // Gestational limits
    setLoading(true);
    fetch(`${gestUrl}${st}`, {
      method: "GET",
      headers: {
        token: process.env.REACT_APP_AP_API_KEY,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setGest(json[Object.keys(json)[0]]);
      });
    // Insurance coverage
    fetch(`${insureUrl}${st}`, {
      method: "GET",
      headers: {
        token: process.env.REACT_APP_AP_API_KEY,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setInsure(json[Object.keys(json)[0]]);
        document.title = Object.keys(json)[0];
      });
    // Minors
    fetch(`${minorsUrl}${st}`, {
      method: "GET",
      headers: {
        token: process.env.REACT_APP_AP_API_KEY,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setMinors(json[Object.keys(json)[0]]);
      });
    // Waiting periods
    fetch(`${waitingUrl}${st}`, {
      method: "GET",
      headers: {
        token: process.env.REACT_APP_AP_API_KEY,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setWaiting(json[Object.keys(json)[0]]);
        setLoading(false);
      });
  }
  return (
    <Box sx={{ width: "75%", margin: "auto" }} noValidate>
      <Typography variant="h2" textAlign="center" margin="40px">
        Select your state
      </Typography>
      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        <Grid item xs={12} sm={4}>
          <TextField
            id="inputState"
            required
            select
            fullWidth
            label="State"
            value={state}
            onChange={handleStateChange}
          >
            <MenuItem value>- Select -</MenuItem>
            <MenuItem value="AL">AL - Alabama</MenuItem>
            <MenuItem value="AK">AK - Alaska</MenuItem>
            <MenuItem value="AZ">AZ - Arizona</MenuItem>
            <MenuItem value="AR">AR - Arkansas</MenuItem>
            <MenuItem value="CA">CA - California</MenuItem>
            <MenuItem value="CO">CO - Colorado</MenuItem>
            <MenuItem value="CT">CT - Connecticut</MenuItem>
            <MenuItem value="DE">DE - Delaware</MenuItem>
            <MenuItem value="FL">FL - Florida</MenuItem>
            <MenuItem value="GA">GA - Georgia</MenuItem>
            <MenuItem value="HI">HI - Hawaii</MenuItem>
            <MenuItem value="ID">ID - Idaho</MenuItem>
            <MenuItem value="IL">IL - Illinois</MenuItem>
            <MenuItem value="IN">IN - Indiana</MenuItem>
            <MenuItem value="IA">IA - Iowa</MenuItem>
            <MenuItem value="KS">KS - Kansas</MenuItem>
            <MenuItem value="KY">KY - Kentucky</MenuItem>
            <MenuItem value="LA">LA - Louisiana</MenuItem>
            <MenuItem value="ME">ME - Maine</MenuItem>
            <MenuItem value="MD">MD - Maryland</MenuItem>
            <MenuItem value="MA">MA - Massachusetts</MenuItem>
            <MenuItem value="MI">MI - Michigan</MenuItem>
            <MenuItem value="MN">MN - Minnesota</MenuItem>
            <MenuItem value="MS">MS - Mississippi</MenuItem>
            <MenuItem value="MO">MO - Missouri</MenuItem>
            <MenuItem value="MT">MT - Montana</MenuItem>
            <MenuItem value="NE">NE - Nebraska</MenuItem>
            <MenuItem value="NV">NV - Nevada</MenuItem>
            <MenuItem value="NH">NH - New Hampshire</MenuItem>
            <MenuItem value="NJ">NJ - New Jersey</MenuItem>
            <MenuItem value="NM">NM - New Mexico</MenuItem>
            <MenuItem value="NY">NY - New York</MenuItem>
            <MenuItem value="NC">NC - North Carolina</MenuItem>
            <MenuItem value="ND">ND - North Dakota</MenuItem>
            <MenuItem value="OH">OH - Ohio</MenuItem>
            <MenuItem value="OK">OK - Oklahoma</MenuItem>
            <MenuItem value="OR">OR - Oregon</MenuItem>
            <MenuItem value="PA">PA - Pennsylvania</MenuItem>
            <MenuItem value="RI">RI - Rhode Island</MenuItem>
            <MenuItem value="SC">SC - South Carolina</MenuItem>
            <MenuItem value="SD">SD - South Dakota</MenuItem>
            <MenuItem value="TN">TN - Tennessee</MenuItem>
            <MenuItem value="TX">TX - Texas</MenuItem>
            <MenuItem value="UT">UT - Utah</MenuItem>
            <MenuItem value="VT">VT - Vermont</MenuItem>
            <MenuItem value="VA">VA - Virginia</MenuItem>
            <MenuItem value="WA">WA - Washington</MenuItem>
            <MenuItem value="WV">WV - West Virginia</MenuItem>
            <MenuItem value="WI">WI - Wisconsin</MenuItem>
            <MenuItem value="WY">WY - Wyoming</MenuItem>
          </TextField>
        </Grid>
      </Grid>
      {loading ? (
        <Loading />
      ) : (
        <>
          {gest && (
            <Gest
              weeks={gest.banned_after_weeks_since_LMP}
              life={gest.exception_life}
              health={gest.exception_health}
              fetal={gest.exception_fetal}
              rapeOrIncest={gest.exception_rape_or_incest}
            />
          )}
          {waiting && (
            <Waiting
              waitingHours={waiting.waiting_period_hours}
              counselVisits={waiting.counseling_visits}
              excepHealth={waiting.exception_health}
              waitingNotes={waiting.waiting_period_notes}
            />
          )}
          {minors && (
            <Minors
              age={minors.below_age}
              parentalConReq={minors.parental_consent_required}
              parentalNotifReq={minors.parental_notification_required}
              parentReq={minors.parents_required}
              judBypassAvail={minors.judicial_bypass_available}
              allowMinorConsent={minors.allows_minor_to_consent}
            />
          )}
          {insure && (
            <Insure
              reqCoverage={insure.requires_coverage}
              privCovNoRes={insure.private_coverage_no_restrictions}
              privExcepLife={insure.private_exception_life}
              privExcepHealth={insure.private_exception_health}
              privExcepFetal={insure.private_exception_fetal}
              privExcepRape={insure.private_exception_rape_or_incest}
              exCovNoRes={insure.exchange_coverage_no_restrictions}
              exExcepLife={insure.exchange_exception_life}
              exExcepHealth={insure.exchange_exception_health}
              exExcepFetal={insure.exchange_exception_fetal}
              exExcepRape={insure.exchange_exception_rape_or_incest}
              exForbidCov={insure.exchange_forbids_coverage}
              medCovProvider={
                insure.medicaid_coverage_provider_patient_decision
              }
              medExcepLife={insure.medicaid_exception_life}
              medExcepHealth={insure.medicaid_exception_health}
              medExcepFetal={insure.medicaid_exception_fetal}
              medExcepRape={insure.medicaid_exception_rape_or_incest}
            />
          )}
        </>
      )}
    </Box>
  );
}
