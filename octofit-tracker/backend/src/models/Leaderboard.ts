import { model, Schema } from 'mongoose';

const leaderboardSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    rank: { type: Number, required: true, min: 1 },
    points: { type: Number, required: true, min: 0 },
    period: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

export default model('Leaderboard', leaderboardSchema);
