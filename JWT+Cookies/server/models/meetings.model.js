import mongoose from "mongoose";

const meetingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
  },
});

const Meeting = mongoose.model("Metting", meetingSchema);
export default Meeting;
