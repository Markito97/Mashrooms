import { useState, React } from "react";
import { Link, useRouteError } from "react-router-dom";
import { ReactComponent as MashroomError1 } from "../../assets/icons/mashroomError1.svg";
import { ReactComponent as MashroomError2 } from "../../assets/icons/mashroomError2.svg";
import { ReactComponent as MashroomError3 } from "../../assets/icons/mashroomError3.svg";
import { Box, Button } from "@mui/material";
import Container from "@mui/material/Container";

export default function ErrorBoundary() {
  const errorMashrooms = [
    <MashroomError1 />,
    <MashroomError2 />,
    <MashroomError3 />,
  ];
  const [pictureNumber, setPicture] = useState(
    Math.floor(Math.random() * errorMashrooms.length)
  );

  const error = useRouteError();
  console.error(error);
  return (
    <Container
      style={{
        color: "white",
        maxWidth: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2e2e2e",
      }}
    >
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
          onClick={() =>
            setPicture(Math.floor(Math.random() * errorMashrooms.length))
          }
          style={{ cursor: "pointer" }}
        >
          {errorMashrooms[pictureNumber]}
        </div>

        <div>Произошла ошибка</div>
        <Link to={"/quizzes"}>
          <Button variant='outlined' sx={{ maxWidth: "fit-content" }}>
            Вернуться на главную
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
// class ErrorBoundary extends Component {
//   state = {
//     error: null,
//   };
//   static getDerivedStateFromError(error) {
//     return { error };
//   }
//   render() {
//     const { error } = this.state;
//     console.log("err", error);

//     if (error) {
//       return (
//         <div>
//           <p>Seems like an error occured!</p>
//           <p>{error.message}</p>
//         </div>
//       );
//     }
//     return this.props.children;
//   }
// }

// export default ErrorBoundary;
