import { Button, Typography } from "@mui/material";
import { Add, Settings } from "@mui/icons-material";
import styled from "@emotion/styled";

function App() {
  const BlueButton = styled(Button)({
    backgroundColor: "skyblue",
    color: "white",
    margin: 5,
    "&:hover": {
      backgroundColor: "Green",
    },
  });
  return (
    <div className="App">
      <Button variant="text">Text</Button>
      <Button
        startIcon={<Settings />}
        variant="contained"
        color="primary"
        size="small"
      >
        Contained
      </Button>
      <Button
        startIcon={<Add />}
        variant="contained"
        color="success"
        size="small"
      >
        ADD NEW POST
      </Button>
      <Button variant="outlined" disabled>
        Outlined
      </Button>
      <Typography variant="h1">It uses h1 style but it is p tag</Typography>;
      <BlueButton>My Button</BlueButton>
    </div>
  );
}

export default App;
