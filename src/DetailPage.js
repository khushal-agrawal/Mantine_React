import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { data } from "./Data";
import {
  Container,
  Title,
  Text,
  Grid,
  Card,
  Button,
  Divider,
  Badge,
} from "@mantine/core";

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const detailedItem = data.find((item) => item.id === parseInt(id));

  //If record is not found
  if (!detailedItem) {
    return (
      <Container size="lg" mt="xl">
        <Title order={2}>Record Not Found</Title>
      </Container>
    );
  }

  const formatDateTime = (timestamp) => {
    const date = new Date(timestamp);

    return date.toLocaleString();
  };

  return (
    <div>
      <Container size="lg" mt="xl">
        <Title order={1}>{detailedItem.name}</Title>
        <Divider my="sm" />

        <Grid>
          <Grid.Col span={6}>
            <Card shadow="sm" padding="lg">
              <Text weight={500}>Project: {detailedItem.project}</Text>

              <Text weight={500}>Scenario: {detailedItem.scenario}</Text>

              <Text weight={500}>
                Priority: Priority:{" "}
                <Badge
                  color={
                    detailedItem.priority === "High"
                      ? "red"
                      : detailedItem.priority === "Medium"
                      ? "yellow"
                      : "green"
                  }
                >
                  {detailedItem.priority}
                </Badge>
              </Text>

              <Text weight={500}>
                Development Status: {detailedItem.development_status}
              </Text>

              <Text weight={500}>
                Credits Required: {detailedItem.credits_required}
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={6}>
            <Card shadow="sm" padding="lg">
              <Text weight={500}>
                Last Run Time:{" "}
                {detailedItem.last_run_time
                  ? detailedItem.last_run_time
                  : "Not found"}
              </Text>

              <Text weight={500}>
                Last Run Status:{" "}
                {detailedItem.last_run_status
                  ? detailedItem.last_run_status
                  : "Not found"}
              </Text>

              <Text weight={500}>Created By: {detailedItem.created_by}</Text>

              <Text weight={500}>
                Created At: {formatDateTime(detailedItem.created_at)}
              </Text>

              <Text weight={500}>
                Updated At: {formatDateTime(detailedItem.updated_at)}
              </Text>
            </Card>
          </Grid.Col>
        </Grid>

        <Button variant="outline" mt="md" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </Container>
    </div>
  );
};

export default DetailPage;
