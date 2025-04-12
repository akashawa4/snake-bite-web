import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Switch,
} from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import { Send, CircleAlert as AlertCircle, ThumbsUp, MessageCircle } from 'lucide-react-native';

const COMPLAINTS = [
  {
    id: '1',
    title: 'Cafeteria Food Quality',
    description: 'The food quality in the cafeteria has deteriorated over the past week.',
    status: 'Under Review',
    votes: 45,
    comments: 12,
    isAnonymous: true,
    date: '2024-03-10',
  },
  {
    id: '2',
    title: 'Library Hours Extension',
    description: 'Request to extend library hours during exam period.',
    status: 'Resolved',
    votes: 89,
    comments: 23,
    isAnonymous: false,
    date: '2024-03-09',
  },
];

export default function ComplaintsScreen() {
  const { isDark } = useTheme();
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [complaintTitle, setComplaintTitle] = useState('');
  const [complaintDescription, setComplaintDescription] = useState('');

  const handleSubmit = () => {
    // Handle complaint submission
    setComplaintTitle('');
    setComplaintDescription('');
    setIsAnonymous(false);
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: isDark ? '#000000' : '#F2F2F7' }]}>
      <View style={[styles.section, { backgroundColor: isDark ? '#1C1C1E' : '#FFFFFF' }]}>
        <Text style={[styles.sectionTitle, { color: isDark ? '#FFFFFF' : '#000000' }]}>
          Submit a Complaint
        </Text>
        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: isDark ? '#2C2C2E' : '#F2F2F7',
              color: isDark ? '#FFFFFF' : '#000000',
            },
          ]}
          placeholder="Title"
          placeholderTextColor={isDark ? '#8E8E93' : '#8E8E93'}
          value={complaintTitle}
          onChangeText={setComplaintTitle}
        />
        <TextInput
          style={[
            styles.input,
            styles.textArea,
            {
              backgroundColor: isDark ? '#2C2C2E' : '#F2F2F7',
              color: isDark ? '#FFFFFF' : '#000000',
            },
          ]}
          placeholder="Description"
          placeholderTextColor={isDark ? '#8E8E93' : '#8E8E93'}
          multiline
          numberOfLines={4}
          value={complaintDescription}
          onChangeText={setComplaintDescription}
        />
        <View style={styles.anonymousToggle}>
          <Text style={[styles.toggleText, { color: isDark ? '#FFFFFF' : '#000000' }]}>
            Submit Anonymously
          </Text>
          <Switch value={isAnonymous} onValueChange={setIsAnonymous} />
        </View>
        <TouchableOpacity
          style={[
            styles.submitButton,
            { backgroundColor: isDark ? '#0A84FF' : '#007AFF' },
          ]}
          onPress={handleSubmit}>
          <Send size={20} color="#FFFFFF" style={{ marginRight: 8 }} />
          <Text style={styles.submitButtonText}>Submit Complaint</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.section, { backgroundColor: isDark ? '#1C1C1E' : '#FFFFFF' }]}>
        <Text style={[styles.sectionTitle, { color: isDark ? '#FFFFFF' : '#000000' }]}>
          Recent Complaints
        </Text>
        {COMPLAINTS.map((complaint) => (
          <View
            key={complaint.id}
            style={[
              styles.complaintCard,
              { backgroundColor: isDark ? '#2C2C2E' : '#F2F2F7' },
            ]}>
            <View style={styles.complaintHeader}>
              <Text style={[styles.complaintTitle, { color: isDark ? '#FFFFFF' : '#000000' }]}>
                {complaint.title}
              </Text>
              <View
                style={[
                  styles.statusBadge,
                  {
                    backgroundColor:
                      complaint.status === 'Resolved'
                        ? isDark
                          ? '#30D158'
                          : '#34C759'
                        : isDark
                        ? '#FF9F0A'
                        : '#FF9500',
                  },
                ]}>
                <Text style={styles.statusText}>{complaint.status}</Text>
              </View>
            </View>
            <Text style={[styles.complaintDescription, { color: isDark ? '#8E8E93' : '#8E8E93' }]}>
              {complaint.description}
            </Text>
            <View style={styles.complaintFooter}>
              <View style={styles.footerItem}>
                <ThumbsUp size={16} color={isDark ? '#8E8E93' : '#8E8E93'} />
                <Text style={[styles.footerText, { color: isDark ? '#8E8E93' : '#8E8E93' }]}>
                  {complaint.votes}
                </Text>
              </View>
              <View style={styles.footerItem}>
                <MessageCircle size={16} color={isDark ? '#8E8E93' : '#8E8E93'} />
                <Text style={[styles.footerText, { color: isDark ? '#8E8E93' : '#8E8E93' }]}>
                  {complaint.comments}
                </Text>
              </View>
              {complaint.isAnonymous && (
                <View style={styles.footerItem}>
                  <AlertCircle size={16} color={isDark ? '#8E8E93' : '#8E8E93'} />
                  <Text style={[styles.footerText, { color: isDark ? '#8E8E93' : '#8E8E93' }]}>
                    Anonymous
                  </Text>
                </View>
              )}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    margin: 16,
    padding: 16,
    borderRadius: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter_600SemiBold',
    marginBottom: 16,
  },
  input: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    fontFamily: 'Inter_400Regular',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  anonymousToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  toggleText: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
  },
  submitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
  },
  complaintCard: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  complaintHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  complaintTitle: {
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Inter_600SemiBold',
  },
  complaintDescription: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    marginBottom: 12,
  },
  complaintFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  footerText: {
    marginLeft: 4,
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
  },
});