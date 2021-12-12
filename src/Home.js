import { Box, Grid, Link, Typography } from "@mui/material";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <>
      <Grid container sx={{ width: "85%", margin: "60px auto" }}>
        <Grid item xs={12} md={6} sx={{ padding: "20px" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "700",
              textAlign: "center",
              margin: "20px",
              marginBottom: "40px",
            }}
          >
            What is Rep Now?
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontSize: "17px", marginBottom: "60px" }}
          >
            Rep Now is a website created with the intent to give simpler access
            to information from government representatives to reproductive
            rights. The information is provided in a clean and easy to
            understand format, hopefully reducing the confusion that surrounds
            the bureaucracy of our laws and government.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <img
            src="https://www.technopixel.org/wp-content/uploads/2021/10/women-get-more-creative-during-ovulation-1-OhEecILm.jpeg"
            alt="gift giving"
            width="100%"
          />
        </Grid>
      </Grid>
      <Box
        sx={{ width: "100%", backgroundColor: "#F2F1F9", padding: "60px 0px" }}
      >
        <Box sx={{ minWidth: "400px", width: "50%", margin: "auto" }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                margin: "20px",
                marginBottom: "40px",
              }}
            >
              Why this exists
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "17px", marginBottom: "20px" }}
            >
              This exists for the sole purpose of creating access.
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "17px", marginBottom: "60px" }}
            >
              This exists for the belief in a future in which all people can
              realize their rights and access the resources they need to achieve
              sexual and reproductive health.
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                margin: "20px",
                marginBottom: "40px",
              }}
            >
              What we stand for
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "17px", marginBottom: "20px" }}
            >
              Kindness. Caring for One Another. Inclusion and Equity. Building
              Locally. Sustainability. Strength in Diversity. Power in
              Knowledge.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          padding: "60px 0px",
        }}
      >
        <Box sx={{ minWidth: "400px", width: "50%", margin: "auto" }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                margin: "20px",
                marginBottom: "40px",
              }}
            >
              Important note to mention
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "17px", marginBottom: "60px" }}
            >
              All of the information that is provided is made possible through
              the use of the{" "}
              <Link
                href="https://developers.google.com/civic-information"
                target="_blank"
              >
                Google Civic Information API
              </Link>{" "}
              as well as the{" "}
              <Link href="https://www.abortionpolicyapi.com/" target="_blank">
                Abortion Policy API
              </Link>
              . As long as the APIs remain up to date, the information will be
              accurate.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
