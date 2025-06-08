import { HStack, VStack, Box, Text } from "@chakra-ui/react";

function App() {
  return (
    <>
      <HStack>
        <Box>
          <Text>Sidebar</Text>
        </Box>
        <Box>
          <VStack>
            <Box>
              <Text>Topbar</Text>
            </Box>
            <Box>
              <Text>Main</Text>
            </Box>
          </VStack>
        </Box>
      </HStack>
    </>
  );
}

export default App;
