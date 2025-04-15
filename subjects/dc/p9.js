// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
// ========================
// Function: XOR operation
// ========================
function result = xor_bits(a, b)
    a = matrix(a, 1, -1);
    b = matrix(b, 1, -1);
    result = zeros(1, length(b));
    for i = 1:length(b)
        result(i) = bitxor(a(i), b(i));
    end
endfunction

// ========================
// Function: CRC Division
// ========================
function remainder = mod2div(dividend, divisor)
    dividend = matrix(dividend, 1, -1);
    divisor = matrix(divisor, 1, -1);
    pick = length(divisor);
    tmp = dividend(1:pick);

    while pick <= length(dividend)
        if tmp(1) == 1 then
            tmp = xor_bits(tmp, divisor);
        else
            tmp = xor_bits(tmp, zeros(1, length(divisor)));
        end
        pick = pick + 1;
        if pick <= length(dividend) then
            tmp($+1) = dividend(pick);
        end
    end

    remainder = tmp;
endfunction

// ========================
// Function: CRC Encoder
// ========================
function [encoded_data, crc] = encode_crc(data, key)
    data = matrix(data, 1, -1);
    key = matrix(key, 1, -1);
    key_len = length(key);

    appended_data = [data, zeros(1, key_len - 1)];
    crc = mod2div(appended_data, key);
    crc = matrix(crc, 1, -1);

    encoded_data = [data, crc($ - key_len + 2 : $)];
endfunction

// ========================
// Function: Simulate Noisy Channel
// ========================
function noisy_data = transmit_through_noisy_channel(data, bit_to_flip)
    data = matrix(data, 1, -1);
    noisy_data = data;
    if bit_to_flip == 0 then
        // Random bit flip
        pos = grand(1, 1, "uin", 1, length(data));
    else
        // Flip user-specified bit
        pos = bit_to_flip;
    end
    noisy_data(pos) = 1 - noisy_data(pos);
    disp("Bit flipped at position: " + string(pos));
endfunction

// ========================
// Function: Detect Errors
// ========================
function is_error = detect_error(received_data, key)
    received_data = matrix(received_data, 1, -1);
    key = matrix(key, 1, -1);
    remainder = mod2div(received_data, key);
    if sum(remainder) == 0 then
        is_error = %f;
    else
        is_error = %t;
    end
endfunction

// ========================
//           MAIN
// ========================
clc;
disp("=== CRC Error Detection in Noisy Channel ===");

// === INPUT ===
data = [1 0 1 1 0 1];         // Binary data to transmit
key  = [1 0 1 1];             // Generator polynomial (divisor)

// === ENCODE ===
[encoded_data, crc] = encode_crc(data, key);
disp("Original data: " + strcat(string(data)));
disp("CRC: " + strcat(string(crc)));
disp("Encoded data (data + CRC): " + strcat(string(encoded_data)));

// === TRANSMISSION ===
flip_choice = 1; // Change to 0 for random bit flip, or enter bit index (e.g., 3)
noisy_data = transmit_through_noisy_channel(encoded_data, flip_choice);
disp("Received data (after noise): " + strcat(string(noisy_data)));

// === DETECTION ===
if detect_error(noisy_data, key) then
    disp("❌ Error detected in received data.");
else
    disp("✅ No error detected. Data is valid.");
end

  `;
  res.json({ code: codeString });
});

module.exports = router;
