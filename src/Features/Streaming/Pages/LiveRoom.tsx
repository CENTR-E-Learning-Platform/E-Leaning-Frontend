import { useState } from "react";
import { LiveKitRoom } from "@livekit/components-react";
import "@livekit/components-styles";
import Meeting from "./Meeting";
import { useControlContext } from "../Context/ControlContext";

export default function MeetingComponent() {
    const tokenLiveKit =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4MWVhZDQ2Yi03YmRkLTQ5ZWEtOTQ3ZC0zOWUxZDg5YzZhOTciLCJqdGkiOiI4MWVhZDQ2Yi03YmRkLTQ5ZWEtOTQ3ZC0zOWUxZDg5YzZhOTciLCJpc3MiOiJBUElpdEpuNFM3dHJhY2IiLCJuYmYiOjE3NzExNzU4MjIsImlhdCI6MTc3MTE3NTgyMiwiZXhwIjoxNzcxMTc5NDIyLCJ2aWRlbyI6eyJhZ2VudCI6ZmFsc2UsImNhblB1Ymxpc2giOnRydWUsImNhblB1Ymxpc2hEYXRhIjp0cnVlLCJjYW5QdWJsaXNoU291cmNlcyI6W10sImNhblN1YnNjcmliZSI6dHJ1ZSwiY2FuU3Vic2NyaWJlTWV0cmljcyI6ZmFsc2UsImNhblVwZGF0ZU93bk1ldGFkYXRhIjpmYWxzZSwiZGVzdGluYXRpb25Sb29tIjoiIiwiaGlkZGVuIjpmYWxzZSwiaW5ncmVzc0FkbWluIjpmYWxzZSwicmVjb3JkZXIiOmZhbHNlLCJyb29tIjoic2Vzc2lvbl85OTgwOTRlZS1hMTAxLTRiODMtOWVhOS0wNWU0MzZjMjIxMmUiLCJyb29tQWRtaW4iOmZhbHNlLCJyb29tQ3JlYXRlIjpmYWxzZSwicm9vbUpvaW4iOnRydWUsInJvb21MaXN0IjpmYWxzZSwicm9vbVJlY29yZCI6dHJ1ZX0sInNpcCI6eyJhZG1pbiI6ZmFsc2UsImNhbGwiOmZhbHNlfSwibmFtZSI6InNlc3Npb25fOTk4MDk0ZWUtYTEwMS00YjgzLTllYTktMDVlNDM2YzIyMTJlIiwibWV0YWRhdGEiOiJUZWFjaGVyIiwic2hhMjU2IjoiIiwia2luZCI6IiIsInJvb21Db25maWciOnt9fQ.W1uJZra6Dq5qg5GbFVqHlNXp9ePGTnTrAkGwd_L-QLQ"

;
  const urleLiveKit = "wss://centr-lmv2d5t7.livekit.cloud";
  //   const[token , setToken] = useState(tokenLiveKit);
  // const tokenLiveKit = localStorage.getItem("sessionToken");

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
