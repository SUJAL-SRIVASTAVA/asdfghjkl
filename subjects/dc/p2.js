// subjects/os/p2.js
const express = require("express");
const router = express.Router();

// GET /os/p2
router.get("/", (req, res) => {
  const codeString = `
 // Digital Modulation Techniques Implementation in Scilab
// ASK, PSK, and FSK Modulation

clc;
clear;
close;

// Simulation parameters
bit_count = 10;        // Number of bits to transmit
bit_rate = 1000;       // Bit rate (bits per second)
samples_per_bit = 100; // Samples per bit
carrier_freq = 5000;   // Carrier frequency (Hz)
fs = bit_rate * samples_per_bit; // Sampling frequency

// Generate random binary data
data = round(rand(1, bit_count));

// Time vector for one bit
t_bit = 0:1/fs:(1/bit_rate - 1/fs);

// Create full time vector
t_total = 0:1/fs:(bit_count/bit_rate - 1/fs);

// Create carrier signal
carrier = sin(2*%pi*carrier_freq*t_total);

// ================== ASK Modulation ==================
ask_signal = [];
for i = 1:bit_count
    if data(i) == 1 then
        ask_signal = [ask_signal sin(2*%pi*carrier_freq*t_bit)];
    else
        ask_signal = [ask_signal zeros(1, length(t_bit))];
    end
end

// ================== PSK Modulation ==================
psk_signal = [];
for i = 1:bit_count
    if data(i) == 1 then
        psk_signal = [psk_signal sin(2*%pi*carrier_freq*t_bit)];
    else
        psk_signal = [psk_signal sin(2*%pi*carrier_freq*t_bit + %pi)];
    end
end

// ================== FSK Modulation ==================
freq_high = carrier_freq * 1.5; // Frequency for '1'
freq_low = carrier_freq * 0.5;  // Frequency for '0'

fsk_signal = [];
for i = 1:bit_count
    if data(i) == 1 then
        fsk_signal = [fsk_signal sin(2*%pi*freq_high*t_bit)];
    else
        fsk_signal = [fsk_signal sin(2*%pi*freq_low*t_bit)];
    end
end

// ================== Plotting Results ==================
figure(1);
clf();

// Plot original data
subplot(4,1,1);
plot2d2(linspace(0, bit_count/bit_rate, bit_count+1), [data data($)], style=2);
title('Original Binary Data', 'fontsize', 3);
xlabel('Time (s)');
ylabel('Amplitude');
a = gca();
a.data_bounds = [0, -0.5; bit_count/bit_rate, 1.5];

// Plot ASK signal
subplot(4,1,2);
plot(t_total, ask_signal);
title('ASK Modulation', 'fontsize', 3);
xlabel('Time (s)');
ylabel('Amplitude');
a = gca();
a.data_bounds = [0, -1.5; bit_count/bit_rate, 1.5];

// Plot PSK signal
subplot(4,1,3);
plot(t_total, psk_signal);
title('PSK Modulation', 'fontsize', 3);
xlabel('Time (s)');
ylabel('Amplitude');
a = gca();
a.data_bounds = [0, -1.5; bit_count/bit_rate, 1.5];

// Plot FSK signal
subplot(4,1,4);
plot(t_total, fsk_signal);
title('FSK Modulation', 'fontsize', 3);
xlabel('Time (s)');
ylabel('Amplitude');
a = gca();
a.data_bounds = [0, -1.5; bit_count/bit_rate, 1.5];

// ================== Spectrum Analysis ==================
figure(2);
clf();

// ASK Spectrum
subplot(3,1,1);
ask_fft = abs(fft(ask_signal));
f = (0:length(ask_fft)-1)*fs/length(ask_fft);
plot(f(1:length(f)/2), ask_fft(1:length(ask_fft)/2));
title('ASK Spectrum', 'fontsize', 3);
xlabel('Frequency (Hz)');
ylabel('Magnitude');

// PSK Spectrum
subplot(3,1,2);
psk_fft = abs(fft(psk_signal));
plot(f(1:length(f)/2), psk_fft(1:length(psk_fft)/2));
title('PSK Spectrum', 'fontsize', 3);
xlabel('Frequency (Hz)');
ylabel('Magnitude');

// FSK Spectrum
subplot(3,1,3);
fsk_fft = abs(fft(fsk_signal));
plot(f(1:length(f)/2), fsk_fft(1:length(fsk_fft)/2));
title('FSK Spectrum', 'fontsize', 3);
xlabel('Frequency (Hz)');
ylabel('Magnitude');
  `;
  res.json({ code: codeString });
});

module.exports = router;
