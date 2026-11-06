
import Link from 'next/link';

export const metadata = {
  title: 'IFC Georeferencing: EPSG and BIM Coordinates',
  description:
    'Understand IFC georeferencing, IfcProjectedCRS, IfcMapConversion, EPSG codes and coordinate transformations for accurate BIM and GIS interoperability.',
  alternates: {
    canonical: 'https://serdarozden.com/ifc-georeferencing-coordinate-systems-epsg-guide',
  },
  openGraph: {
    title: 'IFC Georeferencing: EPSG and BIM Coordinates',
    description:
      'A technical guide to mapping IFC building models into real-world coordinate reference systems for BIM, GIS and infrastructure workflows.',
    type: 'article',
    url: 'https://serdarozden.com/ifc-georeferencing-coordinate-systems-epsg-guide',
  },
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-black text-slate-100">
      <main className="mx-auto max-w-4xl px-4 py-12">
        <nav className="mb-8 text-sm font-bold">
          <Link href="/" className="text-blue-400 hover:text-blue-300">
            ← Back to Home
          </Link>
        </nav>

        <article className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl sm:p-12">
          <div className="mb-6 flex flex-wrap items-center gap-3 text-xs font-bold text-blue-400">
            <span className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-1 uppercase tracking-wider">
              OpenBIM & GIS
            </span>
            <span className="text-zinc-500">•</span>
            <span className="text-slate-300">12 min read</span>
          </div>

          <h1 className="mb-6 text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl">
            IFC Georeferencing: Coordinate Systems, EPSG Codes and Real-World BIM Alignment
          </h1>

          <p className="mb-8 border-b border-zinc-800 pb-8 text-lg font-medium leading-relaxed text-slate-300">
            A BIM model can be geometrically correct and still appear in the wrong location when exchanged between design, infrastructure and GIS applications. IFC georeferencing connects local building coordinates to real-world coordinate reference systems using structured spatial reference and transformation data.
          </p>

          <div className="space-y-6 text-base leading-relaxed text-slate-300 sm:text-lg">
            <p>
              Coordinate problems are among the most difficult interoperability issues in large BIM projects. An architectural model may be created close to the origin for numerical stability, while a survey or GIS dataset uses projected coordinates that represent a real geographic location.
            </p>
            <p>
              If these coordinate systems are not defined and interpreted consistently, models can appear hundreds of kilometres away from their intended position, rotate incorrectly or become misaligned with terrain and infrastructure data.
            </p>
            <p>
              IFC provides mechanisms for describing the relationship between engineering model coordinates and projected map coordinates. Understanding these mechanisms is essential for reliable OpenBIM and GIS integration.
            </p>

            <h2 className="pt-4 text-2xl font-extrabold text-white">1. Local BIM Coordinates vs. Real-World Coordinates</h2>
            <p>
              Most 3D modeling applications work with a local Cartesian coordinate system. A building may be modeled near (0, 0, 0), with the X and Y axes aligned to the project grid and Z representing elevation.
            </p>
            <p>
              Surveying and GIS workflows often use projected coordinate systems. These systems express positions using coordinates such as Easting, Northing and elevation. The values may be large because they refer to a location within a national or regional grid.
            </p>
            <p>
              These two coordinate systems serve different purposes:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong className="text-white">Local engineering coordinates:</strong> Convenient for modeling, design and numerical operations.</li>
              <li><strong className="text-white">Projected map coordinates:</strong> Suitable for locating buildings and infrastructure in a geographic context.</li>
              <li><strong className="text-white">Vertical reference:</strong> Defines how elevations relate to a specified height datum.</li>
            </ul>
            <p>
              A correct transformation must account for translation, rotation, scale where applicable, and the coordinate reference system used by the target application.
            </p>

            <h2 className="pt-4 text-2xl font-extrabold text-white">2. What Is an EPSG Code?</h2>
            <p>
              An EPSG code identifies a coordinate reference system or related geodetic definition in a widely used registry. It helps different applications agree on how coordinate values should be interpreted.
            </p>
            <p>
              A projected coordinate system may define its projection method, underlying geographic datum, units, axes and area of use. Two datasets with similar-looking coordinate values are not necessarily compatible if they use different reference systems.
            </p>
            <p>
              Selecting the correct EPSG identifier is therefore more important than simply copying Easting and Northing values. The project team should obtain the authoritative coordinate reference information from the survey or project specification.
            </p>
            <p>
              An EPSG identifier should not be guessed from a country's name. Multiple projected systems, zones and vertical reference systems may be relevant within the same country or project region.
            </p>

            <h2 className="pt-4 text-2xl font-extrabold text-white">3. IFC Georeferencing Entities</h2>
            <p>
              IFC supports georeferencing through entities that describe the projected coordinate reference system and the transformation from engineering coordinates to map coordinates.
            </p>
            <h3 className="text-xl font-bold text-white">IfcProjectedCRS</h3>
            <p>
              IfcProjectedCRS represents the projected coordinate reference system used to interpret map coordinates. Its information can include the name of the system, its geographic datum, vertical datum, map projection and map unit, depending on the IFC schema and available data.
            </p>
            <h3 className="text-xl font-bold text-white">IfcMapConversion</h3>
            <p>
              IfcMapConversion defines the transformation between the local engineering coordinate system and the map coordinate system. It provides the map translation, orientation and scale information needed to place model geometry in the projected coordinate reference system.
            </p>
            <p>
              These entities work together: the coordinate reference system describes what the map coordinates mean, while the map conversion describes how local model coordinates are transformed into those coordinates.
            </p>

            <h2 className="pt-4 text-2xl font-extrabold text-white">4. Understanding the Map Conversion Parameters</h2>
            <p>
              A simplified horizontal transformation can be expressed as:
            </p>
            <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-black p-5 text-center">
              <p className="text-lg text-green-300">
                E = E₀ + s (aX − bY)
              </p>
              <p className="mt-3 text-lg text-green-300">
                N = N₀ + s (bX + aY)
              </p>
              <p className="mt-4 text-sm text-zinc-400">
                a = cos(θ), b = sin(θ)
              </p>
            </div>
            <p>
              In this simplified model:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong className="text-white">X and Y:</strong> Local engineering coordinates.</li>
              <li><strong className="text-white">E₀ and N₀:</strong> Map coordinate offsets.</li>
              <li><strong className="text-white">s:</strong> Scale factor.</li>
              <li><strong className="text-white">θ:</strong> Rotation angle between the local and map axes.</li>
              <li><strong className="text-white">a and b:</strong> Rotation components.</li>
            </ul>
            <p>
              The precise interpretation of IFC attributes, axis conventions and transformation parameters must follow the applicable IFC schema and implementation. The simplified equations above illustrate the underlying 2D similarity transformation, not every possible coordinate operation used by GIS software.
            </p>
            <p>
              Vertical coordinates require additional attention. A horizontal map conversion alone does not guarantee that elevations are referenced to the correct vertical datum. Height offsets and vertical coordinate transformations must be handled according to the project specification and software capabilities.
            </p>

            <h2 className="pt-4 text-2xl font-extrabold text-white">5. Rotation and Axis Convention Problems</h2>
            <p>
              A frequent source of errors is assuming that every application uses the same axis orientation. One application may define project north differently from true north, while another may interpret the local X and Y axes using a different convention.
            </p>
            <p>
              A rotation sign error can cause a model to appear correctly translated but incorrectly oriented. The problem may be subtle in a small building model and become obvious when the model is overlaid on roads, property boundaries or survey points.
            </p>
            <p>
              Always verify the transformation using at least two or three known control points. A single point can confirm translation at one location but cannot independently validate rotation and scale.
            </p>

            <h2 className="pt-4 text-2xl font-extrabold text-white">6. A Practical IFC Georeferencing Workflow</h2>
            <p>
              A reliable workflow begins with the coordinate specification, not with trial-and-error adjustments inside the modeling application.
            </p>
            <ol className="list-decimal space-y-3 pl-6">
              <li><strong className="text-white">Obtain survey information.</strong> Confirm the horizontal coordinate reference system, EPSG identifier, units, vertical datum and control points.</li>
              <li><strong className="text-white">Define the local model origin.</strong> Decide how the engineering model coordinates relate to the project grid and building reference points.</li>
              <li><strong className="text-white">Configure the transformation.</strong> Set the map offsets, rotation and scale using verified project information.</li>
              <li><strong className="text-white">Export the IFC model.</strong> Ensure the export process preserves the intended georeferencing information.</li>
              <li><strong className="text-white">Inspect the IFC data.</strong> Check the projected CRS and map conversion entities in a suitable IFC inspection workflow.</li>
              <li><strong className="text-white">Validate in a second application.</strong> Import or overlay the model in a GIS or coordination environment using the same coordinate reference system.</li>
            </ol>
            <p>
              This independent validation step is critical. A model can appear correct in the software that created it because the application remembers project settings that were not fully written into the exported IFC file.
            </p>

            <h2 className="pt-4 text-2xl font-extrabold text-white">7. Common IFC Georeferencing Errors</h2>
            <h3 className="text-xl font-bold text-white">Incorrect EPSG identifier</h3>
            <p>
              A wrong coordinate reference system can shift or distort the model when interpreted by GIS software. Confirm the identifier from the project survey documentation rather than relying on approximate location.
            </p>
            <h3 className="text-xl font-bold text-white">Double transformation</h3>
            <p>
              Some workflows apply a coordinate shift during export and then apply another shift during import. This can result in large positional errors. Determine which application is responsible for each transformation.
            </p>
            <h3 className="text-xl font-bold text-white">Large coordinate values in the modeling environment</h3>
            <p>
              Moving detailed geometry directly to very large global coordinate values may create precision or display problems in some modeling and rendering systems. A local engineering origin combined with explicit georeferencing can be a more robust strategy.
            </p>
            <h3 className="text-xl font-bold text-white">Ignoring vertical datum differences</h3>
            <p>
              Two datasets can align horizontally while showing inconsistent elevations. Verify whether heights are ellipsoidal, orthometric or referenced to another project-specific vertical datum.
            </p>
            <h3 className="text-xl font-bold text-white">Assuming the IFC export preserved all settings</h3>
            <p>
              Export settings and software implementations differ. Inspect the resulting IFC data and validate the model in an independent application rather than assuming that the source project's coordinate configuration was preserved perfectly.
            </p>

            <h2 className="pt-4 text-2xl font-extrabold text-white">8. Why Georeferencing Matters for BIM and GIS</h2>
            <p>
              Correct georeferencing makes it possible to coordinate building models with terrain, roads, utilities, cadastral information and other spatial datasets. It is particularly important for infrastructure projects, campus-scale developments, urban planning and digital twin systems.
            </p>
            <p>
              When IFC models are positioned consistently, downstream applications can perform spatial queries, visualize building assets in their geographic context and combine information from different engineering disciplines.
            </p>
            <p>
              Georeferencing is therefore not merely an export setting. It is part of the information quality of an OpenBIM deliverable.
            </p>

            <h2 className="pt-4 text-2xl font-extrabold text-white">Frequently Asked Questions</h2>
            <h3 className="text-xl font-bold text-white">What is IFC georeferencing?</h3>
            <p>
              IFC georeferencing describes how a building or infrastructure model's local engineering coordinates relate to a real-world projected coordinate reference system.
            </p>
            <h3 className="text-xl font-bold text-white">What is the purpose of IfcMapConversion?</h3>
            <p>
              IfcMapConversion defines transformation information that maps local engineering coordinates into map coordinates, including translation, orientation and scale parameters.
            </p>
            <h3 className="text-xl font-bold text-white">What is IfcProjectedCRS?</h3>
            <p>
              IfcProjectedCRS describes the projected coordinate reference system used to interpret the map coordinates associated with the IFC model.
            </p>
            <h3 className="text-xl font-bold text-white">Does an EPSG code define the building's local origin?</h3>
            <p>
              No. An EPSG code identifies a coordinate reference system. The relationship between the local model origin and map coordinates is defined separately through georeferencing transformation information.
            </p>
            <h3 className="text-xl font-bold text-white">Why does an IFC model appear in the wrong location in GIS?</h3>
            <p>
              Common causes include incorrect CRS information, missing map conversion data, axis orientation errors, unit mismatches or applying a coordinate transformation more than once.
            </p>

            <div className="mt-10 rounded-2xl border border-zinc-800 bg-black p-6">
              <h2 className="mb-3 text-xl font-bold text-white">Conclusion</h2>
              <p>
                Reliable IFC georeferencing requires more than entering a coordinate offset. The coordinate reference system, local model origin, map transformation, axis conventions and vertical reference must all be understood and validated. When these elements are handled consistently, IFC becomes a much stronger bridge between BIM engineering models and real-world GIS data.
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
