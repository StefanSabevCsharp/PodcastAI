export default function PodcastDetails({ params }: {
    params: {
        podcastId: string
    }
}) {
    return (
    <p className="text-white-1">Podcast Details for {params.podcastId}</p>
  );
}