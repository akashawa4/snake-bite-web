import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import { Plus, Trash2, SquarePen as PenSquare, Vote, Calendar as CalendarIcon } from 'lucide-react-native';

interface Election {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  positions: ElectionPosition[];
  status: 'upcoming' | 'active' | 'completed';
}

interface ElectionPosition {
  id: string;
  title: string;
  candidates: Candidate[];
}

interface Candidate {
  id: string;
  name: string;
  course: string;
  year: string;
  image: string;
  votes: number;
}

export default function ElectionManagementScreen() {
  const { isDark } = useTheme();
  const [showAddForm, setShowAddForm] = useState(false);
  const [elections, setElections] = useState<Election[]>([
    {
      id: '1',
      title: 'Student Council Elections 2024',
      description: 'Annual student council elections for the academic year 2024-25',
      startDate: '2024-03-15',
      endDate: '2024-03-20',
      status: 'active',
      positions: [
        {
          id: 'p1',
          title: 'President',
          candidates: [
            {
              id: 'c1',
              name: 'Sarah Johnson',
              course: 'Computer Science',
              year: '3rd Year',
              image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
              votes: 245,
            },
            {
              id: 'c2',
              name: 'Michael Chen',
              course: 'Engineering',
              year: '4th Year',
              image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
              votes: 198,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <ScrollView style={[styles.container, { backgroundColor: isDark ? '#000000' : '#F2F2F7' }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: isDark ? '#FFFFFF' : '#000000' }]}>
          Election Management
        </Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: isDark ? '#1C1C1E' : '#FFFFFF' }]}
          onPress={() => setShowAddForm(true)}>
          <Plus size={20} color={isDark ? '#0A84FF' : '#007AFF'} />
          <Text style={[styles.buttonText, { color: isDark ? '#0A84FF' : '#007AFF' }]}>
            Create Election
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.electionsList}>
        {elections.map((election) => (
          <View
            key={election.id}
            style={[
              styles.electionCard,
              { backgroundColor: isDark ? '#1C1C1E' : '#FFFFFF' },
            ]}>
            <View style={styles.electionHeader}>
              <Text style={[styles.electionTitle, { color: isDark ? '#FFFFFF' : '#000000' }]}>
                {election.title}
              </Text>
              <View
                style={[
                  styles.statusBadge,
                  { backgroundColor: getStatusColor(election.status, isDark) },
                ]}>
                <Text style={styles.statusText}>{election.status}</Text>
              </View>
            </View>

            <Text style={[styles.electionDescription, { color: isDark ? '#8E8E93' : '#6B7280' }]}>
              {election.description}
            </Text>

            <View style={styles.electionDates}>
              <View style={styles.dateItem}>
                <CalendarIcon size={16} color={isDark ? '#8E8E93' : '#6B7280'} />
                <Text style={[styles.dateText, { color: isDark ? '#8E8E93' : '#6B7280' }]}>
                  Start: {election.startDate}
                </Text>
              </View>
              <View style={styles.dateItem}>
                <CalendarIcon size={16} color={isDark ? '#8E8E93' : '#6B7280'} />
                <Text style={[styles.dateText, { color: isDark ? '#8E8E93' : '#6B7280' }]}>
                  End: {election.endDate}
                </Text>
              </View>
            </View>

            {election.positions.map((position) => (
              <View key={position.id} style={styles.positionSection}>
                <Text style={[styles.positionTitle, { color: isDark ? '#FFFFFF' : '#000000' }]}>
                  {position.title}
                </Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {position.candidates.map((candidate) => (
                    <View
                      key={candidate.id}
                      style={[
                        styles.candidateCard,
                        { backgroundColor: isDark ? '#2C2C2E' : '#F2F2F7' },
                      ]}>
                      <Image
                        source={{ uri: candidate.image }}
                        style={styles.candidateImage}
                      />
                      <Text style={[styles.candidateName, { color: isDark ? '#FFFFFF' : '#000000' }]}>
                        {candidate.name}
                      </Text>
                      <Text style={[styles.candidateDetails, { color: isDark ? '#8E8E93' : '#6B7280' }]}>
                        {candidate.course}
                      </Text>
                      <Text style={[styles.candidateDetails, { color: isDark ? '#8E8E93' : '#6B7280' }]}>
                        {candidate.year}
                      </Text>
                      <Text style={[styles.voteCount, { color: isDark ? '#0A84FF' : '#007AFF' }]}>
                        {candidate.votes} votes
                      </Text>
                    </View>
                  ))}
                </ScrollView>
              </View>
            ))}

            <View style={styles.electionActions}>
              <TouchableOpacity style={styles.actionButton}>
                <PenSquare size={20} color={isDark ? '#0A84FF' : '#007AFF'} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Trash2 size={20} color={isDark ? '#FF453A' : '#FF3B30'} />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

function getStatusColor(status: string, isDark: boolean) {
  switch (status) {
    case 'active':
      return isDark ? '#30D158' : '#34C759';
    case 'completed':
      return isDark ? '#8E8E93' : '#8E8E93';
    case 'upcoming':
      return isDark ? '#FF9F0A' : '#FF9500';
    default:
      return isDark ? '#8E8E93' : '#8E8E93';
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    gap: 8,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: 'Inter_600SemiBold',
  },
  electionsList: {
    padding: 20,
  },
  electionCard: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  electionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  electionTitle: {
    fontSize: 18,
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
    textTransform: 'capitalize',
  },
  electionDescription: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    marginBottom: 12,
  },
  electionDates: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  dateItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dateText: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
  },
  positionSection: {
    marginTop: 16,
  },
  positionTitle: {
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
    marginBottom: 12,
  },
  candidateCard: {
    padding: 12,
    borderRadius: 8,
    marginRight: 12,
    width: 160,
  },
  candidateImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
    alignSelf: 'center',
  },
  candidateName: {
    fontSize: 14,
    fontFamily: 'Inter_600SemiBold',
    textAlign: 'center',
  },
  candidateDetails: {
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
    textAlign: 'center',
    marginTop: 2,
  },
  voteCount: {
    fontSize: 12,
    fontFamily: 'Inter_600SemiBold',
    textAlign: 'center',
    marginTop: 8,
  },
  electionActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
    marginTop: 16,
  },
  actionButton: {
    padding: 8,
  },
});