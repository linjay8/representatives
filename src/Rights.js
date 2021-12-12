import { Box, Grid, TextField, MenuItem, Typography } from "@mui/material";
import { useState } from "react";

export default function Rights(props) {
  const gestUrl =
    "https://api.abortionpolicyapi.com/v1/gestational_limits/states/";
  const insureUrl =
    "https://api.abortionpolicyapi.com/v1/insurance_coverage/states/";
  const minorsUrl = "https://api.abortionpolicyapi.com/v1/minors/states/";
  const waitingUrl =
    "https://api.abortionpolicyapi.com/v1/waiting_periods/states/";
  const [state, setState] = useState("");
  function handleStateChange(event) {
    setState(event.target.value);
    fetchInfo(event.target.value);
  }
  function fetchInfo(st) {
    console.log(process.env.REACT_APP_AP_API_KEY);
    fetch(`${gestUrl}${st}`, {
      method: "GET",
      headers: {
        token: process.env.REACT_APP_AP_API_KEY,
        mode: "no-cors",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
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
            <MenuItem value="AS">AS - American Samoa</MenuItem>
            <MenuItem value="AZ">AZ - Arizona</MenuItem>
            <MenuItem value="AR">AR - Arkansas</MenuItem>
            <MenuItem value="CA">CA - California</MenuItem>
            <MenuItem value="CO">CO - Colorado</MenuItem>
            <MenuItem value="CT">CT - Connecticut</MenuItem>
            <MenuItem value="DE">DE - Delaware</MenuItem>
            <MenuItem value="DC">DC - District of Columbia</MenuItem>
            <MenuItem value="FL">FL - Florida</MenuItem>
            <MenuItem value="GA">GA - Georgia</MenuItem>
            <MenuItem value="GU">GU - Guam</MenuItem>
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
            <MenuItem value="MP">MP - Northern Mariana Islands</MenuItem>
            <MenuItem value="OH">OH - Ohio</MenuItem>
            <MenuItem value="OK">OK - Oklahoma</MenuItem>
            <MenuItem value="OR">OR - Oregon</MenuItem>
            <MenuItem value="PA">PA - Pennsylvania</MenuItem>
            <MenuItem value="PR">PR - Puerto Rico</MenuItem>
            <MenuItem value="RI">RI - Rhode Island</MenuItem>
            <MenuItem value="SC">SC - South Carolina</MenuItem>
            <MenuItem value="SD">SD - South Dakota</MenuItem>
            <MenuItem value="TN">TN - Tennessee</MenuItem>
            <MenuItem value="TX">TX - Texas</MenuItem>
            <MenuItem value="UM">
              UM - United States Minor Outlying Islands
            </MenuItem>
            <MenuItem value="UT">UT - Utah</MenuItem>
            <MenuItem value="VT">VT - Vermont</MenuItem>
            <MenuItem value="VI">VI - Virgin Islands</MenuItem>
            <MenuItem value="VA">VA - Virginia</MenuItem>
            <MenuItem value="WA">WA - Washington</MenuItem>
            <MenuItem value="WV">WV - West Virginia</MenuItem>
            <MenuItem value="WI">WI - Wisconsin</MenuItem>
            <MenuItem value="WY">WY - Wyoming</MenuItem>
            <MenuItem value="AA">AA - Armed Forces Americas</MenuItem>
            <MenuItem value="AE">AE - Armed Forces Africa</MenuItem>
            <MenuItem value="AE">AE - Armed Forces Canada</MenuItem>
            <MenuItem value="AE">AE - Armed Forces Europe</MenuItem>
            <MenuItem value="AE">AE - Armed Forces Middle East</MenuItem>
            <MenuItem value="AP">AP - Armed Forces Pacific</MenuItem>
          </TextField>
        </Grid>
      </Grid>
    </Box>
  );
}
