import React from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import Avatar from "@mui/material/Avatar";

import avatarDefault from "../../assets/images/avatarDefault.png";
import { useUseContext } from "../../contexts/UserContext";

const Drawer = () => {
  const [state, setState] = React.useState(false);
  const { usuario, logout } = useUseContext();
  const navigate = useNavigate();

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250, padding: "1rem" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem disablePadding>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "0.5rem",
              marginBottom: "1.5rem",
              width: "100%",
            }}
          >
            <Avatar
              alt={`Avatar do usuário ${usuario.username}`}
              src={usuario.avatar || avatarDefault}
              sx={{ width: 80, height: 80 }}
            />
          </div>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ManageAccountsIcon />
            </ListItemIcon>
            <ListItemText
              primary="Minha conta"
              onClick={() => navigate(`/membros/editarMembro/${usuario.id}`)}
            />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Sair" onClick={logout} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Avatar
        alt={`Avatar do usuário ${usuario.username}`}
        src={usuario.avatar || avatarDefault}
        sx={{ width: 64, height: 64 }}
        onClick={toggleDrawer(true)}
      />
      <SwipeableDrawer
        anchor="right"
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
};

export default Drawer;
