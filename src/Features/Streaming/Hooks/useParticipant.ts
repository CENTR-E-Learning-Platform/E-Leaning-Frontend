import { 
  useTracks, 
  type TrackReferenceOrPlaceholder 
} from "@livekit/components-react";
import { Track } from "livekit-client";
import { useMemo } from "react";
import '@livekit/components-styles';
export const useParticipant = () => {
    
      const tracks: TrackReferenceOrPlaceholder[] = useTracks(
        [
          { source: Track.Source.Camera, withPlaceholder: true },
          { source: Track.Source.ScreenShare, withPlaceholder: false },
        ],
        { onlySubscribed: false }
      );
        const screenShareTrack = useMemo(() => 
    tracks.find(t => t.source === Track.Source.ScreenShare), 
  [tracks]);

    
        const presenterCameraTrack = useMemo(() => {
          if (!screenShareTrack) return undefined;
          return tracks.find(t => 
            t.source === Track.Source.Camera && 
            t.participant.identity === screenShareTrack.participant.identity
          );
        }, [tracks, screenShareTrack]);

          const otherCameraTracks = useMemo(() => 
            tracks.filter(t => 
              t.source === Track.Source.Camera && 
              t.participant.identity !== screenShareTrack?.participant.identity
            ), 
          [tracks, screenShareTrack]);

      return {tracks , screenShareTrack , presenterCameraTrack , otherCameraTracks}
}
