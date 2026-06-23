import type { CSSProperties, FC, RefAttributes } from "react";

export type FinishType = "Polished" | "Matte" | "Brushed";

export declare enum ViewerSource {
  WEBSITE = "website",
  CONFIG = "config",
}

export interface RingSceneProps {
  collection: string;
  modelId: string;
  variations: string[];
  activeVariation?: string;
  colorHex?: string;
  finish?: FinishType;
  showDiamond?: boolean;
  /** Path to the scene HDR environment. Defaults to /env/08.exr */
  envPath?: string;
  /** Path to the HDR used for diamond refraction. Defaults to /08.hdr */
  diamondEnvPath?: string;
  /** Canvas background color. Defaults to #f8f7f2 */
  backgroundColor?: string;
}

export type MeshInfoJson = {
  glbUrl: string;
  availableColors: string[];
};

export type ViewerTextures = {
  aoGold?: string;
  aoSilver?: string;
  aoEngrave?: string;
  normalBase?: string;
  normalFinishing?: string;
};

export type CollectionModelInfo = {
  modelUrl: string;
  textures: ViewerTextures | null;
};

export type ViewerRingManagerAPI = {
  modelUrl: string;
  colorHex: string;
  baseColorHex: string;
  finishingColorHex: string;
  engravingColorHex: string;
  finish: FinishType;
  showDiamond: boolean;
  roughness: number;
  textures: ViewerTextures | null;
  currentView: number;
  engravingText: string;
  engravingSymbol: string | null;
  engravingFont: string;
  bevelWidth: number;
  engravingDepth: number;
  edgeSoftness: number;
  normalStrength: number;
  aoStrength: number;
  strokeWidth: number;
  /** True once the active variation's model has finished loading and rendered. */
  isLoaded: boolean;
  isTransitioning: boolean;
  animationDuration: number;
  collectionModels: CollectionModelInfo[];
  setTransitioning: (val: boolean) => void;
  setAnimationDuration: (val: number) => void;
  setCollectionModels: (models: CollectionModelInfo[]) => void;
  initModel: (modelUrl: string) => void;
  setMetalColor: (hex: string) => void;
  setMeshColors: (colors: {
    base: string;
    finishing: string;
    engraving: string;
  }) => void;
  setFinish: (finish: FinishType) => void;
  setDiamondsVisible: (visible: boolean) => void;
  setTextures: (textures: ViewerTextures | null) => void;
  setCurrentView: (currentView: number) => void;
  setEngravingText: (text: string) => void;
  setEngravingSymbol: (symbol: string | null) => void;
  setEngravingFont: (font: string) => void;
  setBevelWidth: (val: number) => void;
  setEngravingDepth: (val: number) => void;
  setEdgeSoftness: (val: number) => void;
  setNormalStrength: (val: number) => void;
  setAoStrength: (val: number) => void;
  setStrokeWidth: (val: number) => void;
  engravingCanvas: HTMLCanvasElement | null;
  normalMapCanvas: HTMLCanvasElement | null;
  setEngravingCanvas: (canvas: HTMLCanvasElement | null) => void;
  setNormalMapCanvas: (canvas: HTMLCanvasElement | null) => void;
};

export type ViewerViewManagerAPI = {
  glbUrl?: string;
  jsonUrl: string;
  meshInfoJson: MeshInfoJson | null;
  setGlbUrl: (glbUrl: string) => void;
  setJsonUrl: (jsonUrl: string) => void;
  setMeshInfoJson: (meshInfoJson: MeshInfoJson) => void;
  source: ViewerSource;
  setSource: (source: ViewerSource) => void;
};

export declare class MeshInfo {
  constructor(id: string, name: string, mesh: import("three").Mesh);
  get id(): string;
  get name(): string;
  get item(): import("three").Mesh;
  get isVisible(): boolean;
  setIsVisible(isVisible: boolean): void;
  setMesh(mesh: import("three").Mesh): void;
  changeColor(color: string): void;
  static parseMeshInfo(mesh: import("three").Mesh): MeshInfo;
}

export type ViewerMeshManagerAPI = {
  groupRef: import("three").Group | null;
  meshInfos: MeshInfo[];
  setGroupRef: (group: import("three").Group) => void;
  setMeshInfos: (meshInfos: MeshInfo[]) => void;
};

export type ViewerCameraManagerAPI = {
  cameraRef: any;
  focusCameraTo: (obj: import("three").Object3D[]) => void;
  resetCameraToRef: () => void;
  setCameraRef: (ref: any) => void;
  zoomIn: () => void;
  zoomOut: () => void;
  reset: () => void;
};

export type ViewerEnvManagerAPI = {
  clearMap: (mapType: string) => void;
  envIntensity: number;
  envRotation: { x: number; y: number; z: number };
  envVisibility: boolean;
  environmentTexture: import("three").Texture | null;
  handleEnvUpload: (file: File) => Promise<void>;
  setEnvironmentTexture: (texture: import("three").Texture) => void;
  setEnvIntensity: (intensity: number) => void;
  setEnvRotation: (rotation: { x: number; y: number; z: number }) => void;
  setEnvVisibility: (visible: boolean) => void;
};

export type ViewerAPI = {
  stateManager: {
    cameraManager: ViewerCameraManagerAPI;
    envManager: ViewerEnvManagerAPI;
    meshManager: ViewerMeshManagerAPI;
    ringManager: ViewerRingManagerAPI;
    viewManager: ViewerViewManagerAPI;
  };
};

/** Alias for `ViewerAPI` — ref type for `SDKViewer` / `Viewer3D`. */
export type SDKViewerHandle = ViewerAPI;

export type Viewer3DProps = {
  backgroundColor?: string;
  className?: string;
  diamondEnvPath?: string;
  envPath?: string;
  style?: CSSProperties;
  source?: ViewerSource;
};

export declare const Viewer3D: import("react").ForwardRefExoticComponent<
  Viewer3DProps & RefAttributes<ViewerAPI>
>;

/** Same component as `Viewer3D` (SDK build re-exports this name). */
export declare const SDKViewer: import("react").ForwardRefExoticComponent<
  Viewer3DProps & RefAttributes<ViewerAPI>
>;

export declare const RingScene: FC<RingSceneProps>;
