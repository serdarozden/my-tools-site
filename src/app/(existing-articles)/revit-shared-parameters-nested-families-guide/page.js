
import Link from 'next/link';

export const metadata = {
  title: 'Revit Shared Parameters and Nested Families: Complete Guide',
  description:
    'Learn how to create Revit shared parameters, build nested families, manage parameter associations and standardize BIM family data.',
  alternates: {
    canonical: 'https://serdarozden.com/revit-shared-parameters-nested-families-guide',
  },
};

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-black px-4 py-12 text-slate-100">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-bold text-blue-400">← Back to Home</Link>
        <article className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-950 p-6 sm:p-12">
          <div className="mb-6 text-xs font-bold uppercase tracking-wider text-blue-400">
            BIM & Revit · 11 min read
          </div>
          <h1 className="mb-6 text-3xl font-black leading-tight text-white sm:text-5xl">
            Revit Shared Parameters and Nested Families: A Complete BIM Workflow
          </h1>
          <p className="mb-8 border-b border-zinc-800 pb-8 text-lg leading-relaxed text-slate-300">
            Revit families become significantly more powerful when their geometry, parameters and data structures are designed as a coordinated system. Shared parameters and nested families make it possible to build reusable BIM components with consistent information across projects, schedules and documentation.
          </p>

          <div className="space-y-6 leading-relaxed text-slate-300">
            <p>
              A poorly structured family may look correct in a 3D view but fail when a project team attempts to schedule its properties, tag its components or exchange information. The underlying problem is often not geometry; it is the way family parameters are defined and connected.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-white">1. Revit Parameter Types</h2>
            <p>
              Revit uses several parameter types to control geometry and store information. Instance parameters apply independently to each placed element, while type parameters are shared by all instances of the same family type.
            </p>
            <p>
              Project parameters can be assigned to categories within a project. Family parameters control behavior inside a family but are not automatically available as shared identifiers for project-wide tagging and scheduling.
            </p>
            <p>
              Shared parameters are definitions stored in an external shared parameter file and identified by unique GUIDs. Their stable identity allows the same parameter definition to be reused in multiple families and projects.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-white">2. Why Shared Parameters Matter</h2>
            <p>
              Consider a door family containing fire rating, acoustic rating, manufacturer and asset identification data. If every family uses unrelated parameter definitions, schedules and tags become difficult to standardize.
            </p>
            <p>
              A shared parameter definition provides a common identifier. When the same shared parameter is used consistently across families, project schedules can collect the corresponding values from different family types.
            </p>
            <p>
              A shared parameter file should be managed carefully. Changing or recreating a parameter with a different GUID does not necessarily preserve its identity, even if its displayed name is identical.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-white">3. Creating a Shared Parameter</h2>
            <p>
              Open Revit's shared parameter management interface and create or select a shared parameter file. Organize definitions into logical groups, such as architectural, structural, mechanical and asset information.
            </p>
            <p>
              Define each parameter with an appropriate data type. For example, a fire rating may use text, an installation date may use a date-compatible parameter type where supported, and a physical dimension should use a suitable length parameter.
            </p>
            <p>
              Add the shared parameter to the family through Family Types. Decide whether it should be an instance or type parameter according to the intended behavior. Load the family into a test project and confirm that its value can be scheduled or tagged as expected.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-white">4. What Are Nested Families?</h2>
            <p>
              A nested family is a family placed inside another family. Instead of modeling every component as one large collection of geometry, a complex object can be assembled from smaller reusable components.
            </p>
            <p>
              A window assembly, for example, may contain a frame family, glazing component, handles and opening elements. A lighting fixture may contain a housing, lamp and mounting component.
            </p>
            <p>
              This modular approach improves reuse and makes complex family behavior easier to maintain. The main family controls the overall assembly, while nested components represent individual parts.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-white">5. Associating Nested Family Parameters</h2>
            <p>
              A nested family's parameters can be associated with parameters in the host family. This creates a control layer through which users can change nested component dimensions or properties from the main family interface.
            </p>
            <p>
              For example, a host family can expose a frame width parameter and associate it with the corresponding nested frame parameter. Changing the host parameter then drives the nested component, provided the family constraints and parameter types are compatible.
            </p>
            <p>
              Parameter association is particularly useful for configurable products. It reduces the number of controls users must understand and keeps the main family interface organized.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-white">6. Shared vs. Non-Shared Nested Families</h2>
            <p>
              Revit allows nested families to be configured as shared or non-shared. This setting affects how nested components are represented and selected in the project environment.
            </p>
            <p>
              A shared nested family can be independently identified and scheduled in the project under appropriate category and schedule conditions. A non-shared nested component is generally treated as part of its host family for project-level selection and scheduling.
            </p>
            <p>
              Use shared nested components when individual parts need independent tagging, selection or data reporting. Use non-shared components when they only contribute to the geometry or behavior of the host object.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-white">7. A Practical Family Architecture</h2>
            <pre className="overflow-x-auto rounded-xl border border-zinc-800 bg-black p-4 text-sm text-green-300">
{`Door_Assembly.rfa
├── Frame_Nested.rfa
│   ├── Frame_Width
│   └── Frame_Depth
├── Leaf_Nested.rfa
│   ├── Leaf_Thickness
│   └── Material
└── Hardware_Nested.rfa
    ├── Handle_Type
    └── Hardware_Code

Host Parameters
├── Overall_Width
├── Overall_Height
└── Fire_Rating`}
            </pre>
            <p>
              The host family should expose only the parameters required by the project user. Internal construction parameters can remain inside nested components unless they are needed for scheduling or configuration.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-white">8. Common Problems and Validation</h2>
            <h3 className="text-xl font-bold text-white">Parameters do not appear in schedules</h3>
            <p>
              Confirm that the parameter is shared where required, assigned to the correct category and available in the relevant schedule context. Also check whether the nested family needs to be configured as shared.
            </p>
            <h3 className="text-xl font-bold text-white">Nested geometry does not respond</h3>
            <p>
              Check parameter associations, reference planes, dimensional constraints and formulas. A parameter can exist without controlling the intended geometry if the family constraints are incomplete.
            </p>
            <h3 className="text-xl font-bold text-white">Duplicate parameter definitions</h3>
            <p>
              Two parameters can have the same displayed name but different GUIDs. Maintain a controlled shared parameter file and avoid recreating definitions unnecessarily.
            </p>
            <h3 className="text-xl font-bold text-white">Family becomes difficult to maintain</h3>
            <p>
              Avoid exposing every nested parameter in the host family. Keep the interface focused, use clear naming conventions and test type changes as well as instance changes.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-white">9. BIM Data Quality and Interoperability</h2>
            <p>
              Shared parameters are useful for maintaining consistent information across Revit projects, but they do not automatically guarantee correct IFC mapping or compliance with an information delivery specification.
            </p>
            <p>
              Parameter names, data types, units, property-set mapping and export configuration should be checked against the project's information requirements. A parameter that appears correctly in a Revit schedule may still require explicit mapping to an IFC property.
            </p>
            <p>
              For large BIM libraries, establish a naming convention, parameter owner, GUID registry and validation procedure. This turns family creation into a controlled data-management process rather than an isolated modeling task.
            </p>

            <h2 className="pt-4 text-2xl font-bold text-white">Frequently Asked Questions</h2>
            <h3 className="text-xl font-bold text-white">What is the difference between shared and family parameters?</h3>
            <p>
              Family parameters control behavior inside a family. Shared parameters have unique GUID-based definitions and can be reused for project tagging and scheduling workflows.
            </p>
            <h3 className="text-xl font-bold text-white">Can nested Revit families be scheduled?</h3>
            <p>
              Shared nested families can be independently represented in suitable project schedules, subject to category and schedule configuration.
            </p>
            <h3 className="text-xl font-bold text-white">Should every nested family be shared?</h3>
            <p>
              No. Use shared nested families when independent identification or reporting is required. Non-shared nested families are often preferable for internal geometry and components that do not need separate project-level management.
            </p>
            <h3 className="text-xl font-bold text-white">Do shared parameters automatically map to IFC?</h3>
            <p>
              No. IFC property mapping and export settings must be configured and validated separately.
            </p>

            <div className="mt-10 rounded-2xl border border-zinc-800 bg-black p-6">
              <h2 className="mb-3 text-xl font-bold text-white">Conclusion</h2>
              <p>
                Shared parameters establish consistent information identities, while nested families provide modular geometry and behavior. Combining both techniques creates reusable Revit components that are easier to schedule, tag, maintain and integrate into structured BIM workflows.
              </p>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
