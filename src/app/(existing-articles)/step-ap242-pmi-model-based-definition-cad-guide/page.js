
import Link from 'next/link';

export const metadata = {
  title: 'STEP AP242, PMI and Model-Based Definition',
  description:
    'Understand STEP AP242, product manufacturing information (PMI), GD&T, and how semantic 3D product data supports CAD interoperability.',
  alternates: {
    canonical: '/step-ap242-pmi-model-based-definition-cad-guide',
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-black text-slate-100">
      <main className="mx-auto max-w-4xl px-4 py-12">
        <nav className="mb-6 text-sm text-slate-400">
          <Link href="/" className="hover:text-white">← Back to Home</Link>
        </nav>

        <article className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 sm:p-10">
          <div className="mb-5 text-xs font-bold uppercase tracking-wider text-blue-400">
            CAD Interoperability · 7 min read
          </div>

          <h1 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl">
            STEP AP242, PMI and Model-Based Definition
          </h1>

          <p className="mb-8 text-lg leading-8 text-slate-300">
            Moving a 3D model between CAD systems is not always enough.
            Manufacturing teams may also need dimensions, tolerances, datums,
            and other product manufacturing information (PMI). STEP AP242 supports
            the exchange of product-model data, including workflows related to
            model-based definition.
          </p>

          <div className="space-y-7 leading-7 text-slate-300">
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">What Is STEP AP242?</h2>
              <p>
                STEP is a family of standards for exchanging product data between
                engineering systems. AP242 supports the exchange of product shape
                and related engineering information. When compatible applications
                preserve the relevant data, the receiving system can obtain more
                than a visually similar surface model.
              </p>
              <p className="mt-3">
                A STEP file does not guarantee perfect interoperability. CAD systems
                can support different subsets of a standard, and import settings
                can affect the result. Validate critical geometry and manufacturing
                information after every important transfer.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">What Does PMI Include?</h2>
              <p>
                Product manufacturing information can include dimensions, geometric
                dimensioning and tolerancing (GD&T), datum references, surface
                finish information, and notes associated with a product definition.
                Semantic PMI stores meaning in a structured form that compatible
                downstream applications can interpret.
              </p>
              <p className="mt-3">
                This is different from an annotation that is merely displayed as
                graphics. A tolerance may look correct on screen but still be
                unusable for automated inspection planning if its meaning is not
                represented in machine-readable data.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                What Is Model-Based Definition?
              </h2>
              <p>
                Model-Based Definition (MBD) uses a 3D product definition as a
                central source of engineering information. Depending on the
                workflow, the model can carry geometry, annotations, tolerances,
                and manufacturing notes, reducing reliance on separate 2D drawings.
              </p>
              <p className="mt-3">
                MBD is a process as well as a data format. Teams still need agreed
                information requirements, review procedures, version control,
                and clear responsibility for approving engineering changes.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                A Reliable STEP AP242 Workflow
              </h2>
              <ol className="list-decimal space-y-2 pl-6">
                <li><strong className="text-white">Prepare the model.</strong> Confirm units, coordinate conventions, model structure, and required PMI.</li>
                <li><strong className="text-white">Export to AP242.</strong> Select export options that include the required product data.</li>
                <li><strong className="text-white">Import into the target CAD system.</strong> Review warnings about unsupported entities or missing data.</li>
                <li><strong className="text-white">Validate the result.</strong> Check geometry, critical dimensions, datums, and semantic PMI against the source.</li>
                <li><strong className="text-white">Document acceptance.</strong> Record software versions, settings, and known limitations.</li>
              </ol>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                Common Interoperability Problems
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li><strong className="text-white">Missing PMI:</strong> data may be omitted during export or unsupported during import.</li>
                <li><strong className="text-white">Graphic-only annotations:</strong> annotations may be visible without being semantically usable.</li>
                <li><strong className="text-white">Unit or orientation errors:</strong> inconsistent settings can cause scaling or placement problems.</li>
                <li><strong className="text-white">Feature history loss:</strong> neutral exchange should not be assumed to preserve the native parametric feature tree.</li>
                <li><strong className="text-white">Different implementations:</strong> applications may interpret supported standard features differently.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">Frequently Asked Questions</h2>
              <h3 className="mb-1 text-lg font-semibold text-white">Is STEP AP242 the same as a native CAD file?</h3>
              <p>
                No. STEP is a standardized exchange format. It can transfer
                supported product data, but native feature history and
                application-specific behavior may not survive the exchange.
              </p>

              <h3 className="mb-1 mt-4 text-lg font-semibold text-white">
                Does STEP AP242 guarantee that all PMI will transfer?
              </h3>
              <p>
                No. Results depend on the exported data, application capabilities,
                and configuration. Validate the receiving model before using it
                for manufacturing or inspection.
              </p>
            </section>

            <section className="border-t border-zinc-800 pt-5">
              <h2 className="mb-3 text-xl font-semibold text-white">Further Reading</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <a className="text-blue-400 underline" href="https://www.iso.org/standard/63141.html" target="_blank" rel="noreferrer">
                    ISO: STEP AP242 standard information
                  </a>
                </li>
                <li>
                  <a className="text-blue-400 underline" href="https://www.nist.gov/" target="_blank" rel="noreferrer">
                    NIST: Engineering and manufacturing research
                  </a>
                </li>
                <li>
                  <a className="text-blue-400 underline" href="https://www.mbx-if.org/home/" target="_blank" rel="noreferrer">
                    Model-Based Enterprise resources
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </article>
      </main>
    </div>
  );
}
