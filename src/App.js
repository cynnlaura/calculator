import { Box } from "@mui/material";

function App() {
  const numsOne = [1, 2, 3]
  const numsTwo = [4, 5, 6]
  const numsThree = [7, 8, 9]
  return (
    <>
    <Box
      height={500}
      width={400}
      border='2px, solid, black'
      display='flex'
      flexDirection='row'
      justifyContent='center'
    >
      <div>
        <Box
          height={100}
          width={350}
          border='2px, solid, black'
          marginTop='10px'
          marginBottom='20px'
        >
        </Box>
        <div style={{ display:'flex', flexDirection:'col', justifyContent:'space-around' }}>
          {numsOne.map((num) => 
            <Box
              height={65}
              width={65}
              border='2px, solid, black'
              marginTop='10px'
              display='flex'
              justifyContent='center'
              alignItems='center'
              fontSize='25px'
            >
              {num}
            </Box>
          )}
        </div> 
        <div style={{ display:'flex', flexDirection:'col', justifyContent:'space-around' }}>
          {numsTwo.map((num) => 
            <Box
              height={65}
              width={65}
              border='2px, solid, black'
              marginTop='10px'
              display='flex'
              justifyContent='center'
              alignItems='center'
              fontSize='25px'
            >
              {num}
            </Box>
          )}
        </div>  
        <div style={{ display:'flex', flexDirection:'col', justifyContent:'space-around' }}>
          {numsThree.map((num) => 
            <Box
              height={65}
              width={65}
              border='2px, solid, black'
              marginTop='10px'
              display='flex'
              justifyContent='center'
              alignItems='center'
              fontSize='25px'
            >
              {num}
            </Box>
          )}
        </div> 
      </div>
    </Box>
    </>
  );
}

export default App;
