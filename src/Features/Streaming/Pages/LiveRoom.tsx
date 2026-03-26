import { useState } from "react";
import { LiveKitRoom } from "@livekit/components-react";
import "@livekit/components-styles";
import Meeting from "./Meeting";
import { useControlContext } from "../Context/ControlContext";

export default function MeetingComponent() {
//     const _tokenLiveKit =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4MWVhZDQ2Yi03YmRkLTQ5ZWEtOTQ3ZC0zOWUxZDg5YzZhOTciLCJqdGkiOiI4MWVhZDQ2Yi03YmRkLTQ5ZWEtOTQ3ZC0zOWUxZDg5YzZhOTciLCJpc3MiOiJBUElpdEpuNFM3dHJhY2IiLCJuYmYiOjE3NzE2MjUxMjAsImlhdCI6MTc3MTYyNTEyMCwiZXhwIjoxNzcxNjI4NzIwLCJ2aWRlbyI6eyJhZ2VudCI6ZmFsc2UsImNhblB1Ymxpc2giOnRydWUsImNhblB1Ymxpc2hEYXRhIjp0cnVlLCJjYW5QdWJsaXNoU291cmNlcyI6W10sImNhblN1YnNjcmliZSI6dHJ1ZSwiY2FuU3Vic2NyaWJlTWV0cmljcyI6ZmFsc2UsImNhblVwZGF0ZU93bk1ldGFkYXRhIjpmYWxzZSwiZGVzdGluYXRpb25Sb29tIjoiIiwiaGlkZGVuIjpmYWxzZSwiaW5ncmVzc0FkbWluIjpmYWxzZSwicmVjb3JkZXIiOmZhbHNlLCJyb29tIjoic2Vzc2lvbl81YWUxNGQ0Yy1kMWVhLTQ1NzctODhkZC03OWY0OTJiZDk3M2EiLCJyb29tQWRtaW4iOmZhbHNlLCJyb29tQ3JlYXRlIjpmYWxzZSwicm9vbUpvaW4iOnRydWUsInJvb21MaXN0IjpmYWxzZSwicm9vbVJlY29yZCI6dHJ1ZX0sInNpcCI6eyJhZG1pbiI6ZmFsc2UsImNhbGwiOmZhbHNlfSwibmFtZSI6InNlc3Npb25fNWFlMTRkNGMtZDFlYS00NTc3LTg4ZGQtNzlmNDkyYmQ5NzNhIiwibWV0YWRhdGEiOiJUZWFjaGVyIiwic2hhMjU2IjoiIiwia2luZCI6IiIsInJvb21Db25maWciOnt9fQ.pgleu3Koq2PIE3B2RE4lRS3eEYjBDIPCdYHXay5RUaM"



// ;
  const urleLiveKit = "wss://centr-lmv2d5t7.livekit.cloud";
  //   const[token , setToken] = useState(tokenLiveKit);
  const tokenLiveKit = localStorage.getItem("sessionToken");

  const { mic, cameraView , join } = useControlContext();
  return (
    <LiveKitRoom
      token={tokenLiveKit as any}
      serverUrl={urleLiveKit}
      connect={join}
      audio={mic}
      video={cameraView}
    >
      <Meeting />
    </LiveKitRoom>
  );
}
