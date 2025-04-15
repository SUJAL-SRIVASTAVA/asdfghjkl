// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
carrier_freq = 15;
input_signal = 5;
carrier_amp = 5;
message_amp = 0.5;
beta_FM = 4;
beta_PM = 2;

t = 0:0.001:1;


ms = message_amp * sin(2 * %pi * input_signal * t);


cs = carrier_amp * cos(2 * %pi * carrier_freq * t);

am = (1 + ms) .* cs;

fm = carrier_amp * cos(2 * %pi * carrier_freq * t + 2 * %pi * beta_FM * ms);

pm = carrier_amp * cos(2 * %pi * carrier_freq * t + 2 * %pi * beta_PM * cumsum(ms));

figure;

subplot(2,3,1);
plot(t, ms, 'b');
title('Message Signal');
xlabel('Time (s)');
ylabel('Amplitude');

subplot(2,3,2);
plot(t, cs, 'r');
title('Carrier Signal');
xlabel('Time (s)');
ylabel('Amplitude');

subplot(2,3,3);
plot(t, am, 'g');
title('Amplitude Modulation');
xlabel('Time (s)');
ylabel('Amplitude');

subplot(2,3,4);
plot(t,fm, 'm');
title('Frequency Modulation');
xlabel('Time (s)');
ylabel('Amplitude');

subplot(2,3,5);
plot(t, pm, 'b');
title('Phase Modulation');
xlabel('Time (s)');
ylabel('Amplitude');


`;
  res.json({ code: codeString });
});

module.exports = router;
