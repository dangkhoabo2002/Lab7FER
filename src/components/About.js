import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Abou() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered="true"
        >
          <Tab label="New Coffee" {...a11yProps(0)} />
          <Tab label="Artist" {...a11yProps(1)} />
          <Tab label="Rooftop" {...a11yProps(2)} />
          <Tab label="Comming Soon" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <img
          className="img_slide"
          src="https://theexoticbean.com/wp-content/uploads/2016/02/rosette_pattern_coffee_art.png"
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <img
          className="img_slide"
          src="http://cdn.cnn.com/cnnnext/dam/assets/170825072924-latte-art-tease.jpg"
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <img
          className="img_slide"
          src="https://1.bp.blogspot.com/-_MYNa-uF3Gg/YAZ-jFw7WDI/AAAAAAAADz4/aJTDSILJV1sI5YFlLhxs01axa1HDHPDtwCLcBGAsYHQ/s1440/%25C4%2591o%25CC%2582%25CC%2580i%2Brooftop.jpg"
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <img
          className="img_slide"
          src="https://gamek.mediacdn.vn/133514250583805952/2021/4/5/ad2-1617611047953803571012.jpg"
        />
      </TabPanel>
    </Box>
  );
}
