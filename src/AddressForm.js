import {
  MenuItem,
  TextField,
  Button,
  Box,
  Typography,
  Grid,
  Stack,
} from "@mui/material";
import { useEffect, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { Redirect, useHistory } from "react-router-dom";

export default function AddressForm(props) {
  let history = useHistory();

  useEffect(() => {
    document.title = "Address Form";
  }, []);
  const url = "";
  /**
   * Initialize the API client and make a request.
   */
  function load(address) {
    window.gapi.client.setApiKey(process.env.REACT_APP_API_KEY);
    window.gapi.client
      .request({
        path: "/civicinfo/v2/representatives",
        params: {
          address: address,
          levels: ["country", "administrativeArea1"],
          roles: [
            "headOfGovernment",
            "legislatorLowerBody",
            "legislatorUpperBody",
          ],
        },
      })
      .then((json) => {
        history.push({
          pathname: "/results",
          state: json.result,
        });
      });
  }

  const [streetAdd, setStreetAdd] = useState("");
  const [streetAddError, setStreetAddError] = useState("");
  const [city, setCity] = useState("");
  const [cityError, setCityError] = useState("");
  const [state, setState] = useState("");
  const [stateError, setStateError] = useState("");
  const [zip, setZip] = useState("");
  const [zipError, setZipError] = useState("");
  function handleStreetAddChange(event) {
    setStreetAdd(event.target.value);
    setStreetAddError("");
  }
  function handleCityChange(event) {
    setCity(event.target.value);
    setCityError("");
  }
  function handleStateChange(event) {
    setState(event.target.value);
    setStateError("");
  }
  function handleZipChange(event) {
    setZip(event.target.value);
    setZipError("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    let error = false;
    if (!streetAdd) {
      setStreetAddError("Please fill out required fields.");
      error = true;
    }
    if (!city) {
      setCityError("Please fill out required fields.");
      error = true;
    }
    if (!state) {
      setStateError("Please fill out required fields.");
      error = true;
    }
    if (!zip) {
      setZipError("Please fill out required fields.");
      error = true;
    }
    if (!error) {
      // Loads the JavaScript client library and invokes `start` afterwards.
      let address = `${streetAdd} ${city} ${state} ${zip}`;
      load(address);
    }
  }
  function clearAll() {
    setStreetAdd("");
    setCity("");
    setState("");
    setZip("");
  }
  return (
    <Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ width: "75%", margin: "auto" }}
        noValidate
      >
        <Typography variant="h2" textAlign="center" margin="40px">
          Where are you located?
        </Typography>
        <Grid container spacing={2} sx={{}}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              id="inputStreetAdd"
              label="Street address"
              value={streetAdd}
              error={!!streetAddError}
              helperText={streetAddError}
              onChange={handleStreetAddChange}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              fullWidth
              required
              id="inputCity"
              label="City"
              value={city}
              error={!!cityError}
              helperText={cityError}
              onChange={handleCityChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="inputState"
              required
              select
              fullWidth
              label="State"
              value={state}
              error={!!stateError}
              helperText={stateError}
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
          <Grid item xs={6}>
            <TextField
              fullWidth
              required
              id="inputZip"
              label="Zipcode"
              type="number"
              value={zip}
              error={!!zipError}
              helperText={zipError}
              onChange={handleZipChange}
            />
          </Grid>

          <Grid item xs={12}>
            <Stack direction="row" spacing={2}>
              <Button
                type="submit"
                variant="contained"
                endIcon={<SendIcon />}
                sx={{
                  backgroundColor: "#3A6944",
                  "&:hover": {
                    backgroundColor: "#57B894",
                  },
                }}
              >
                Post
              </Button>
              <Button
                type="button"
                variant="outlined"
                onClick={clearAll}
                sx={{
                  borderColor: "#3A6944",
                  color: "#3A6944",
                  "&:hover": {
                    borderColor: "#57B894",
                    color: "#57B894",
                  },
                }}
              >
                Clear
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
