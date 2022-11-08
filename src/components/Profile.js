import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { useLocation } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Profile() {
  const location = useLocation();
  const { user } = location.state;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  console.log(`props: ${JSON.stringify(user)}`);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "10vh",
      }}
    >
      <Card
        sx={{
          maxWidth: 345,
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500] }}
              aria-label="recipe"
              src={user.picture}
            ></Avatar>
          }
          title={user.name}
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image={user.picture}
          alt="Paella dish"
        />
        <CardContent sx={{ textAlign: "left" }}>
          <Typography variant="body2" color="text.secondary">
            Name : {user.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Gmail : {user.email}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
