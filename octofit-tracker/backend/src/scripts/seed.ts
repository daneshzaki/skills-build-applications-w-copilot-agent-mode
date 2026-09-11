import mongoose from 'mongoose';
import Activity from '../models/Activity.js';
import Leaderboard from '../models/Leaderboard.js';
import Team from '../models/Team.js';
import User from '../models/User.js';
import Workout from '../models/Workout.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.create([
      { username: 'maya-chen', email: 'maya@example.com', displayName: 'Maya Chen', totalPoints: 420 },
      { username: 'leo-martin', email: 'leo@example.com', displayName: 'Leo Martin', totalPoints: 360 },
      { username: 'ava-patel', email: 'ava@example.com', displayName: 'Ava Patel', totalPoints: 285 },
    ]);

    await Team.create([
      { name: 'Trail Blazers', description: 'Outdoor endurance enthusiasts', members: [users[0]._id, users[1]._id], totalPoints: 780 },
      { name: 'Core Command', description: 'Strength and mobility focused', members: [users[2]._id], totalPoints: 285 },
    ]);

    await Activity.create([
      { user: users[0]._id, type: 'Running', durationMinutes: 35, points: 180, recordedAt: new Date('2026-09-08') },
      { user: users[1]._id, type: 'Cycling', durationMinutes: 45, points: 150, recordedAt: new Date('2026-09-09') },
      { user: users[2]._id, type: 'Yoga', durationMinutes: 30, points: 120, recordedAt: new Date('2026-09-10') },
    ]);

    await Leaderboard.create([
      { user: users[0]._id, rank: 1, points: 420, period: 'September 2026' },
      { user: users[1]._id, rank: 2, points: 360, period: 'September 2026' },
      { user: users[2]._id, rank: 3, points: 285, period: 'September 2026' },
    ]);

    await Workout.create([
      { title: 'Morning Momentum', description: 'A balanced full-body starter session', difficulty: 'beginner', durationMinutes: 20, focus: 'Full body' },
      { title: 'Power Builder', description: 'Progressive strength work for experienced athletes', difficulty: 'advanced', durationMinutes: 45, focus: 'Strength' },
      { title: 'Reset and Restore', description: 'Gentle mobility and breathing exercises', difficulty: 'intermediate', durationMinutes: 25, focus: 'Mobility' },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
