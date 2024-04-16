
import { useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid'


function Appbar() {
  const theme = useTheme()
   console.log(theme)
  return (
      <Box>
         <Typography color="primary">mssharma</Typography>
         <h1>Mohit Sharma</h1>
      </Box>
  );
}







export default Appbar;
