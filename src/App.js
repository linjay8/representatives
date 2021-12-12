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
    <Box>
      <ThemeProvider theme={theme}>
        <Router>
          <Nav />
          <Box>
            <Switch>
              <Route path="/findreps" component={AddressForm} />
              <Route path="/results" component={Results} />
              <Route path="/posts/:postId" />
              <Route exact path="/" component={Home} />
              <Route path="/404" component={NotFound} />
              <Redirect to="/404" />
            </Switch>
          </Box>
        </Router>
      </ThemeProvider>
    </Box>
  );
}

export default App;
