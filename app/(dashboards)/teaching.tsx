import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import { Users, BookOpen, Calendar, FileText, Clock, SquareCheck as CheckSquare, LogOut } from 'lucide-react-native';
import { useRouter } from 'expo-router';

export default function TeachingDashboard() {
  const { isDark } = useTheme();
  const router = useRouter();

  const handleLogout = () => {
    router.replace('/');
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: isDark ? '#000000' : '#F2F2F7' }]}
      contentContainerStyle={styles.content}>
      <View style={[styles.profileCard, { backgroundColor: isDark ? '#1C1C1E' : '#FFFFFF' }]}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400' }}
          style={styles.avatar}
        />
        <View style={styles.profileInfo}>
          <Text style={[styles.name, { color: isDark ? '#FFFFFF' : '#000000' }]}>Dr. Michael Chen</Text>
          <Text style={[styles.details, { color: isDark ? '#8E8E93' : '#6B7280' }]}>
            Professor - Computer Science{'\n'}
            Department of Engineering
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: isDark ? '#FFFFFF' : '#000000' }]}>
          Today's Classes
        </Text>
        <View style={[styles.scheduleCard, { backgroundColor: isDark ? '#1C1C1E' : '#FFFFFF' }]}>
          <View style={styles.classItem}>
            <Clock size={20} color={isDark ? '#0A84FF' : '#007AFF'} />
            <View style={styles.classInfo}>
              <Text style={[styles.className, { color: isDark ? '#FFFFFF' : '#000000' }]}>
                Advanced Programming
              </Text>
              <Text style={[styles.classDetails, { color: isDark ? '#8E8E93' : '#6B7280' }]}>
                9:00 AM - 10:30 AM • Room 301
              </Text>
              <Text style={[styles.studentCount, { color: isDark ? '#8E8E93' : '#6B7280' }]}>
                35 Students
              </Text>
            </View>
          </View>
          <View style={styles.classItem}>
            <Clock size={20} color={isDark ? '#0A84FF' : '#007AFF'} />
            <View style={styles.classInfo}>
              <Text style={[styles.className, { color: isDark ? '#FFFFFF' : '#000000' }]}>
                Software Engineering
              </Text>
              <Text style={[styles.classDetails, { color: isDark ? '#8E8E93' : '#6B7280' }]}>
                11:00 AM - 12:30 PM • Room 405
              </Text>
              <Text style={[styles.studentCount, { color: isDark ? '#8E8E93' : '#6B7280' }]}>
                42 Students
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.quickActions}>
        <TouchableOpacity
          style={[styles.actionCard, { backgroundColor: isDark ? '#1C1C1E' : '#FFFFFF' }]}>
          <Users size={24} color={isDark ? '#0A84FF' : '#007AFF'} />
          <Text style={[styles.actionText, { color: isDark ? '#FFFFFF' : '#000000' }]}>
            My Students
          </Text>
          <Text style={[styles.actionCount, { color: isDark ? '#8E8E93' : '#6B7280' }]}>
            128 Total
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionCard, { backgroundColor: isDark ? '#1C1C1E' : '#FFFFFF' }]}>
          <BookOpen size={24} color={isDark ? '#0A84FF' : '#007AFF'} />
          <Text style={[styles.actionText, { color: isDark ? '#FFFFFF' : '#000000' }]}>
            Course Materials
          </Text>
          <Text style={[styles.actionCount, { color: isDark ? '#8E8E93' : '#6B7280' }]}>
            24 Files
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionCard, { backgroundColor: isDark ? '#1C1C1E' : '#FFFFFF' }]}>
          <Calendar size={24} color={isDark ? '#0A84FF' : '#007AFF'} />
          <Text style={[styles.actionText, { color: isDark ? '#FFFFFF' : '#000000' }]}>
            Attendance
          </Text>
          <Text style={[styles.actionCount, { color: isDark ? '#8E8E93' : '#6B7280' }]}>
            Mark Today
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionCard, { backgroundColor: isDark ? '#1C1C1E' : '#FFFFFF' }]}>
          <FileText size={24} color={isDark ? '#0A84FF' : '#007AFF'} />
          <Text style={[styles.actionText, { color: isDark ? '#FFFFFF' : '#000000' }]}>
            Assignments
          </Text>
          <Text style={[styles.actionCount, { color: isDark ? '#8E8E93' : '#6B7280' }]}>
            8 Pending
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <LogOut size={20} color="#FF453A" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  profileCard: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileInfo: {
    marginLeft: 16,
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontFamily: 'Inter_600SemiBold',
  },
  details: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    marginTop: 4,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter_600SemiBold',
    marginBottom: 12,
  },
  scheduleCard: {
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  classItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  classInfo: {
    marginLeft: 12,
    flex: 1,
  },
  className: {
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
  },
  classDetails: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    marginTop: 2,
  },
  studentCount: {
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
    marginTop: 4,
  },
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionCard: {
    width: '48%',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  actionText: {
    fontSize: 14,
    fontFamily: 'Inter_600SemiBold',
    marginTop: 8,
    textAlign: 'center',
  },
  actionCount: {
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
    marginTop: 4,
    textAlign: 'center',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    padding: 12,
  },
  logoutText: {
    marginLeft: 8,
    color: '#FF453A',
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
  },
});