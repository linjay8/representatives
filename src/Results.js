import { Box, Grid } from "@mui/material";
import { useState } from "react";
import Rep from "./Rep";
export default function Results(props) {
  const results = props.location.state;
  let officialList = [...results.officials];
  let officeToOfficialList = [];
  let officeToLevelList = [];
  results.offices.forEach((office) => {
    office.officialIndices.forEach((index) => {
      officeToOfficialList[index] = office.name;
      officeToLevelList[index] = office.levels[0];
    });
  });

  officialList.forEach((official, index) => {
    official.office = officeToOfficialList[index];
    official.level = officeToLevelList[index];
  });

  return (
    <Box sx={{ width: "95%", margin: "30px auto", marginBottom: "30px" }}>
      <Grid container spacing={6}>
        {officialList.map((official, i, officials) => {
          if (i < officials.length && i != 0) {
            return (
              <Grid item xs={12} sm={6} md={4}>
                <Rep
                  key={official.name}
                  name={official.name}
                  office={official.office}
                  party={official.party}
                  phone={official.phones}
                  links={official.urls}
                  email={official.emails ? official.emails : null}
                  address={official.address[0]}
                  level={official.level}
                  state={results.normalizedInput.state}
                />
              </Grid>
            );
          }
          return null;
        })}
      </Grid>
    </Box>
  );
}
