import { useRoomContext } from "@livekit/components-react";
import { ControlParticipant } from "../Types/types";
import { Role } from "../Services/Role";

export const useRole = () => {
    const room = useRoomContext();

    const broadcast = (payload: object, topic: string) => {
        const encoder = new TextEncoder();
        room.localParticipant.publishData(
            encoder.encode(JSON.stringify(payload)),
            { reliable: true, topic }
        ).catch(console.error);
    };

    const MuteParticipant = async (identity: string, isMicOn: boolean) => {
        try {
            broadcast(
                { type: isMicOn ? 'SOFT_MUTE' : 'SOFT_UNMUTE', targetIdentity: identity },
                "control"
            );
        } catch (error) {
            console.error(error);
        }
    };

    const ToggleCameraParticipant = async (identity: string, isCamEnabled: boolean, allowMic: boolean) => {
        try {
            const roomName = localStorage.getItem("sessionName") ?? "";
            const newCamAllowed = !isCamEnabled;
            ControlParticipant.identity = identity;
            ControlParticipant.roomName = roomName;
            ControlParticipant.allowMic = allowMic;
            ControlParticipant.allowCamera = newCamAllowed;
            ControlParticipant.allowScreenShare = false;
            const res = await Role(ControlParticipant);
            console.log(res.data);
            broadcast(
                { type: 'CAMERA_PERMISSION', targetIdentity: identity, enabled: newCamAllowed },
                "control"
            );
        } catch (err: any) {
            console.log("errors", err);
        }
    };

    const ToggleScreenShareParticipant = async (identity: string, isShareEnabled: boolean, allowMic: boolean) => {
        try {
            const roomName = localStorage.getItem("sessionName") ?? "";
            const newShareAllowed = !isShareEnabled;
            ControlParticipant.identity = identity;
            ControlParticipant.roomName = roomName;
            ControlParticipant.allowMic = allowMic;
            ControlParticipant.allowCamera = false;
            ControlParticipant.allowScreenShare = newShareAllowed;
            const res = await Role(ControlParticipant);
            console.log(res.data);
            broadcast(
                { type: 'SCREENSHARE_PERMISSION', targetIdentity: identity, enabled: newShareAllowed },
                "control"
            );
        } catch (err: any) {
            console.log("errors", err);
        }
    };

    const LowerHandParticipant = async (participantName: string) => {
        try {
            broadcast(
                { type: 'raisHand', targetName: participantName, content: false },
                "notifications"
            );
        } catch (error) {
            console.error(error);
        }
    };

    return {
        MuteParticipant,
        ToggleCameraParticipant,
        ToggleScreenShareParticipant,
        LowerHandParticipant
    };
};
