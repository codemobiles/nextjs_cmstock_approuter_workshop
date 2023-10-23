"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import { Badge, Menu, MenuItem } from "@mui/material";
// import { useAppDispatch } from "@/src/store/store";
// import { signOut } from "@/src/store/slices/userSlice";
import { useRouter } from "next/navigation";

const drawerWidth = 240;
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

type Props = { handleDrawerOpen: any; open: boolean };

const Header = ({ handleDrawerOpen, open }: Props) => {
  const [showProfileMenu, setShowProfileMenu] = React.useState(false);
  // const dispatch = useAppDispatch();

  const handleClose = () => {
    setShowProfileMenu(false);
  };
  const router = useRouter();

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          CMStock Workshop with ReactJS - Typescript (TS) V.
          {process.env.NEXT_PUBLIC_APP_VERSION}
        </Typography>
        <Box sx={{ flexGrow: 1 }} />

        <Typography variant="h6" noWrap component="div" fontWeight="300">
          Updated 2023
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-haspopup="true"
            onClick={() => {
              setShowProfileMenu(!showProfileMenu);
            }}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>

          <Menu
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={showProfileMenu}
            onClose={handleClose}
          >
            <MenuItem
              onClick={async () => {
                //   const response = await dispatch(signOut());
                //   if (response.meta.requestStatus === "fulfilled")
                //     router.push("/login");
              }}
            >
              Logout
            </MenuItem>
            <MenuItem onClick={() => handleClose}>My account</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
