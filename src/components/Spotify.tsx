import { useLanyard } from "use-lanyard";


const Spotify = () => {
    const { data: user } = useLanyard("711325368333893722");

    if (!user || !user.spotify) {
        return null;
    }

    return (
        <div
            className="w-50 h-7 pt-5 flex flex-col items-start justify-center"
        >
            <a
			target="_blank"
			rel="noreferrer"
			className="text-justify text-sm font-mono text-white"
			href={`https://open.spotify.com/track/${user.spotify.track_id}`}
		    >
			<span className="truncate">
				Listening to {user.spotify.song} by {user.spotify.artist}
			</span>

		    </a>
        </div>
    );
};

export default Spotify;