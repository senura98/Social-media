import { Box } from "@mui/material";
import { styled } from "@mui/system";

//styled component(reusing css as a component) - using this will allow us to reuse this set of css properties two different areas
const FlexBetween = styled(Box)({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center"
})

export default FlexBetween;