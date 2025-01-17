import { Box, Typography, CircularProgress } from "@mui/material";

type CircularRateProps = {
  value: number;
};

function CircularRate(props: CircularRateProps) {
  const { value } = props;

  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-block",
        width: "max-content",
      }}
    >
      <CircularProgress
        variant="determinate"
        value={value * 10}
        color={getColor(value)}
        size={50}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          fontWeight="700"
          sx={{ marginTop: "-5px" }}
        >
          {Math.floor(value * 10) / 10}
        </Typography>
      </Box>
    </Box>
  );
}

const getColor = (vote: number): any => {
    if (vote >= 8) {
      return "success";
    } else if (vote >= 5) {
      return "warning";
    } else {
      return "error";
    }
};

export default CircularRate;
