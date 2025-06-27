import React, { useEffect, useRef } from 'react';
                                               //Import React and Hooks // useRef to access the webcam element & useEffect to load AI models & start the camera when the component appears.
import * as faceapi from 'face-api.js'; //Import face-api.js
const EmotionDetector =()=> { 
    const VideoRef = useRef(); 
    useEffect(() => { 
    const loadModels = async () => { 
    const MODEL_URL = '/models';
        await faceapi.nets.tinyFaceDetector.loadFromUri('/models/tiny_face_detector');
        await faceapi.nets.faceExpressionNet.loadFromUri('/models/face_expression');
     }
    [];
    loadModels();
})
}