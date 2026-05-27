
const initialValues = {
  Price: 20,
  Title: "",
  StartTime: "",
  DurationMinutes: 60,
  weeksNumber: 1,
  Grade: 0,
  Reminder: "01:00:00",
  Description: "",
  Subject: 0,
};

const ControlParticipant = {
  identity: "",
  roomName: "",
  allowMic: false,
  allowCamera: false,
  allowScreenShare: false
}

export { initialValues, ControlParticipant }