import { View, Text, StyleSheet } from "react-native";
import { theme } from "../../theme"; // Adjust the import path as necessary

export default function CompletedReminders() {
    return (
        <View style={styles.container}>
            <Text>Completed Reminders</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: theme.colors.white,
        flex: 1,
        justifyContent: 'center',
    },
});