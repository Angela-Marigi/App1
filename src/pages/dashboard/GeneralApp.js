import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Chats from "./Chats"
import Conversation from "../../components/Conversation";
import { useTheme } from "@mui/material/styles";
import { Link, useSearchParams } from "react-router-dom";
//import ChatComponent from "./Conversation";
//import Contact from "../../sections/dashboard/Contact";
//import NoChat from "../../assets/Illustration/NoChat";
//import { useSelector } from "react-redux";
//import StarredMessages from "../../sections/dashboard/StarredMessages";
//import Media from "../../sections/dashboard/SharedMessages";

const GeneralApp = () => {

  //const [searchParams] = useSearchParams();

  //const { sideBar } = useSelector((state) => state.app);

  const theme= useTheme();

  return (
    <Stack direction={"row"} sx={{ width: "100%"}}>
     {/*Chats*/}
    

      <Box sx={{
        height: "100%",
        width: "calc(100vw - 420px )",
        backgroundColor: theme.palette.mode === "light" ? "#F0F4FA" : theme.palette.background.paper,
        
      }}>
        {/*Conversation*/}
        <Conversation />
        </Box>
      </Stack>
    
  )
}

export default GeneralApp;
