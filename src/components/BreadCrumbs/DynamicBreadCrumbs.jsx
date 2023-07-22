import { useLocation, useParams } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import ComputerIcon from "@mui/icons-material/Computer";

export const DynamicBreadCrumbs = () => {
  const { pathname } = useLocation();
  const params = useParams();
  const segments = pathname.split("/").filter((segment) => segment);
  return (
    <Breadcrumbs separator={"/"} aria-label='breadcrumb'>
      <Link to='/' style={{ display: "flex", alignItems: "center" }}>
        {" "}
        <HomeIcon sx={{ mr: 0.5 }} fontSize='inherit' />
        Главная
      </Link>
      {segments.includes("quizStart") || segments.includes("quizStatistic")
        ? null
        : segments.map((segment, index) => {
            // Build the URL up to the current segment
            const url = segments.slice(0, index + 1).join("/");
            let breadcrumbText = params[segment] || segment;
            if (breadcrumbText === "quizzes") {
              breadcrumbText = "Квизы";
            } else if (breadcrumbText === "JS") {
              breadcrumbText = "JavaScript";
            } else if (breadcrumbText === "TS") {
              breadcrumbText = "TypeScript";
            }

            return (
              <Link
                key={segment}
                to={url}
                style={{ display: "flex", alignItems: "center" }}
              >
                {breadcrumbText === "Квизы" ? (
                  <SchoolIcon sx={{ mr: 0.5 }} fontSize='inherit' />
                ) : (
                  <ComputerIcon sx={{ mr: 0.5 }} fontSize='inherit' />
                )}
                {breadcrumbText}
              </Link>
            );
          })}
    </Breadcrumbs>
  );
};
