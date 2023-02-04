export default function EmbedVideo() {
  return (
    <div className="flex flex-col rounded-3xl overflow-hidden w-full bg-primary-800">
      <iframe
        className="w-full overflow-hidden rounded-3xl aspect-video"
        src="https://player.vimeo.com/video/779299719?h=ae457fbb11?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0"
      />

      <span className="p-6 text-white font-semibold text-xl">
        Hear what our clients have to say!
      </span>
    </div>
  )
}
