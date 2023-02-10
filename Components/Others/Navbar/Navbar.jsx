import * as React from "react";
import styled from "@emotion/styled";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ClearSharpIcon from "@mui/icons-material/ClearSharp";
import Link from "next/link";

const navItems = ["Coins", "Exchanges"];

const Desktop_Nav_div = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
  "& .links": {
    display: "flex",
    justifyContent: "center",
  },
  "& .brand": {
    width: "40%",
    display: "flex",
  },
});

const MobileNavdiv = styled("div")({
  backgroundColor: "rgb(6, 17, 33)",
  height: "100vh",
  overflow: "hidden",
  maxHeight: "100vh",
  "& *": {
    color: "white",
  },
  "& a": {
    marginTop: "5px",
    fontSize: "30px",
  },
  "& h5": {
    fontSize: "40px",
  },
});

const MyButton = styled(Button)({
  fontSize: "18px",
  color: "rgb(194, 192, 192)",
  marginRight: "5px",
  fontWeight: "600",
  textTransform: "capitalize",
  "&:hover": {
    color: "white",
  },
});

const CloseButtondiv = styled("div")({
  position: "relative",
  display: "flex",
  justifyContent: "flex-end",
  padding: "15px",
  marginRight: "15px",
  "& button": {
    padding: "3px",
  },
  "& svg": {
    fontSize: "50px",
  },
});

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  React.useEffect(() => {
    if (props.activate) {
      const links = document.getElementsByClassName(props.activate);
      console.log("links",links)
      for (let i = 0; i < links.length; i++) {
        console.log(i,links[i])
        links[i].style.color = "blue";
      }
    }
  }, [props.activate]);

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        height: "100%",
        "& a": {
          textTransform: "capitalize",
        },
      }}
    >
      <Link href="/">
        <CloseButtondiv>
          <div>
            <IconButton onClick={handleDrawerToggle}>
              <ClearSharpIcon fontSize="small" />
            </IconButton>
          </div>
        </CloseButtondiv>
        <Typography variant="h5" style={{ fontWeight: "700" }} sx={{ my: 2 }}>
          Crypto.com
        </Typography>
      </Link>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            style={{ justifyContent: "center" }}
            sx={{ textAlign: "center" }}
          >
            <Link href="/" className="home_link">
              Home
            </Link>
          </ListItemButton>
        </ListItem>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              style={{ justifyContent: "center" }}
              sx={{ textAlign: "center" }}
            >
              <Link
                className={`${item.toLowerCase()}_link`}
                href={`/${item.toLowerCase()}`}
              >
                {item}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        style={{
          boxShadow: "none",
        }}
        className="s_b_c_m "
        component="nav"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon style={{ fontSize: "50px" }} />
          </IconButton>{" "}
          <Desktop_Nav_div>
            <div className="brand">
              <Link href="/">
                <h1 style={{ padding: "10px 10px" }}>Crypto.com</h1>
              </Link>
            </div>
            <Box
              sx={{ display: { xs: "none", sm: "block" } }}
              style={{ alignItems: "center" }}
            >
              <div className="links">
                <div className="link">
                  <Link href="/">
                    <MyButton className={`home_link`}>Home</MyButton>
                  </Link>
                </div>
                {navItems.map((item) => (
                  <div key={item + "kjhjk"} className="link">
                    <Link href={"/" + item.toLowerCase()}>
                      <MyButton className={`${item.toLowerCase()}_link`}>
                        {item}
                      </MyButton>
                    </Link>
                  </div>
                ))}
              </div>
            </Box>
          </Desktop_Nav_div>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100vw",
            },
          }}
        >
          <MobileNavdiv>{drawer}</MobileNavdiv>
        </Drawer>
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
