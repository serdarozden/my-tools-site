// src/data/articles/index.js

// 1. Dosya bazlı mevcut makaleleriniz
import { cadUnitsArticle } from './cad-units';
import { nftGuideArticle } from './nft-guide';
import { nftTechnicalArticle } from './nft-technical';

// 2. Standalone ve Rehber İçerikleri
export const aiGenerativeArticle = {
  slug: "ai-generative-design-in-bim-cad-guide",
  title: "AI Generative Design in BIM & CAD: Complete Guide (2026)",
  description: "Discover how AI-powered generative design is revolutionizing BIM workflows, structural optimization, and CAD drafting in modern AEC industries.",
  date: "2026-07-25",
  readTime: "6 min read",
  category: "AI & Building Tech",
  isStandalone: true,
};

export const blenderVsAutocadArticle = {
  slug: "blender-vs-autocad-comparison-guide",
  title: "Blender vs. AutoCAD: Which Software Should You Choose for 3D & Technical Design?",
  description: "Compare Blender and AutoCAD for 3D modeling, architectural visualization, and 2D drafting. Learn key workflow differences, file support, and software strengths.",
  date: "2026-07-24",
  readTime: "7 min read",
  category: "3D & CAD Workflows",
  isStandalone: true,
};

export const idecadVsAutocadArticle = {
  slug: "idecad-vs-autocad-comparison-guide",
  title: "iDECAD vs. AutoCAD: Which Software Should Engineers & Architects Choose?",
  description: "Compare iDECAD and AutoCAD for structural engineering and architectural drafting. Learn key differences in BIM workflow, FEA analysis, and 2D drafting.",
  date: "2026-07-23",
  readTime: "8 min read",
  category: "CAD & Architecture",
  isStandalone: true,
};

export const blenderToUnrealArticle = {
  slug: "blender-to-unreal-engine-export-guide",
  title: "How to Export 3D Models from Blender to Unreal Engine 5 (FBX & GLTF Best Practices)",
  description: "Master the asset pipeline between Blender and UE5. Learn how to fix scale issues, axis orientation, UV mapping, and material export bugs.",
  date: "2026-07-20",
  readTime: "6 min read",
  category: "3D & Game Dev",
  isStandalone: true,
};

export const cadFormatsArticle = {
  slug: "cad-3d-file-formats-guide",
  title: "Understanding CAD & 3D File Formats: STL, OBJ, STEP, IGES, and FBX",
  description: "Learn the differences between mesh and parametric CAD files. Choose the right format for 3D printing, rendering, and engineering software interoperability.",
  date: "2026-07-18",
  readTime: "7 min read",
  category: "CAD & Architecture",
  isStandalone: true,
};

export const pressureConverterArticle = {
  slug: "pressure-converter-guide",
  title: "Complete Pressure Unit Conversion Guide: Bar, PSI, MPa, and kPa",
  description: "Master pressure conversions with our ultimate engineering guide. Learn exact formulas and quick reference charts to convert between Bar, PSI, MPa, and kPa instantly.",
  date: "2026-07-15",
  readTime: "6 min read",
  category: "Engineering",
  isStandalone: true,
};

export const web3ArtGuideArticle = {
  slug: "nft-digital-art-guide",
  title: "What is Web3 Digital Art? A Complete Guide to Collecting NFTs",
  description: "Discover how blockchain technology transforms digital creativity, how on-chain provenance works, and what to look for when collecting NFTs on OpenSea.",
  date: "2026-07-10",
  readTime: "5 min read",
  category: "Web3 & Art",
  isStandalone: true,
};

// Toplam 10 içerik tek bir dizide birleşiyor
export const articles = [
  aiGenerativeArticle,
  blenderVsAutocadArticle,
  idecadVsAutocadArticle,
  cadUnitsArticle,
  nftGuideArticle,
  nftTechnicalArticle,
  blenderToUnrealArticle,
  cadFormatsArticle,
  pressureConverterArticle,
  web3ArtGuideArticle,
];