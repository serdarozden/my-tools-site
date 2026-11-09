import Link from 'next/link';

export const metadata = {
  title: 'Revit Phasing and Design Options: Complete BIM Workflow',
  description:
    'Learn how to manage existing, demolished and new construction elements in Revit, configure phase filters, create design options and coordinate renovation workflows.',
  alternates: {
    canonical: 'https://serdarozden.com/revit-phasing-design-options-workflow-guide',
  },
};

export default function ArticlePage() {
  return (
    <div className="bg-black min-h-screen text-slate-100">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <nav className="mb-8 text-sm font-bold">
          <Link href="/" className="text-blue-400 hover:text-blue-300">
            ← Back to Home
          </Link>
        </nav>

        <article className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 sm:p-12">
          <div className="text-xs font-bold text-blue-400 mb-6">
            BIM & REVIT · 12 MIN READ · NOV 2026
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight">
            Revit Phasing and Design Options: A Complete BIM Workflow
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed border-b border-zinc-800 pb-8 mb-8">
            Organize renovation projects, distinguish existing and proposed
            construction, and evaluate alternative design solutions using
            Revit phases, phase filters and design option sets.
          </p>

          <div className="space-y-6 text-slate-200 leading-relaxed">
            <p>
              Renovation and redevelopment projects require more than a single
              representation of a building. A BIM model may need to describe
              the existing condition, demolition scope, temporary construction
              stages and final proposed design. Revit provides phase
              parameters and phase filters to organize these conditions
              without maintaining completely separate models.
            </p>

            <h2 className="text-2xl font-bold text-white pt-4">
              1. Understanding Revit Phases
            </h2>
            <p>
              A phase represents a project period or construction state.
              Typical renovation projects may use phases such as Existing,
              Demolition and New Construction. These names are configurable;
              the important part is establishing a consistent sequence that
              matches the project delivery strategy.
            </p>
            <p>
              Each model element has a Phase Created value. Elements that are
              removed from the project can also have a Phase Demolished value.
              These parameters allow Revit to determine how an element should
              appear when a view is associated with a particular phase.
            </p>

            <h2 className="text-2xl font-bold text-white pt-4">
              2. Phase Created and Phase Demolished
            </h2>
            <p>
              Consider an existing masonry wall that must be removed during
              renovation. Its Phase Created value is set to Existing and its
              Phase Demolished value is set to Demolition. A replacement wall
              can be created in the New Construction phase.
            </p>
            <p>
              This distinction is important: demolition is not simply a
              visibility toggle. It records a change in the element's project
              lifecycle. A wall demolished in one phase can still appear in
              views representing an earlier project condition.
            </p>

            <h2 className="text-2xl font-bold text-white pt-4">
              3. Configuring Phase Filters
            </h2>
            <p>
              Phase filters control how elements from different project
              periods are displayed. Depending on the filter, elements may be
              shown as existing, demolished, temporary, or newly constructed.
              Graphic overrides can then distinguish these states using line
              patterns, colors and transparency.
            </p>
            <p>
              A practical renovation drawing set often includes separate
              views for existing conditions, demolition plans and proposed
              construction. Each view should use an intentional Phase and
              Phase Filter combination rather than relying on manual hiding.
            </p>

            <h2 className="text-2xl font-bold text-white pt-4">
              4. Design Options and Option Sets
            </h2>
            <p>
              Design Options solve a different problem. They allow teams to
              develop alternative solutions for a portion of the model, such
              as competing lobby layouts, façade arrangements or apartment
              configurations.
            </p>
            <p>
              An option set groups alternatives that represent mutually
              exclusive design decisions. For example, a project might
              contain a Lobby Layout option set with Option A and Option B.
              The primary option is the default alternative used by views
              unless another option is explicitly selected.
            </p>

            <h2 className="text-2xl font-bold text-white pt-4">
              5. Combining Phases with Design Options
            </h2>
            <p>
              Phases describe when construction elements exist or change.
              Design Options describe which alternative design is being
              evaluated. They should not be treated as interchangeable
              mechanisms.
            </p>
            <p>
              For example, a renovation project can use phases to represent
              the existing building and the proposed works, while design
              options compare two alternative extensions. This separation
              keeps the model's timeline independent from design decisions.
            </p>

            <h2 className="text-2xl font-bold text-white pt-4">
              6. View Templates and Documentation
            </h2>
            <p>
              View templates help standardize phase filters, visibility
              settings, graphic overrides and annotation styles. Create
              dedicated templates for existing-condition plans, demolition
              plans and proposed plans. This reduces accidental differences
              between drawings.
            </p>
            <p>
              Before issuing a drawing set, verify that each view references
              the intended phase and filter. Also check that dependent views,
              schedules and sheets communicate the same project state.
            </p>

            <h2 className="text-2xl font-bold text-white pt-4">
              7. Common Revit Phasing Problems
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                An element appears in the wrong view because its Phase Created
                parameter is incorrect.
              </li>
              <li>
                Demolished elements remain visible because the view uses an
                unsuitable phase filter.
              </li>
              <li>
                New construction is hidden because the view phase precedes
                the element's creation phase.
              </li>
              <li>
                Design alternatives appear together because the view is not
                configured to display the intended option.
              </li>
              <li>
                Inconsistent view templates create different graphic results
                across sheets.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white pt-4">
              8. Recommended Project Workflow
            </h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Define project phases before extensive modeling begins.</li>
              <li>Assign existing elements to the correct creation phase.</li>
              <li>Set demolition phases for elements scheduled for removal.</li>
              <li>Create new elements in the appropriate construction phase.</li>
              <li>Configure phase filters and graphic overrides.</li>
              <li>Create design option sets only for genuine alternatives.</li>
              <li>Build view templates for consistent documentation.</li>
              <li>Review views and sheets before issuing deliverables.</li>
            </ol>

            <h2 className="text-2xl font-bold text-white pt-4">
              Frequently Asked Questions
            </h2>

            <h3 className="text-xl font-semibold text-white">
              What is the difference between Revit phases and design options?
            </h3>
            <p>
              Phases represent project time and construction states. Design
              Options represent alternative solutions that can be compared
              within the same project.
            </p>

            <h3 className="text-xl font-semibold text-white">
              Can a demolished element appear in an existing-condition view?
            </h3>
            <p>
              Yes. A view representing a phase before demolition can show the
              element as existing, provided its phase parameters and view
              settings are configured correctly.
            </p>

            <h3 className="text-xl font-semibold text-white">
              Should every design alternative use a separate phase?
            </h3>
            <p>
              No. Alternatives are generally better managed with Design
              Options. Phases should represent meaningful project periods or
              construction states.
            </p>

            <h3 className="text-xl font-semibold text-white">
              Do phase filters change the model geometry?
            </h3>
            <p>
              No. Phase filters control graphical representation in views;
              they do not independently modify the underlying geometry.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}