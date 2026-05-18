import type { CSSProperties, FC, RefAttributes } from 'react';

export type FinishType = 'polished' | 'matte';

export interface RingSceneProps {
  collection: string;
  modelId: string;
  variations: string[];
  activeVariation?: string;
  colorHex?: string;
  finish?: FinishType;
  showDiamond?: boolean;
  /** Path to the scene HDR environment. Defaults to /env/08.hdr */
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

export type ViewerRingManagerAPI = {
  activeVariation: string;
  collection: string;
  colorHex: string;
  finish: FinishType;
  initModel: (collection: string, modelId: string, variations: string[]) => void;
  modelId: string;
  roughness: number;
  setActiveVariation: (variation: string) => void;
  setDiamondsVisible: (visible: boolean) => void;
  setFinish: (finish: FinishType) => void;
  setMetalColor: (hex: string) => void;
  showDiamond: boolean;
  variations: string[];
};

export type ViewerViewManagerAPI = {
  glbUrl?: string;
  jsonUrl: string;
  meshInfoJson: MeshInfoJson | null;
  setGlbUrl: (glbUrl: string) => void;
  setJsonUrl: (jsonUrl: string) => void;
  setMeshInfoJson: (meshInfoJson: MeshInfoJson) => void;
};

export type ViewerMeshManagerAPI = {
  groupRef: import('three').Group | null;
  meshInfos: unknown[];
  setGroupRef: (group: import('three').Group) => void;
  setMeshInfos: (meshInfos: unknown[]) => void;
};

export type ViewerCameraManagerAPI = {
  cameraRef: unknown;
  focusCameraTo: (...args: unknown[]) => void;
  resetCameraToRef: () => void;
  setCameraRef: (ref: unknown) => void;
};

export type ViewerEnvManagerAPI = {
  clearMap: () => void;
  envIntensity: number;
  envRotation: [number, number, number];
  envVisibility: boolean;
  environmentTexture: unknown;
  handleEnvUpload: (file: File) => void;
  setEnvironmentTexture: (texture: unknown) => void;
  setEnvIntensity: (intensity: number) => void;
  setEnvRotation: (rotation: [number, number, number]) => void;
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
};

export declare const Viewer3D: import('react').ForwardRefExoticComponent<
  Viewer3DProps & RefAttributes<ViewerAPI>
>;

/** Same component as `Viewer3D` (SDK build re-exports this name). */
export declare const SDKViewer: typeof Viewer3D;

export declare const RingScene: FC<RingSceneProps>;
