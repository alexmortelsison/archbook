export default function SubHero() {
  return (
    <div className="mt-24 min-h-screen max-w-7xl mx-auto">
      <h2 className="font-extrabold text-4xl w-[700px] mt-16 tracking-tighter">
        Expert Precision & Innovation
      </h2>
      <div className="border rounded-xl p-2 mt-8">
        <div className="border rounded-xl bg-gradient-to-r from-slate-600 to-gray-600 px-24">
          <video
            loop
            muted
            autoPlay={true}
            src="/int.mp4"
            className="rounded-xl p-16"
          ></video>
        </div>
      </div>
    </div>
  );
}
