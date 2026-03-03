export default function ServingGuide({ guide, disclaimer }) {
  return (
    <section className="bg-surface py-20 px-4 border-y border-border-gold mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif mb-4">General Serving Guide</h2>
          <p className="opacity-70 italic max-w-xl mx-auto">{disclaimer}</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-accent/30 text-accent uppercase text-sm tracking-widest">
                <th className="py-4 px-6 font-medium">Size</th>
                <th className="py-4 px-6 font-medium text-center">
                  Serving (As Main)
                </th>
                <th className="py-4 px-6 font-medium text-center">
                  Serving (As Side)
                </th>
              </tr>
            </thead>
            <tbody>
              {guide.map((row, idx) => (
                <tr
                  key={idx}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <td className="py-6 px-6 font-bold">{row.size}</td>
                  <td className="py-6 px-6 text-center text-white/80">
                    {row.main_serves}
                  </td>
                  <td className="py-6 px-6 text-center text-white/80">
                    {row.side_serves}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
