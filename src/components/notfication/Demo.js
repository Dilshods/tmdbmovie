import { Notification } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

function DemoNotification() {
  return (
    <>
      <Notification
        icon={<IconCheck size="1.2rem" />}
        withBorder
        color="lime"
        radius="xs"
        title="We notify you that"
      >
        You are now obligated to give a star to Mantine project on GitHub
      </Notification>
    </>
  );
}
export default DemoNotification;
