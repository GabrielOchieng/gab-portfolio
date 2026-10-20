export function attachParallax(stage: HTMLElement) {
  const canUseDepth =
    typeof window !== "undefined" &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!canUseDepth) return () => {};

  const layers = Array.from(
    stage.querySelectorAll<HTMLElement>("[data-depth]"),
  );

  const handleMove = (e: PointerEvent) => {
    const rect = stage.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    stage.style.setProperty("--stage-x", x.toFixed(3));
    stage.style.setProperty("--stage-y", y.toFixed(3));

    layers.forEach((layer) => {
      const depth = Number(layer.dataset.depth ?? 0);
      layer.style.setProperty("--depth-x", `${x * depth * 42}px`);
      layer.style.setProperty("--depth-y", `${y * depth * 28}px`);
    });
  };

  const handleLeave = () => {
    stage.style.removeProperty("--stage-x");
    stage.style.removeProperty("--stage-y");
    layers.forEach((layer) => {
      layer.style.removeProperty("--depth-x");
      layer.style.removeProperty("--depth-y");
    });
  };

  stage.addEventListener("pointermove", handleMove);
  stage.addEventListener("pointerleave", handleLeave);

  return () => {
    stage.removeEventListener("pointermove", handleMove);
    stage.removeEventListener("pointerleave", handleLeave);
  };
}
