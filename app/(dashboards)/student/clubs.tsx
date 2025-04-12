import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import { Flag } from 'lucide-react-native';

export default function StudentClubsScreen() {
  const { isDark } = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: isDark ? '#000000' : '#F2F2F7' }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: isDark ? '#FFFFFF' : '#000000' }]}>
          Student Clubs
        </Text>
      </View>
      {/* Add your student clubs content here */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
  },
});