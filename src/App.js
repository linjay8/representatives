import logo from "./logo.svg";
import "./App.css";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { Box } from "@mui/material";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Nav from "./Nav";
import NotFound from "./NotFound";
import Home from "./Home";
import AddressForm from "./AddressForm";
import Results from "./Results";
import Rights from "./Rights";
import Footer from "./Footer";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Inter, Roboto",
      fontWeightLight: 200,
      fontWeightRegular: 400,
      fontWeightMedium: 400,
      fontWeightBold: 600,
    },
  });
  return (
    <Box
      sx={{
        minHeight: "100vh" /* will cover the 100% of viewport */,
        display: "block",
        position: "relative",
        paddingBottom: "60px" /* height of your footer */,
      }}
    >
      <ThemeProvider theme={theme}>
        <Router>
          <Nav />
          <Box>
            <Switch>
              <Route path="/findreps" component={AddressForm} />
              <Route
                path="/results"
                render={(props) => <Results {...props} />}
              />
              <Route path="/reproductiverights" component={Rights} />
              <Route exact path="/" component={Home} />
              <Route path="/404" component={NotFound} />
              <Redirect to="/404" />
            </Switch>
          </Box>
        </Router>
      </ThemeProvider>
      <footer>
        <Footer />
      </footer>
    </Box>
  );
}

export default App;
