export default function Story() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
      <div className="flex-1 relative">
        <div className="w-full aspect-square rounded-[3rem] bg-sky-100 overflow-hidden shadow-2xl">
          <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800" alt="Agency" className="w-full h-full object-cover" />
        </div>
        <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[2.5rem] shadow-2xl hidden md:block border border-sky-50">
          <h4 className="text-4xl font-black text-sky-500">10k+</h4>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Happy Travelers</p>
        </div>
      </div>
      <div className="flex-1">
        <span className="text-sky-500 font-black tracking-widest uppercase text-[10px]">Our Story</span>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 leading-tight">
          Lorem, ipsum dolor <br /> Lorem, ipsum dolor
        </h2>
        <p className="mt-6 text-slate-500 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse recusandae labore beatae debitis ratione ad a aspernatur ut voluptatum harum voluptates numquam, aut perspiciatis odit nesciunt eaque soluta omnis delectus.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-6">
          <div>
            <h5 className="font-black text-slate-900 uppercase text-xs italic">Expert Guides</h5>
            <p className="text-slate-500 text-sm mt-1">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
          <div>
            <h5 className="font-black text-slate-900 uppercase text-xs italic">Global Reach</h5>
            <p className="text-slate-500 text-sm mt-1">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}