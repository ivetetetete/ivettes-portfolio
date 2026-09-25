

"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
    type Container,
    type ISourceOptions,
} from "@tsparticles/engine";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const BackgroundStar = () => {
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    const options: ISourceOptions = useMemo(
        () => ({
            background: {
                color: "#fce7f3"
            },
            detectRetina: false,
            fpsLimit: 30,
            interactivity: {
                detectsOn: "canvas",
                events: {
                    resize: { enable: true }
                }
            },
            particles: {
                color: {
                    value: "#fdf2f8"
                },
                number: {
                    density: {
                        enable: true,
                        area: 1080
                    },
                    limit: { value: 0 },
                    value: 400
                },
                opacity: {
                    animation: {
                        enable: true,
                        minimumValue: 0.05,
                        speed: 0.30,
                        sync: false
                    },
                    random: {
                        enable: true,
                        minimumValue: 0.05
                    },
                    value: 1
                },
                shape: {
                    type: "star"
                },
                size: {
                    random: {
                        enable: true,
                        minimumValue: 3
                    },
                    value: 3
                },
            }
        }),
        [],
    );

    if (init) {
        return (
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
            />
        );
    }

    return <></>;
};

export default BackgroundStar;