import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

const Model = ({ url, scale }) => {
    const gltf = useLoader(GLTFLoader, url);
    return <primitive object={gltf.scene} scale={scale} />;
};

const ModelViewer = ({ modelUrl }) => {
    const modelScale = [1, 1, 1];

    return (
        <div>
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compactable" content="IE=edge" />
                <meta name="viewport" content="width=device-wideth, initial-scale=1.0" />
                <link rel="stylesheet" href="style.css" />
                <title> Ant App </title>
            </head>
            <body>
                <header className="headContainer">
                    <div className="headAligner">
                        <div className="headLogo">AntSearch</div>
                        <div className="headNav">
                            <ul className="ulElement">Home</ul>
                            <ul className="ulElement">About</ul>
                            <ul className="ulElement">Support</ul>
                            <ul className="ulElement">Contact</ul>
                        </div>
                    </div>
                </header>
                <div class="container">
                    <div class="search-container">
                        <input
                            type="text"
                            id="movie-name"
                            placeholder="Enter movie name here..."
                            value="search ant movie ..."
                        />
                        <button id="search-btn">Search</button>
                    </div>
                    <Canvas style={{ width: "600px", height: "400px" }}>
                        <Suspense fallback={null}>
                            <ambientLight intensity={1.2} />
                            <pointLight position={[10, 10, 10]} />
                            <Model url={modelUrl} scale={modelScale} />
                            <OrbitControls />
                        </Suspense>
                    </Canvas>
                </div>
            </body>
        </div>
    );
};
export default ModelViewer;
