import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";

export const Particle = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);
    const particlesLoaded = useCallback(async (container: Container | undefined) => {
    }, []);

    const customInit = async (engine: Engine): Promise<void> => {
        // this adds the preset to tsParticles, you can safely use the
        await loadLinksPreset(engine);
    }

    const options = {
        preset: "links",
    }

    return (
        <Particles options={options} init={customInit} />
    )
}