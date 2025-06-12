const TutorialCard = ({ title, video }) => {
    const isYouTube = video.includes("youtube.com") || video.includes("youtu.be");

    return (
        <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">{title}</h2>

            {isYouTube ? (
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        className="w-full h-60 rounded"
                        src={video.replace("watch?v=", "embed/")}
                        title={title}
                        frameBorder="0"
                        allowFullScreen
                    />
                </div>
            ) : (
                <video
                    controls
                    className="w-full rounded"
                    src={video}
                    title={title}
                />
            )}
        </div>
    );
};

export default TutorialCard;
