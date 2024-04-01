import { Flex, Heading, SimpleGrid } from '@chakra-ui/react'
import DocumentList from './components/DocumentList'
import HomeButtons from './components/HomeButtons'
import SearchBar from './components/SearchBar'

const Home = () => {
  return (
    <Flex as="main" paddingTop={'11%'} justifyContent="center">
      <Flex flexDirection="column" gap={2}>
        <Heading as="h1" size="2xl">
          Let's label.
        </Heading>
        <Heading as="h2" size="md" fontWeight={500} opacity={'85%'} fontSize={16}>
          Select or create a document to start labelling
        </Heading>
        <SimpleGrid columns={2} spacing={20} marginTop={4}>
          <HomeButtons />
          <Flex flexDirection="column" gap={1}>
            <SearchBar
              placeholder={'Search your documents...'}
              onChange={() => {}}
              onRefresh={() => {}}
            ></SearchBar>
            <DocumentList />
          </Flex>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}

export default Home
