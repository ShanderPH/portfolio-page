import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"




const NavBar = () => {

  const StyledToolbar = styled(Toolbar)(({ theme })=> ({
      display: "flex",
      justifyContent: "center",
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
  }))

  const StyledMenuItem = styled(MenuItem)(({ theme })=> ({
    backgroundColor: "transparent",
    '&:hover': {
            transition: "all .3s",
            cursor: "pointer",
            color: theme.palette.secondary.light,
            borderRadius: "10%"
        }
  }))

    return (
      <>
        <AppBar position="absolute">
          <StyledToolbar>
            <StyledMenuItem>About</StyledMenuItem>
            <StyledMenuItem>Learn</StyledMenuItem>
            <StyledMenuItem>Portfolio</StyledMenuItem>
            <StyledMenuItem>Blog</StyledMenuItem>
            <StyledMenuItem>Contact</StyledMenuItem>
          </StyledToolbar>
        </AppBar>
      </>
    )
  }
  
  export default NavBar
  