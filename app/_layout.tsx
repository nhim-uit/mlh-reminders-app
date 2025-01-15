// app/_layout.tsx

import React from "react";
import { Stack, useRouter } from "expo-router";
import Feather from "@expo/vector-icons/Feather";

export default function RootLayout() {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false, headerShadowVisible: true }} />
      <Stack.Screen
        name="addReminder"
        options={{
          title: "Add New Reminder",
          presentation: "modal",
          headerLeft: () => <Feather name="chevrons-left" onPress={() => router.back()}/>,
        }}
      />
    </Stack>
  );
}
