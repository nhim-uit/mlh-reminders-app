import { Tabs, useRouter } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import { theme } from "../theme";
import { StyleSheet } from "react-native";

export default function TabsLayout() {
  const router = useRouter();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.green100,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Reminders",
          tabBarIcon: ({ color }) => <Feather name="list" color={color} size={24} />,
          headerRight: () => (
            <Feather
              name="plus"
              size={24}
              color={theme.colors.blue900}
              style={styles.addReminder}
              onPress={() => router.push("/addReminder")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="completed"
        options={{
          title: "Completed Reminders",
          tabBarIcon: ({ color }) => <Feather name="check-square" color={color} size={24} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  addReminder: {
    marginRight: 20,
  },
});
