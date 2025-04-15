// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `


t = 0:0.01:2*%pi;

x1 = sin(t);
x2 = cos(t);
x3 = squarewave(t);

clf();
subplot(3,1,1);
plot(t, x1);
xlabel("Time");
ylabel("Amplitude");
title("Sine Wave");


subplot(3,1,2);
plot(t, x2);
xlabel("Time");
ylabel("Amplitude");
title("Cosine Wave");


subplot(3,1,3);
plot(t, x3);
xlabel("Time");
ylabel("Amplitude");
title("Square Wave");

Time vector
//Fs = 1000;               // Sampling frequency (samples per second)
t = 0:1/Fs:1;            // Time vector (1 second duration)

// // Signal: A=2, f=5Hz, phase=π/4
A = 2;
f = 5;
phi = %pi/4;
x = A * sin(2*%pi*f*t + phi);

// // Plot time domain
clf();
subplot(2,1,1);
plot(t, x);
xlabel("Time (s)");
ylabel("Amplitude");
title("Pure Sine Wave (A=2, f=5Hz, Phase=π/4)");

// // Frequency domain
n = length(x);
X = fft(x, -1);               // Forward FFT
f_axis = Fs*(0:n-1)/n;        // Frequency axis in Hz

// Plot frequency domain (only half spectrum)
subplot(2,1,2);
plot(f_axis(1:n/2), abs(X(1:n/2))/n);
xlim([0 50]); // Zoom into 0–50 Hz
xlabel("Frequency (Hz)");
ylabel("Magnitude");
title("Frequency Domain (Pure Signal)");

Parameters
fs = 1000; // sampling frequency
t = 0:1/fs:1; // time vector from 0 to 1s



// Composite signal: 5Hz, 10Hz, 20Hz
x = sin(2*%pi*5*t) + sin(2*%pi*10*t) + sin(2*%pi*20*t);

// FFT
X = fft(x, -1);
n = length(X);
f_axis = (0:n-1)*(fs/n); // Proper frequency axis in Hz

// Plot
clf();
subplot(2,1,1);
plot(t, x);
xlabel("Time (s)");
ylabel("Amplitude");
title("Composite Signal (5Hz + 10Hz + 20Hz)");

subplot(2,1,2);
plot(f_axis(1:n/2), abs(X(1:n/2))/n);
xlabel("Frequency (Hz)");
ylabel("Magnitude");
title("Frequency Domain (Composite Signal)");
xlim([0 50]); // Limit view to main components


  `;
  res.json({ code: codeString });
});

module.exports = router;
