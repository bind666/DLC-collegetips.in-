import TutorialCard from "../components/TutorialCard";

const Tutorials = () => {
    const tutorials = [
        { title: "WhatsApp Basics", video: "https://www.youtube.com/watch?v=sghayXZ_RK0" },
        { title: "Using Paytm", video: "https://www.youtube.com/watch?v=jExQtcr0VRc" },
        { title: "Google Maps Guide", video: "https://www.youtube.com/watch?v=QULMYsdWXpU" },
        // { title: "Offline Sample Video", video: "/assets/paytm.mp4" }, // optional local file
    ];

    return (
        <div className="p-6 grid gap-6 md:grid-cols-3">
            {tutorials.map((tut, i) => (
                <TutorialCard key={i} title={tut.title} video={tut.video} />
            ))}
        </div>
    );
};

export default Tutorials;
