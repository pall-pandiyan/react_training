import { HStack, VStack, Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <HStack>
        <Box border="1px red solid">Sidebar</Box>
        <Box>
          <VStack>
            <Box border="1px blue solid">Topbar</Box>
            <Box border="1px green solid">Main</Box>
          </VStack>
        </Box>
      </HStack>
    </>
  );
}

export default App;
