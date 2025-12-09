import { useState } from "react";
import { LiveKitRoom } from "@livekit/components-react";
import "@livekit/components-styles";
import Meeting from "./Meeting";
import { useControlContext } from "../Context/ControlContext";

export default function MeetingComponent() {
  //   const tokenLiveKit =
  // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0IiwianRpIjoiMTIzNCIsImlzcyI6IkFQSWl0Sm40Uzd0cmFjYiIsIm5iZiI6MTc2NDg3MDYyNywiaWF0IjoxNzY0ODcwNjI3LCJleHAiOjE3NjQ4OTIyMjcsInZpZGVvIjp7ImFnZW50IjpmYWxzZSwiY2FuUHVibGlzaCI6dHJ1ZSwiY2FuUHVibGlzaERhdGEiOnRydWUsImNhblB1Ymxpc2hTb3VyY2VzIjpbXSwiY2FuU3Vic2NyaWJlIjp0cnVlLCJjYW5TdWJzY3JpYmVNZXRyaWNzIjpmYWxzZSwiY2FuVXBkYXRlT3duTWV0YWRhdGEiOmZhbHNlLCJkZXN0aW5hdGlvblJvb20iOiIiLCJoaWRkZW4iOmZhbHNlLCJpbmdyZXNzQWRtaW4iOmZhbHNlLCJyZWNvcmRlciI6ZmFsc2UsInJvb20iOiJhYmRvIiwicm9vbUFkbWluIjpmYWxzZSwicm9vbUNyZWF0ZSI6ZmFsc2UsInJvb21Kb2luIjp0cnVlLCJyb29tTGlzdCI6ZmFsc2UsInJvb21SZWNvcmQiOmZhbHNlfSwic2lwIjp7ImFkbWluIjpmYWxzZSwiY2FsbCI6ZmFsc2V9LCJuYW1lIjoiYWJkbyIsIm1ldGFkYXRhIjoiIiwic2hhMjU2IjoiIiwia2luZCI6IiIsInJvb21Db25maWciOnt9fQ.zKWa6uTol1spnsv-N-K-P8Qp5O8S_eSwCjZeEzzSq0s";
  const urleLiveKit = "wss://centr-lmv2d5t7.livekit.cloud";
  //   const[token , setToken] = useState(tokenLiveKit);
  const tokenLiveKit = localStorage.getItem("sessionToken");

  const { mic, cameraView } = useControlContext();
  return (
    <LiveKitRoom
   //token={tokenLiveKit as any}
      serverUrl={urleLiveKit}
      connect={true}
      audio={mic}
      video={cameraView}
      //   room="abdo"
    >
      {/* {connected ?  : <div>Connecting...</div>} */}
      <Meeting />
    </LiveKitRoom>
  );
}
