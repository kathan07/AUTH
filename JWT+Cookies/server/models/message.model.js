import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  meetingId: { type: mongoose.Schema.Types.ObjectId, ref: "Meeting"},
  senderId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  content: String,
  timestamp: Date,
});

const Message = mongoose.model("Message", messageSchema);
export default Message;
