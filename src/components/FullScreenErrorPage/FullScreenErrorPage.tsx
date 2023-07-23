import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as MashroomError1 } from "../../assets/icons/mashroomError1.svg";
import { ReactComponent as MashroomError2 } from "../../assets/icons/mashroomError2.svg";
import { ReactComponent as MashroomError3 } from "../../assets/icons/mashroomError3.svg";
import { Box, Button, styled, useTheme } from "@mui/material";
import { colorTokens } from "@/theme";

export default function FullScreenErrorPage() {
  const errorMashrooms = [<MashroomError1 />, <MashroomError2 />, <MashroomError3 />];
  const [pictureNumber, setPicture] = useState(Math.floor(Math.random() * errorMashrooms.length));

  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  return (
    <FullScreenErrorPageWrapper>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <div
          onClick={() => setPicture(Math.floor(Math.random() * errorMashrooms.length))}
          style={{ cursor: "pointer" }}
        >
          {errorMashrooms[pictureNumber]}
        </div>

        <div>Произошла ошибка</div>
        <Link to={"/quizzes"}>
          <Button variant="contained" sx={{ bgcolor: colors.third[100], maxWidth: "fit-content" }}>
            Вернуться на главную
          </Button>
        </Link>
      </Box>
    </FullScreenErrorPageWrapper>
  );
}

const FullScreenErrorPageWrapper = styled(Box)(({ theme }) => ({
  color: "white",
  maxWidth: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#rgb(25, 28, 33)",
}));
