import { Button, Card, CardBody, CardHeader, Stack } from "@chakra-ui/react";

export const InputSelector = () => {
  return (
    <Card>
      <CardHeader paddingBottom="0">
        <strong>Select an input</strong>
      </CardHeader>
      <CardBody>
        <Stack>
          <Button>Numerical input</Button>
          <Button>Text input</Button>
        </Stack>
      </CardBody>
    </Card>
  );
};
