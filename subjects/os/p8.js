// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
  
#include <bits/stdc++.h>
#include <queue>

using namespace std;

struct p
{
    int arr;
    int num;
    int burst;
    int wt;
    int tt;
};

void fcfs(queue<p> process)
{
    int timestamp = 0;
    int total_wt = 0;
    int total_tt = 0;
    int n = process.size();

    while (!process.empty())
    {
        p curr = process.front();
        process.pop();
        if (timestamp < curr.arr)
        {
            int t = timestamp;
            for (int i = 0; i < curr.arr - t; i++)
            {
                cout << timestamp + 1 << " ---- No process is being executed" << endl;
                timestamp++;
            }
            cout << "\n";
        }

        curr.wt = timestamp - curr.arr;
        curr.tt = curr.wt + curr.burst;

        total_wt += curr.wt;
        total_tt += curr.tt;

        cout << "Process " << curr.num << " is being executed\n";
        for (int i = 0; i < curr.burst; i++)
        {
            cout << timestamp + 1 << " ---- Process-" << curr.num << endl;
            timestamp++;
        }
        cout << "Process " << curr.num << " is completed\n\n";

        cout << "Process " << curr.num << " Arrival Time: " << curr.arr << endl;
        cout << "Process " << curr.num << " Waiting Time: " << curr.wt << endl;
        cout << "Process " << curr.num << " Turnaround Time: " << curr.tt << endl;
        cout << "\n";
    }
    cout << "\nAverage Waiting Time: " << (float)total_wt / n << endl;
    cout << "Average Turnaround Time: " << (float)total_tt / n << endl;
}

int main()
{
    queue<p> process;
    int n;
    cout << "Enter the number of processes: ";
    cin >> n;
    for (int i = 0; i < n; i++)
    {
        int parrival, pburst;
        cout << "Enter process " << i + 1 << "'s arrival time: ";
        cin >> parrival;
        cout << "Enter process " << i + 1 << "'s burst time: ";
        cin >> pburst;
        process.push({parrival, i + 1, pburst, 0, 0});
    }

    fcfs(process);
    return 0;
}
  `;
  res.json({ code: codeString });
});

module.exports = router;
