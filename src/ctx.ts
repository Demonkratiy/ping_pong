import { createContext } from "react";

export let Context2D = createContext<() => CanvasRenderingContext2D>(null!);
