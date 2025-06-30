import React, { useRef, useEffect, useState } from 'react';
import * as faceapi from 'face-api.js';

const EmotionDetector = () => {
  const videoRef = useRef();
  const [emotion, setEmotion] = useState("Waiting...");
  const [emoji, setEmoji] = useState("⏳");

  const emojiMap = {
    happy: "😄",
    sad: "😢",
    angry: "😠",
    fearful: "😨",
    disgusted: "🤢",
    surprised: "😲",
    neutral: "😐",
    "No face detected": "❌",
    "Waiting...": "⏳",
  };

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = '/models';
      await faceapi.nets.tinyFaceDetector.loadFromUri(`${MODEL_URL}/tiny_face_detector`);
      await faceapi.nets.faceExpressionNet.loadFromUri(`${MODEL_URL}/face_expression`);
      startVideo();
    };

    const startVideo = () => {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;

          // Start detection when video is playing
          videoRef.current.onloadeddata = () => {
            detectExpressions();
          };
        })
        .catch((err) => {
          console.error("Error accessing webcam:", err);
        });
    };

    const detectExpressions = () => {
      setInterval(async () => {
        if (!videoRef.current) return;

        const detections = await faceapi
          .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
          .withFaceExpressions();

        if (detections.length > 0) {
          const expressions = detections[0].expressions;
          const maxEmotion = Object.keys(expressions).reduce((a, b) =>
            expressions[a] > expressions[b] ? a : b
          );
          setEmotion(maxEmotion);
          setEmoji(emojiMap[maxEmotion] || "❓");
          console.log("All expressions:", expressions);
        } else {
          setEmotion("No face detected");
          setEmoji("❌");
        }
      }, 1000);
    };

    loadModels();
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <video
        ref={videoRef}
        autoPlay
        muted
        width="400"
        height="300"
        style={{ border: '1px solid black', marginBottom: '10px' }}
      />
      <h3 style={{ fontSize: '1.5rem' }}>
        {emoji} Detected Emotion: {emotion}
      </h3>
    </div>
  );
};

export default EmotionDetector;
