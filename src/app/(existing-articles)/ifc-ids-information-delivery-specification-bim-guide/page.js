
import Link from 'next/link';

export const metadata = {
  title: 'IFC IDS Guide: Automated BIM Information Checking',
  description:
    'Learn how Information Delivery Specification (IDS) defines machine-readable BIM requirements and supports automated checking of IFC model data.',
  alternates: {
    canonical: '/ifc-ids-information-delivery-specification-bim-guide',
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
            OpenBIM · 7 min read
          </div>

          <h1 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl">
            IFC IDS: Automating BIM Information Requirements
          </h1>

          <p className="mb-8 text-lg leading-8 text-slate-300">
            A BIM model can look complete while still missing required properties,
            classifications, or identifiers. Information Delivery Specification
            (IDS) helps turn information requirements into machine-readable rules
            that can be checked against IFC data.
          </p>

          <div className="space-y-7 leading-7 text-slate-300">
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">What Is IDS?</h2>
              <p>
                IDS is a buildingSMART standard for defining information that
                specific objects in an IFC model must provide. A project team can
                specify which properties, values, classifications, or entity types
                are required at a particular delivery stage.
              </p>
              <p className="mt-3">
                IDS does not replace IFC. IFC carries model information, while IDS
                describes requirements against that information. IDS is also not
                a complete geometric clash detector or a universal building-code
                checker; its main focus is structured information requirements.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">How an IDS Check Works</h2>
              <ol className="list-decimal space-y-2 pl-6">
                <li><strong className="text-white">Define requirements.</strong> Identify the objects and information required for delivery.</li>
                <li><strong className="text-white">Export the model.</strong> Deliver an IFC file from the authoring application.</li>
                <li><strong className="text-white">Validate the IFC.</strong> An IDS-capable checker tests the model against the requirements.</li>
                <li><strong className="text-white">Resolve failures.</strong> Correct missing or invalid information and run the check again.</li>
              </ol>
              <p className="mt-3">
                A useful report distinguishes missing properties from values that
                fail a constraint. This helps teams identify what needs correction
                and who should address it.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                Example: Checking Door Information
              </h2>
              <p>
                Imagine a handover requirement stating that every door must have
                a fire-rating property. An IDS specification can target relevant
                door objects and require that property to be present. A stricter
                rule may constrain its value, provided the rule is supported by
                the IDS version and validation tool being used.
              </p>
              <p className="mt-3">
                The property name, property set, data type, and permitted values
                must match the project's information standard. Inconsistent naming
                conventions can cause avoidable validation failures.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                IDS Compared with Other BIM Checks
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li><strong className="text-white">IFC schema validation:</strong> checks whether the file follows the IFC data schema.</li>
                <li><strong className="text-white">IDS checking:</strong> checks whether defined information requirements are met.</li>
                <li><strong className="text-white">Clash detection:</strong> identifies spatial conflicts between model elements.</li>
                <li><strong className="text-white">Building-code checking:</strong> evaluates project data and geometry against applicable regulations and usually needs broader logic.</li>
              </ul>
              <p className="mt-3">
                These methods complement one another. A reliable BIM quality
                process combines the checks required by the project rather than
                treating one report as proof that the entire model is correct.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">Implementation Tips</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Agree on IFC versions, property naming, classifications, and units early.</li>
                <li>Test specifications against a representative IFC sample before formal acceptance.</li>
                <li>Version-control the IDS file alongside project information requirements.</li>
                <li>Confirm that your authoring and checking tools support the required IDS features.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">Frequently Asked Questions</h2>
              <h3 className="mb-1 text-lg font-semibold text-white">Does IDS replace BIM coordination software?</h3>
              <p>
                No. IDS focuses on machine-readable information requirements.
                Coordination tools may still be needed for clash detection,
                issue management, model viewing, and wider quality assurance.
              </p>

              <h3 className="mb-1 mt-4 text-lg font-semibold text-white">
                Can IDS check every property in an IFC file?
              </h3>
              <p>
                The available checks depend on the IDS specification, IFC data
                structure, and software support. Test the requirements with the
                toolchain intended for your project.
              </p>
            </section>

            <section className="border-t border-zinc-800 pt-5">
              <h2 className="mb-3 text-xl font-semibold text-white">Further Reading</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <a className="text-blue-400 underline" href="https://www.buildingsmart.org/standards/bsi-standards/information-delivery-specification-ids/" target="_blank" rel="noreferrer">
                    buildingSMART: Information Delivery Specification
                  </a>
                </li>
                <li>
                  <a className="text-blue-400 underline" href="https://github.com/buildingSMART/IDS" target="_blank" rel="noreferrer">
                    buildingSMART IDS project on GitHub
                  </a>
                </li>
                <li>
                  <a className="text-blue-400 underline" href="https://www.buildingsmart.org/standards/bsi-standards/industry-foundation-classes/" target="_blank" rel="noreferrer">
                    buildingSMART: IFC standard
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
