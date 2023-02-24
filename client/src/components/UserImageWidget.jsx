import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        //objectFit:cover will crop the sides if it needs to, take up the full space
        width={size}
        height={size}
        alt="user"
        src={`http://localhost:3001/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
